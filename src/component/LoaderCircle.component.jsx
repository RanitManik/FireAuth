import { useState, useEffect } from "react";

const colors = ["#d62d20", "#0057e7", "#008744", "#ffa700"]; // Array of colors

const LoaderCircleComponent = () => {
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
        }, 1000); // Change color every 1 second

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors[colorIndex]}
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-20 w-20 animate-spin transition-colors duration-1000 lg:h-32 lg:w-32"
            >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
        </div>
    );
};

export default LoaderCircleComponent;
