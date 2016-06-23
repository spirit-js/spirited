var router = require("./lib/router")
var routes = require("./lib/routes")
var response = require("./lib/response-map")

var exports = {
  route: routes.verbs,
  response: response.create
}

exports.route.define = router.define
exports.route.verb = routes.verb

// TODO
var resources = require("./lib/resource")
exports.route.not_found = {}
exports.route.resources = resources

module.exports = exports