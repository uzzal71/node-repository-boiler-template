const BaseRepository = require('./base-repository');
const Order = require('../Models/Order');

class OrderRepository extends BaseRepository {
  constructor() {
    super(Order);
  }
}

module.exports = OrderRepository;
