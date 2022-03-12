const express = require("express");
const bodyParser = require("body-parser");
const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

app.use(bodyParser.json());
app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
/* --------------------- S W A G G E R   I N I T I A L I S A T I O N -------------- */
/** Swagger Initialization - START */
const swaggerOption = {
  swaggerDefinition: (swaggerJsdoc.Options = {
    info: {
      title: "my-posts",
      description: "API documentation",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:3000/"],
    },
  }),
  apis: ["index.js", "./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOption);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
/** Swagger Initialization - END */

app.listen(3000, () => {
  console.log(`Server is listining on port ${3000}`);
});

//nodejscourseproject
