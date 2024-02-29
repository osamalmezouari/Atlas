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
        "home": `url('https://images.unsplash.com/photo-1652042478725-371ea002f53e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        "findshap":`url('D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\find_shape.png')`,
        "blueshap":`url('D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\blueshap.png')`,
        "about":`url('https://themebeyond.com/beyond/billu/wp-content/uploads/2023/03/breeder_bg.jpg')`,
        "Aboutparent" :'url(https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/bg/about_bg_shape.png)',
        "Aboutchild" :`url(https://images.pexels.com/photos/4564996/pexels-photo-4564996.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        "navabouticon":'url(https://i0.wp.com/themebeyond.com/beyond/billu/wp-content/uploads/2023/03/about_icon.png?w=640&ssl=1)',
        "paws":'url(https://i0.wp.com/themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/icon/pawprint.png?w=640&ssl=1)',
        "avatar":'url(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600)'

      }
    },
  },
  plugins: [],
};
