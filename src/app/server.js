import app from "./app";

// Start The server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
