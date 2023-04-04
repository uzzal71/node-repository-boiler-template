const BaseRepository = require('./base-repository');
const Brand = require('../Models/Brand');

class BrandRepository extends BaseRepository {
  constructor() {
    super(Brand);
  }

  async findByEmail(email) {
    return this.model.findOne({ email });
  }
}
module.exports = BrandRepository;
