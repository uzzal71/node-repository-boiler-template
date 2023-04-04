class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async find(query = {}) {
    return this.model.find(query);
  }

  async findOne(query = {}) {
    return this.model.findOne(query);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async create(data) {
    const entity = new this.model(data);
    await entity.save();
    return entity;
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;