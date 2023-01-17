/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      mainColor_yellow: '#FFB600',
      subColor_grey: '#D9D9D9',
      backgroudColor_white: '#F5F5F5',
      fontColor_Black: '#505050',
      fontColor_white: '#FFFFFF',
      categoryBtnColor_grey: '#F0F0F0',
    },
    borderWidth: {
      border_md: '3px',
    },
    width: {
      logoWidth: '217px',
      inputItemWidth: '920px',
      mainBtnWidth: '450px',
      categoryBtnWidth: '112px',
    },
    height: {
      logoHeight: '35px',
      inputItemHeight: '93px',
      mainBtnHeight: '75px',
      categoryBtnHeight: '45px',
    },
    borderRadius: {
      borderRadius_sm: '20px',
      borderRadius_md: '40px',
      borderRadius_lg: '79px',
    },
    fontSize: {
      fontSize_sm: '16px',
      fontSize_md: '22px',
      fontSize_lg: '25px',
    },
    extend: {},
  },
  plugins: [],
};
