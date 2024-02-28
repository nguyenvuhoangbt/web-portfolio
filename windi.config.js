import filters from 'windicss/plugin/filters';
import aspect from 'windicss/plugin/aspect-ratio';
import scrollSnapPlugin from 'windicss/plugin/scroll-snap';
import { defineConfig } from 'windicss/helpers';
import { colors } from './windi.config.color';

export default defineConfig({
  attributify: {
    prefix: 'w-',
  },
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  darkMode: 'class',
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
        ...colors,
      },
      fontFamily: {
        inherit: 'inherit',
      },
      boxShadow: {
        'contact-box': '4px 0 8px hsla(0, 0%, 4%, .3)',
      },
      animation: {
        'infinite-horizontal': 'swipe 15000ms linear infinite backwards',
      },
    },
  },
  plugins: [filters, aspect, scrollSnapPlugin],
});
