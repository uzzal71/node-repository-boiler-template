const BaseRepository = require('./base-repository');
const Order = require('../models/Order');

class OrderRepository extends BaseRepository {
  constructor() {
    super(Order);
  }
}

module.exports = OrderRepository;
