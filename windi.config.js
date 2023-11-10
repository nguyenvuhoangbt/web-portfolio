import { defineConfig } from 'windicss/helpers';
import colors from 'windicss/colors';
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
      h3: '1.25rem',
      normal: '1rem',
      small: '0.813rem',
      smaller: '0.75rem',
    },
    extend: {
      colors: {
        container: '#d4d4d4',
        body: '#dedede',
      },
      fontFamily: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [filters, aspect, scrollSnapPlugin],
});
