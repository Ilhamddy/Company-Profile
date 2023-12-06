// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './components/**/*.{js,ts,jsx,tsx,mdx}',
//     './app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
// theme: {
//   extend: {
//     colors: {
//       "primary": "#1348E8",
//       "secondary": "#DDF2FD",
//       "tartiary": "#707070",
//       "pink": "#EE9AE5",
//     },
//     backgroundImage: {
//       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
//       'gradient-conic':
//         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
//       'myimage': "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",

//     },
//   },
// },
//   plugins: [],
// }

import flowbite from "flowbite/plugin";

const config = {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  plugins: [flowbite],
  theme: {
    extend: {
      colors: {
        primary: "#092635",
        secondary: "#DDF2FD",
        tartiary: "#707070",
        pink: "#EE9AE5",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        myimage: "url('/ship2.jpg')",
        myimage2: "url('/ship.jpg')",
        myimage3: "url('/ship3.jpg')",
      },
    },
  },
};

export default config;
