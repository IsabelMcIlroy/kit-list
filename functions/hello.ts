import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async function (event: HandlerEvent, context: HandlerContext) {
  const { identity, user } = context.clientContext;
  console.log(identity, user)
  return{
    statusCode: 200,
    body: stringifyJSON(user)
  }
};

export { handler };

const stringifyJSON = data => {
  if (data === undefined)
    return undefined
  else if (data === null)
    return 'null'
  else if (data.constructor === String)
    return '"' + data.replace(/"/g, '\\"') + '"'
  else if (data.constructor === Number)
    return String(data)
  else if (data.constructor === Boolean)
    return data ? 'true' : 'false'
  else if (data.constructor === Array)
    return '[ ' + data.reduce((acc, v) => {
      if (v === undefined)
        return [...acc, 'null']
      else
        return [...acc, stringifyJSON(v)]
    }, []).join(', ') + ' ]'
  else if (data.constructor === Object)
    return '{ ' + Object.keys(data).reduce((acc, k) => {
      if (data[k] === undefined)
        return acc
      else
        return [...acc, stringifyJSON(k) + ':' + stringifyJSON(data[k])]
    }, []).join(', ') + ' }'
  else
    return '{}'
}
