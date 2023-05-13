import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
  const { identity, user } = context.clientContext;
  console.log(identity, user)
  return{
    statusCode: 200,
    body: identity
  }
};

export { handler };

