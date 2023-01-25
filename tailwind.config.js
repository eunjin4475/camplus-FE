/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      mainColor: '#FFB600',
      subColor: '#D9D9D9',

      textColor_black: '#000000',
      textColor_grey: '#505050',
      textColor_white: '#FFFFFF',
      textColor_red: '#F60001',

      categoryColor: '#F0F0F0',
    },
    borderWidth: {
      border_md: '3px',
    },
    width: {
      full: '100%',
      logoWidth: '217px',

      ItemWidth: '920px',

      mainBtnWidth: '450px',
      categoryBtnWidth: '112px',
      bottomNavBtnImgWidth: '35px',
    },
    height: {
      height: '100vh',
      logoHeight: '35px',

      postItemHeight: '72px',
      inputItemHeight: '93px',
      commentItemHeight: '93px',
      listItemHeight: '131px',
      postItemBodyHeight: '200px',

      mainBtnHeight: '75px',
      categoryBtnHeight: '45px',
      bottomNavBtnImgHeight: '35px',

      homeContentHeight: '70vh',
      signupContentHeight: '60vh',
      commentHeight: '30vh',
      bottomNavBtnListHeight: '6vh',
      categoryBtnListHeight: '8vh',
    },
    borderRadius: {
      borderRadius_sm: '20px',
      borderRadius_md: '40px',
      borderRadius_lg: '79px',
    },
    fontSize: {
      fontSize_sm: '14px',
      fontSize_md: '18px',
      fontSize_lg: '22px',
    },
    extend: {},
  },
  plugins: [],
};
