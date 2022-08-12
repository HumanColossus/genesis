/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            padding: {
                20: "20px;",
            },
            borderWidth: {
                0.1: "0.1px;",
            },
            boxShadow: {
                custom: "0px 0px 3.17099px rgba(255, 255, 255, 0.25), 1.58549px 1.057px 1.057px rgba(167, 186, 255, 0.17);",
            },
            fontFamily: {
                mono: ["Mono", "Inter", "sans-serif"],
                body: ["Body", "Inter", "sans-serif"],
                button: ["Button", "Inter", "sans-serif"],
                signature: ["Birthstone", "serif"],
            },
            maxWidth: {
                custom: "550px",
            },
            fontSize: {
                csm: "13px",
            },
            lineHeight: {
                5.5: "20.5px",
            },
        },
    },
    plugins: [],
};