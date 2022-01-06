const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const multer = require("multer");
const upload = multer({
    dest: "public/img/",
  });
  

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",upload.single("profile_pic"),
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/getusers", controller.getusers);

  app.post("/api/auth/addfeedback/:id", controller.addfeedback);
  app.post("/api/auth/getfeedback", controller.getfeedback);
};



















