import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue() ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    build: {
        outDir: path.resolve(__dirname, '../backend/'),
        
        // Paths
        // assetsRoot: path.resolve(__dirname, '../backend/public'), // 수정
        // assetsSubDirectory: 'static',
        // assetsPublicPath: '/',
      },
      devServer: {
        port: 3000,
        proxy: {
            '/': {
                '^/api': {
                    target,
                    changeOrigin: true,
                }
            },
          },
      },
      
    

    historyApiFallback: true,
})