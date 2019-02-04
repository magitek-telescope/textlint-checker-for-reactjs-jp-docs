const { createHalfSpaceRule } = require('../modules/halfSpace')

function createRules (context) {
  const exports = {}
  const rules = {}
  rules.halfSpace = createHalfSpaceRule(context)

  exports[context.Syntax.Str] = (node) => {
    rules.halfSpace(node)
  }
  return exports
}

module.exports = createRules
