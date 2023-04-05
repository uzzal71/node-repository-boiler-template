const express = require('express');
const OrderRepository = require('../Repositories/order-repository');
const ApiResponse = require('../Response/BaseResponse');

const router = express.Router();
const orderRepository = new OrderRepository();

export const getAllOrder = async (req, res) => {
    const user = await orderRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
};
  
export const saveOrder = async (req, res) => {
    const user = await orderRepository.create(req.body);
    ApiResponse.success(res, user);
};
  
export const updateUser = async (req, res) => {
    const user = await orderRepository.update(req.params.id, req.body);

    if (!user) {
        return ApiResponse.notFound(res, 'User not found');
    }

    ApiResponse.success(res, user);
};
  
export const deleteOrder = async (req, res) => {
    const result = await orderRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
};
  
  module.exports = router;
  