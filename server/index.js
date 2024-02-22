import express from "express";
import colors from "colors";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import schema from "../server/schema/schema.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

const app = express();

//db
connectDB();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
