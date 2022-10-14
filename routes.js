const fs = require("fs");

const handler = (req, res) => {
  const { url, method } = req;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello Assignment 1</h1></body>");
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write(`
    <body>
        <ul>
            <li id="user1">
                User1
            </li>
            <li id="user2">
                User2
            </li>
            <li id="user3">
                User3
            </li>
            <li id="user4">
                User4
            </li>
            <li id="user5">
                User5
            </li>
        </ul>
    </body>`);
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write(`
    <body>
        <form action="/log-user" method="POST">
            <input placeholder="Enter Username" name="username" type="text" />
            <button type="submit">
                Submit
            </button>
        </form>
    </body>
    `);
    res.write("</html>");
    return res.end();
  }
  if (url === "/log-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader("Location", "/users");
      return res.end();
    });
  }
};

module.exports = handler;
