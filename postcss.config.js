/* eslint-env node */

module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {
      hideWarningsByPath: [
        {
          path: /.*globalStyles\.scss$/,
          start: 1,
          end: 1,
        },
      ],
    },
    'postcss-preset-env': {
      features: {'nesting-rules': false},
    },
    ...(process.env.NODE_ENV === 'production' ? {cssnano: {}} : {}),
  },
};
