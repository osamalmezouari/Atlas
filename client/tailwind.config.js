const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        orange: '#ef6f18',
        wblue: '#1e4b57',
        dbleu: '#0a303a',
        coffe: 'rgb(255,245,203)',
        mywhite: '#fff',
        myblack: '',
        mygris: ''
      },
      fontFamily: {
        custom: ['Nunito', ...defaultTheme.fontFamily.sans],

      },
      backgroundImage: {
        "logo": "url('D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\2.png')",
        "navshap": "url('D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\nav_shape.png')",
        "home": `url('https://images.unsplash.com/photo-1494256997604-768d1f608cac?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        "findshap":`url('D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\find_shape.png')`

      }
    },
  },
  plugins: [],
};
