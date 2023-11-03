import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    zIndex: {
      fixed: 100,
    },
    extend: {
      backdropFilter: {
        'blur-1': 'blur(1px)',
      },
    },
  },
  plugins: [require('windicss/plugin/filters')],
});
