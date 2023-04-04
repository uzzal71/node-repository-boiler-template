const BaseRepository = require('./base-repository');
const Brand = require('../models/Brand');

class BrandRepository extends BaseRepository {
  constructor() {
    super(Brand);
  }

  async findByEmail(email) {
    return this.model.findOne({ email });
  }
}

export default BrandRepository;
