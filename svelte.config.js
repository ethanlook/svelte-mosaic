import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    paths: {
      base:
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        process.env.NODE_ENV === 'production' ? '/svelte-mosaic' : '',
    },

    /*
     * Merge our own includes with the generated includes from SvelteKit
     * so that our JS config can be properly type-checked / linted
     */
    typescript: {
      config: (tsconfig) => ({
        ...tsconfig,
        include: [
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          ...tsconfig.include,
          '../.eslintrc.cjs',
          '../.prettierrc.cjs',
          '../svelte.config.js',
        ],
      }),
    },
  },
};

export default config;
