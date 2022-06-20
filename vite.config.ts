import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig((command) => {
  return {
    plugins: [
      vue()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        "@c": path.resolve(__dirname, "src/components")
      }
    },
    // 服务设置
    server: {
      host: true, // host设置为true才可以使用network的形式，以ip访问项目
      port: 8088,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true, // 允许跨域
          // rewrite: (path) => path.replace('/gateway/', '/'), // 本地需要过滤 gateway 字段
          logLevel: 'debug'
        },
      },
    },
    // 打包设置
    build: {
      brotliSize: false,
      // 消除打包大小超过2000kb警告
      chunkSizeWarningLimit: 2000,
      minify: 'terser', // 混淆器 生产代码混淆
      // 在生产环境移除console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      assetsDir: 'static/assets',
      // 静态资源打包到dist下的不同目录
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        }
      }
    }
  }
})
