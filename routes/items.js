const controller = require("../controllers/items");
const validateToken = require("../utils").validateToken;

module.exports = (router) => {
  router
    .route("/items")
    .get(validateToken, controller.getAll)
    .post(validateToken, controller.add);

  router
    .route("/items/:id")
    .get(validateToken, controller.getOne)
    .put(validateToken, controller.update)
    .delete(validateToken, controller.delete);
};
