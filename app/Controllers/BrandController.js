const BrandRepository = require('../Repositories/brand-repository');
const ApiResponse = require('../Response/BaseResponse');

const brandRepository = new BrandRepository();

export const getAllBrand = async (req, res) => {
    const user = await brandRepository.findById(req.params.id);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
};
  
export const saveBrand = async (req, res) => {
    const user = await brandRepository.create(req.body);
    ApiResponse.success(res, user);
  };
  
  export const updateBrand = async (req, res) => {
    const user = await brandRepository.update(req.params.id, req.body);
  
    if (!user) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res, user);
};
  
export const deleteBrand = async (req, res) => {
    const result = await brandRepository.delete(req.params.id);
  
    if (!result) {
      return ApiResponse.notFound(res, 'User not found');
    }
  
    ApiResponse.success(res);
};

  