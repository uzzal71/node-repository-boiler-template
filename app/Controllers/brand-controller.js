const express = require('express');
const BrandRepository = require('../Repositories/brand-repository');
const ApiResponse = require('../Response/BaseResponse');

const router = express.Router();
const brandRepository = new BrandRepository();

router.get('/:id', async (req, res) => {
    const user = await brandRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  });
  
  router.post('/', async (req, res) => {
    const user = await brandRepository.create(req.body);
    ApiResponse.success(res, user);
  });
  
  router.put('/:id', async (req, res) => {
    const user = await brandRepository.update(req.params.id, req.body);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await brandRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
  });
  
  module.exports = router;
  