import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({  
  plugins: [   
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  base: '/QAL-new-project/',
  
}) 

// export default defineConfig({
//   base: '/QAL-new-project/',
//   plugins: [react()],
//   server: {
//     mimeTypes: {
//       'application/javascript': ['js', 'jsx']
//     }
//   }
// });

