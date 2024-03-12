const express = require("express");
const app = express();
const colors = require("colors");
const path = require("path");

const staticDir = "/home/runner/Raymond/Website";
const port = 3000;

// Static file serving for multiple directories
const staticDirs = ["Css", "Html", "Images", "Javascript", "React"];
staticDirs.forEach((dir) => {
  app.use(express.static(path.join(staticDir, dir)));
});

// Define routes
const routes = [
  { path: "/", file: "index.html" },
  { path: "/home", file: "index.html" },
  { path: "/about", file: "about.html" },
  { path: "/merch", file: "merch.html" },
  { path: "/blog", file: "blog.html" },
  { path: "/test", file: "load.html" },
  { path: "/load", file: "test.html" },
];

routes.forEach((route) => {
  app.get(route.path, (req, res) => {
    res.sendFile(path.join(staticDir, "Html", route.file));
  });
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(staticDir, 'Html', 'Error Pages', 'error.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`[SERVER] Server is running on port ${port}`.bold.brightGreen);
  console.log(`[Website] Website is good to go`.bold.brightGreen);
});
