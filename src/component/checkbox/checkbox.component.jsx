import LinkTextComponent from "../link_text/link_text_component.jsx";

const CheckboxComponent = () => {
  return (
    <>
      <div className="my-4 flex gap-3">
        <input
          className="my-auto h-full accent-blue-600 focus-visible:outline-blue-800"
          id="user-agreement"
          name="user-agreement"
          type="checkbox"
        />
        <label htmlFor="user-agreement">
          I agree with <LinkTextComponent to="/" text="Terms" /> and{" "}
          <LinkTextComponent to="/" text="Privacy" />
        </label>
      </div>
    </>
  );
};
export default CheckboxComponent;
