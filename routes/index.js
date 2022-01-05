const users = require("./users");
const items = require("./items");

module.exports = (router) => {
  users(router);
  items(router);
  return router;
};
