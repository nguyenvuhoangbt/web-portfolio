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
      biggest: '2.5rem',
      h2: '1.25rem',
      normal: '1rem',
      small: '0.813rem',
      smaller: '0.75rem',
    },
  },
  plugins: [filters, aspect, scrollSnapPlugin],
});
