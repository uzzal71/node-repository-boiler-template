const BaseRepository = require('./base-repository');
const User = require('../Models/User');

class UserRepository extends BaseRepository {
  constructor() {
    super(User);
  }

  async findByEmail(email) {
    return this.model.findOne({ email });
  }
}

module.exports = UserRepository;