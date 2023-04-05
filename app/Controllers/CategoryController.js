const CategoryRepository = require('../Repositories/category-repository');
const ApiResponse = require('../Response/BaseResponse');

const categoryRepository = new CategoryRepository();

export const getAllCategory = async (req, res) => {
    const user = await categoryRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
};
  
export const saveCategory = async (req, res) => {
    const user = await categoryRepository.create(req.body);
    ApiResponse.success(res, user);
};
  
export const updateCategory = async (req, res) => {
    const user = await categoryRepository.update(req.params.id, req.body);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
  };
  
export const deleteCategory = async (req, res) => {
    const result = await categoryRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
};
  
  