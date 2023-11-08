import { parkwindPlugin } from '@park-ui/tailwind-plugin';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [parkwindPlugin],

  parkUI: {
    accentColor: 'neutral',
    grayColor: 'slate',
    borderRadius: 'none'
  }
};
export default config;
