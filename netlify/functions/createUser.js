const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: event.headers.token,
  });

  const userData = JSON.parse(event.body);
  const data = userData.params;

  return client
    .query(q.Create(q.Collection("Users"), { data: { ...data } }))
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
