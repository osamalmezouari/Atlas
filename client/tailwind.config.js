const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  theme: {
    extend: {
      colors:{
        orange:'',
        wblue:'#1e4b57',
        dbleu:'#0a303a',
        coffe:'',
        mywhite:'',
        myblack:'',
        mygris:''
      },
      fontFamily: {
        custom: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage :{
        "logo" :"url('D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\logo.png')"
      }
    },
  },
  plugins: [],
};