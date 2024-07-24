import { createContext, useEffect, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../util/firebase.util.js";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChangedListener(async (user) => {
      if (user) {
        try {
          await createUserDocumentFromAuth(user);
        } catch (error) {
          console.error("Error creating user document", error);
        }
      }
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
