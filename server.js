const app = require("./src/index");

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is listening on Port ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log(`Server turn Off`);
  });
  process.exit();
});
