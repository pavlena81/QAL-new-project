import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// export default defineConfig({
//   base: '/QAL-new-project/',
//   plugins: [
//     { enforce: 'pre', ...mdx() },
//     react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
//   ],
// }) 

export default defineConfig({
  base: '/QAL-new-project/',
  plugins: [react()],
  server: {
    mimeTypes: {
      'application/javascript': ['js', 'jsx']
    }
  }
});