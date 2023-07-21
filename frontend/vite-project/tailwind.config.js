/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*{js,jsx}'
  ],
  theme: {
    extend: {
      maxWidth: {
        200: '200px',
        400: '400px'
      },
      maxHeight: {
        500: '500px'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          primary: '#a3ffb2',

          secondary: '#ad1703',

          accent: '#130cd6',

          neutral: '#1B192E',

          'base-100': '#263C50',

          info: '#88CAF6',

          success: '#12A189',

          warning: '#E29118',

          error: '#F42552'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
