const createHalfSpaceRule = (context) => {
  return function (node) {
    const text = context.getSource(node)
    const matches_01 = /[a-zA-Z][^\x00-\x7E、。（）「」’]/.exec(text)
    const matches_02 = /[a-zA-Z][^\x00-\x7E、。（）「」’]/.exec(text)
    const report = matches_01 || matches_02
    if (report) {
      context.report(
        node,
        new context.RuleError(`半角と全角の間は一文字あける : [${report[0]}] ... ${text}`)
      )
    }
  }
}

module.exports.createHalfSpaceRule = createHalfSpaceRule
