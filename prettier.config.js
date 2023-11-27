/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
    tabWidth: 4,
    singleQuote: false,
    semi: true,
    printWidth: 80,
    trailingComma: "es5",
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
