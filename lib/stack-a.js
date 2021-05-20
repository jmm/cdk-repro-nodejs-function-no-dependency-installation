"use strict"

const cdk = require('@aws-cdk/core')
const lambda = require("@aws-cdk/aws-lambda")
const {NodejsFunction} = require("@aws-cdk/aws-lambda-nodejs")
const path = require("path")

class StackA extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props)

    const functionA = new NodejsFunction(this, "function-a", {
      entry: path.join(__dirname, "..", "component", "function-a", "index.js"),
      handler: "lambdaHandler",
      runtime: lambda.Runtime.NODEJS_14_X,
    })
  }
}

module.exports = {StackA}
