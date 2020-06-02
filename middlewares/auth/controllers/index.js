const auth = {
  register: require("./register"),
  authenticate: require("./authenticate"),
  // deauthenticate: require("./deauthenticate"),
  isRegistered: require("./isRegistered"),
  isPasswordCorrect: require("./isPasswordCorrect"),
  // isAuthenticated: require("./isAuthenticated"),
  // isAuthorized: require("./isAuthorized"),
}

module.exports = auth
