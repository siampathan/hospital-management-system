const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const path = require("path");
const favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");
const exphbs = require("express-handlebars");
const expressValidator = require("express-validator");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const PORT = 8000;

var app = express();
app.use(express.static(__dirname + "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.engine("handlebars", exphbs.engine({ defaultLayout: "layout" }));
app.set("view engine", "handlebars");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const item = {
  errorFormatter: function (param, msg, value) {
    var namespace = param.split("."),
      root = namespace.shift(),
      formParam = root;

    while (namespace.length) {
      formParam += "[" + namespace.shift() + "]";
    }
    return {
      param: formParam,
      msg: msg,
      value: value,
    };
  },
};
app.use(expressValidator(item));

app.use(flash());
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});

app.use("/app", (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
});

const login = require("./routes/login");
const users = require("./routes/users");
const appRoute = require("./routes/app");
const patients = require("./routes/patients");
const settings = require("./routes/settings");
const diseases = require("./routes/diseases");
const rooms = require("./routes/rooms");

app.use("/", login);
app.use("/", appRoute);
app.use("/", users);
app.use("/", patients);
app.use("/", settings);
app.use("/", diseases);
app.use("/", rooms);

//var timestamp = new Date().getTime();

app.set("port", process.env.PORT || PORT);
app.listen(app.get("port"), function () {
  console.log("Server started on port " + app.get("port"));
});

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/hospitaldb");
