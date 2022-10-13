const faunadb = require("faunadb");
const q = faunadb.query;
require("dotenv").config();

exports.handler = async (event, context) => {
  const client = new faunadb.Client({
    secret: event.headers.token,
  });

  const userId = event.queryStringParameters.userId;
  console.log(userId);

  return client
    .query(
      q.Map(
        q.Paginate(q.Match(q.Index("user_by_auth0_user_id"), userId), {
          size: 500,
        }),
        q.Lambda(
          "user",
          q.Let(
            {
              userDoc: q.Get(q.Var("user")),
            },

            {
              ref: q.Select(["ref", "id"], q.Var("userDoc")),
              userId: q.Select(["data", "userId"], q.Var("userDoc")),
              userEmail: q.Select(["data", "userEmail"], q.Var("userDoc")),
            }
          )
        )
      )
    )
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
