const checkRequestingUser = (request, response, next) => {
  const xRequestingUser = request.get('x-requesting-user')
  const method = request.method;

  console.log(method)

  if (!xRequestingUser && method !== "GET") {
    response.status(401).json({message: "Unauthorized User"})
  } else {
    next()
  }
}

export default checkRequestingUser