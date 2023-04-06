const express = require('express');
const CategoryRepository = require('../Repositories/category-repository');
const ApiResponse = require('../Response/BaseResponse');

const router = express.Router();
const categoryRepository = new CategoryRepository();

router.get('/:id', async (req, res) => {
    const user = await categoryRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  });
  
  router.post('/', async (req, res) => {
    const user = await categoryRepository.create(req.body);
    ApiResponse.success(res, user);
  });
  
  router.put('/:id', async (req, res) => {
    const user = await categoryRepository.update(req.params.id, req.body);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await categoryRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
  });
  
  module.exports = router;
  