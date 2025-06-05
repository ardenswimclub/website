/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', // include all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

const tightProseStyles = (theme) => ({
  'li > ul': {
    marginTop: '0em',
    marginBottom: '0.5em',
  },
  'ul > li': {              
    marginTop: '0em',
    marginBottom: '0.5em',
  },
  'ol > li': {
    marginTop: '0em',
    marginBottom: '0em',
  },
  'li > p': {
    marginTop: '0em',
    marginBottom: '0em',
  },
  h2: {
    marginTop: '1em',
    marginBottom: '1em',
    fontSize: '1.5em',
  },
  h1: {
    fontSize: '2.6em',
  }
});

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        emoji: ['"Twemoji"', 'sans-serif'],
      },
      typography: (theme) => ({
        tight: {
          css: {
            ...tightProseStyles(theme)           
          },
        },
        tightSmall: {
          css: {
            ...tightProseStyles(theme),
            h1: {
              fontSize: '1.6em',
            },
            h2: {
              fontSize: '1.2em'
            }
          },
        },
      }),
    },
  },
}
