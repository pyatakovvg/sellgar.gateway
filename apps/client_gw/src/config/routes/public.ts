
export default [
  import('../../api/v1/product_srv/group/getAll'),
  import('../../api/v1/product_srv/category/getAll'),

  import('../../api/v1/product_srv/product/getAttributes'),
  import('../../api/v1/product_srv/product/getBrands'),
  import('../../api/v1/product_srv/product/getAll'),
  import('../../api/v1/product_srv/product/get'),

  import('../../api/v1/file_srv/image/get'),

  import('../../api/v1/checkout_srv/checkout/get'),
  import('../../api/v1/checkout_srv/checkout/add'),
  import('../../api/v1/checkout_srv/checkout/delete'),

  import('../../api/v1/checkout_srv/delivery/getAll'),
  import('../../api/v1/checkout_srv/payment/getAll'),
];
