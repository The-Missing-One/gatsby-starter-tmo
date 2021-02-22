module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      xsm: '560px',
      sm: '640px',
      md: '768px',
      mdx: '960px',
      lg: '1280px',
      xl: '1600px',
      xxl: '1920px',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      md: '.950rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.5rem',
    },
    extend: {
      colors: {},
      margin: {
        '-4': '-1rem',
        '-8': '-2rem',
        '-12': '-3rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-28': '-7rem',
        '-32': '-8rem',
        '-36': '-9rem',
        '-40': '-10rem',
      },
      minHeight: {
        textarea: '80px',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
      },
      minWidth: {
        '1/12': '8.3333333%',
        '2/12': '16.6666666%',
        '3/12': '25%',
        '4/12': '33.3333333%',
        '5/12': '41.6666666%',
        '6/12': '50%',
        '7/12': '58.3333333%',
        '8/12': '66.6666666%',
        '9/12': '75%',
        '10/12': '83.3333333%',
        '11/12': '91.6666666%',
        '12/12': '100%',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        80: '20rem',
        96: '24rem',
        128: '32rem',
      },
      maxWidth: {
        '1/12': '8.3333333%',
        '2/12': '16.6666666%',
        '3/12': '25%',
        '4/12': '33.3333333%',
        '5/12': '41.6666666%',
        '6/12': '50%',
        '7/12': '58.3333333%',
        '8/12': '66.6666666%',
        '9/12': '75%',
        '10/12': '83.3333333%',
        '11/12': '91.6666666%',
        '12/12': '100%',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        18: '4.5rem',
        20: '5rem',
        22: '5.5rem',
        24: '6rem',
        26: '6.5rem',
        28: '7rem',
        30: '7.5rem',
        32: '8rem',
        48: '12rem',
        56: '14rem',
        64: '16rem',
        80: '20rem',
        96: '24rem',
        128: '32rem',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
