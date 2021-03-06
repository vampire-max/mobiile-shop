module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif']
      },

      colors: {
        gray: {
          300: "#C9C9C9",
          500: "#515C6F",
          700: "#222953",
          800: "#161D46",
          dark: "#232323",
        },

        yellow: {
          DEFAULT: "#FF9900",
        },

        blue: {
          DEFAULT: "#67B5F7",
        },

        purple: {
          DEFAULT: "#521AB2",
        },

        red: {
          DEFAULT: "#FF0000",
        }
      },
    },
  },
  variants: {
    extend: {
      visibility: ['focus'],
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [  
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ],
}
