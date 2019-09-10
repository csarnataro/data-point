const { Reducer } = require("./Reducer");

/**
 * @alias ReducerNative
 * @extends Reducer
 */
class ReducerNative extends Reducer {
  static isType() {
    throw new Error("must be implemented");
  }
}

module.exports = {
  ReducerNative
};
