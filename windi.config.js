import { defineConfig } from 'windicss/helpers';
import filters from 'windicss/plugin/filters';
import aspect from 'windicss/plugin/aspect-ratio';
import scrollSnapPlugin from 'windicss/plugin/scroll-snap';

export default defineConfig({
  attributify: {
    prefix: 'w-',
  },
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    zIndex: {
      fixed: 100,
    },
    fontSize: {
      biggest: '2rem',
      h2: '1.5rem',
      h3: '1.25rem',
      normal: '1rem',
      small: '0.85rem',
      smaller: '0.75rem',
    },
    extend: {
      colors: {
        primary: '#FF5841',
        secondary: '#d2e9e9',
        black: '#25171A',
        gray: '#f5f5f5',
      },
      fontFamily: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [filters, aspect, scrollSnapPlugin],
});
