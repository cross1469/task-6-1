# 使用 Node.js 20.12.2 的 slim 版本作為基底映像
FROM node:20.12.2-slim

# 設定工作目錄
WORKDIR /app

# 將檔案複製到工作目錄
COPY . .

# 安裝 npm 依賴
RUN rm -rf node_modules && npm ci

# 開放應用程式通訊端
EXPOSE 8080

# 指定容器啟動時執行的命令
CMD ["node", "server.js"]