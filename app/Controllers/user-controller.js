const express = require('express');
const UserRepository = require('../Repositories/user-repository');
const ApiResponse = require('../Response/BaseResponse');

const router = express.Router();
const userRepository = new UserRepository();

router.get('/:id', async (req, res) => {
    const user = await userRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  });
  
  router.post('/', async (req, res) => {
    const user = await userRepository.create(req.body);
    ApiResponse.success(res, user);
  });
  
  router.put('/:id', async (req, res) => {
    const user = await userRepository.update(req.params.id, req.body);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  });
  
  router.delete('/:id', async (req, res) => {
    const result = await userRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
  });
  
  module.exports = router;
  