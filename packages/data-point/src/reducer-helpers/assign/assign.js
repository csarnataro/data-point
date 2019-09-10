const { Reducer } = require("../../Reducer");
const { createReducer } = require("../../create-reducer");


/**
 * @class
 * @classdesc ReducerAssign, used for assigning the result of the `resolve` to
 *            the accumulator value
 * @extends Reducer
 */
class ReducerAssign extends Reducer {
  constructor(spec) {
    super(undefined, spec);
    this.assignReducer = createReducer(spec);
  }

  static create(spec) {
    return new ReducerAssign(spec);
  }

  /**
   * @param {Accumulator} accumulator
   * @param {Function} resolveReducer
   * @returns {Promise}
   */
  async resolve(accumulator, resolveReducer) {
    const value = await resolveReducer(accumulator, this.assignReducer);
    return Object.assign({}, accumulator.value, value);
  }
}

module.exports = {
  ReducerAssign
};
