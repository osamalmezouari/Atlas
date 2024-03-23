const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  ],

  theme: {
    extend: {
      colors: {
        orange: '#ef6f18',
        wblue: '#143556',
        dbleu: '#0a303a',
        coffe: 'rgb(255,245,203)',
        mywhite: '#fff',
        myblack: '#181a21',
        mygris: ''
      },
      fontFamily: {
        custom: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      backgroundColor: {
        mysky :'#d5e6eb'
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
        "Aboutchildmd":'url(https://images.pexels.com/photos/1462635/pexels-photo-1462635.jpeg?auto=compress&cs=tinysrgb&w=600)',
        "navabouticon":'url(https://i0.wp.com/themebeyond.com/beyond/billu/wp-content/uploads/2023/03/about_icon.png?w=640&ssl=1)',
        "paws":'url(https://i0.wp.com/themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/icon/pawprint.png?w=640&ssl=1)',
        "avatar":'url(https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600)',
        "rev":'url(https://themebeyond.com/beyond/billu/wp-content/uploads/2023/03/adoption_shop_bg.jpg)',
        "revshap":'url(D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\testi_bg_shape01.png)',
        "slideicon":'url(https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/icon/arrow_bg.png)',
        "subscribe":"url(https://themebeyond.com/beyond/billu/wp-content/uploads/2023/02/BG.jpg)",
        // "devshap":"url(https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/bg/faq_bg_shape02.png)",
        // "React":"url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg)",
        // "NestJS":"url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg)",
        // "MySql":"url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg)",
        // "tailwind":"url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg)",
        // "npm":"url(https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg)",
        "dogleft":"url(https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/images/footer_shape01.png)",
        "dogright":"url(https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/images/footer_shape02.png)",
        "footer":"url(https://themebeyond.com/beyond/billu/wp-content/uploads/2023/03/footer_bg.jpg)",
        "copyright":"url(https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/bg/copyright_shape.png)",
        "login":"url(https://images.unsplash.com/photo-1617813480301-28f5ebc0dfab?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        "register":"url(https://images.pexels.com/photos/1309866/pexels-photo-1309866.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)",
        "adoptionlist" :"url(https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=600)",
        "path":"url(https://themebeyond.com/beyond/billu/wp-content/uploads/2023/03/H2B.jpg)",
        "map":"url(D:\\Oussama\\PROJECTS\\Atlas\\client\\public\\assets\\images\\map.png)",
        "subscribeimg" :"url('https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/icon/sn_icon.png')",
        "loading":"url('https://themebeyond.com/beyond/billu/wp-content/themes/billu/assets/img/preloader.gif')"
      }
    },
  },
  plugins: [],
};
