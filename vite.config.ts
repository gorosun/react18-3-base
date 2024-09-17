/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(), // reactより先にtsconfigPathsを追加しないと動作しない
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // ソースマップの生成を無効化
  },
  test: {
    globals: true, // グローバルにテストユーティリティを提供
    environment: "happy-dom", // 仮想DOMを使用することでブラウザの動作をエミュレート
    setupFiles: ["./vitest-setup.ts"], // テスト前のsetupファイルを指定
    coverage: {
      provider: "v8", // V8エンジンを使用したカバレッジの生成
      reporter: ["text", "json", "html"], // 生成するレポートのフォーマット
    },
  },
});
