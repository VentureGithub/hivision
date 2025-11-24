// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
// })




import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()
    ,tailwindcss(),
  ],
  server: {
    host: true,     // 👈 add this
    port: 3000,
    open: true
  }
})
