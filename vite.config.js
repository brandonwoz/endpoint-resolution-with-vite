import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    return {
        resolve: {
            alias: {
                './api': mode === 'production' ? './api' : './api/mocks',
            },
        },
    };
});
