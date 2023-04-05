const express = require('express');
const UserRepository = require('../Repositories/user-repository');
const ApiResponse = require('../Response/BaseResponse');

const router = express.Router();
const userRepository = new UserRepository();

export const getAllUser = async (req, res) => {
    const user = await userRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
};
  
export const saveUser =  async (req, res) => {
    const user = await userRepository.create(req.body);
    ApiResponse.success(res, user);
};
  
export const updateUser = async (req, res) => {
    const user = await userRepository.update(req.params.id, req.body);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
};
  
export const deleteUser = async (req, res) => {
    const result = await userRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
};
  

  