module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: '#083d77',
        body: 'var(--background)',
      },
      backgroundColor: {
        emphasis: 'var(--background-emphasis)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
      },
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
