const { ReducerEntity } = require("../../ReducerEntity");

/**
 * @class
 * @classdesc DataPoint entity of type `Model`
 * @extends ReducerEntity
 */
class ReducerModel extends ReducerEntity {
  static create(spec) {
    return new ReducerModel(spec);
  }
}

module.exports = {
  ReducerModel
};
