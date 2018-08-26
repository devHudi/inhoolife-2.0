import mongoose from "mongoose";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";
import express from "express";
const app = express();
import multer from "multer";

mongoose.connect("mongodb://localhost/inhoolife2");

const GQLServer = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});

const options = {
  port: 4000,
  playground: false
};

GQLServer.start(options, () =>
  console.log("GraphQL server running on 4000 port")
);

app.use(express.static("public"));

const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("img"), (req, res) => {});

app.listen(4001, () => console.log("Express server running on 4001 port"));
