import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
const resolve = (dir: string) => path.join(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve("src"),
      comps: resolve("src/components"),
      api: resolve("src/api"),
    },
  },
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: "always",
        globalVars: {
          blue: "#1CC0FF",
        },
      },
    },
  },
  server: {
    // 配置前端服务器地址和端口
    host: "127.0.0.1",
    port: 3088,
    strictPort: false,
    open: false,
    proxy: {
      "/api": {
        target: "",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
