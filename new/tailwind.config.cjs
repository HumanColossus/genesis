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
        },
    },
    plugins: [],
};