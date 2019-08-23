const fastify = require("fastify")({
  logger: true
});

// register fastify plugin
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/public/" // optional: default "/"
});

// route
fastify.get("/about", async (request, reply) => {
  return { about: "about route" };
});

// run
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
