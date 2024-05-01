const http = require("http");
const app = require("./app");

const port = process.env.PORT || 8080;

const server = http.createServer(app);

server.listen(port);

server.on("error", (err) => {
  console.error(err);
});

server.on("listening", () => {
  console.log(`Server listening on ${port}`);
});
