
export default [
  import('../../api/v1/identity_srv/user/getAll'),
  import('../../api/v1/identity_srv/user/current'),

  import('../../api/v1/product_srv/store/getAll'),
  import('../../api/v1/product_srv/store/upsert'),

  import('../../api/v1/product_srv/product/get'),
  import('../../api/v1/product_srv/product/copy'),
  import('../../api/v1/product_srv/product/getAll'),
  import('../../api/v1/product_srv/product/upsert'),

  import('../../api/v1/file_srv/image/get'),
  import('../../api/v1/file_srv/image/getAll'),
  import('../../api/v1/file_srv/image/create'),
  import('../../api/v1/file_srv/image/delete'),

  import('../../api/v1/file_srv/folder/getAll'),

  import('../../api/v1/product_srv/currency/getAll'),

  import('../../api/v1/product_srv/unit/getAll'),
  import('../../api/v1/product_srv/unit/create'),
  import('../../api/v1/product_srv/unit/delete'),

  import('../../api/v1/product_srv/attribute/getAll'),
  import('../../api/v1/product_srv/attribute/upsert'),
  import('../../api/v1/product_srv/attribute/delete'),

  import('../../api/v1/product_srv/brand/getAll'),
  import('../../api/v1/product_srv/brand/create'),
  import('../../api/v1/product_srv/brand/delete'),

  import('../../api/v1/product_srv/category/getAll'),
  import('../../api/v1/product_srv/category/create'),
  import('../../api/v1/product_srv/category/delete'),

  import('../../api/v1/product_srv/group/getAll'),
  import('../../api/v1/product_srv/group/create'),
  import('../../api/v1/product_srv/group/delete'),

  import('../../api/v1/checkout_srv/order/get'),
  import('../../api/v1/checkout_srv/order/getAll'),

  import('../../api/v1/checkout_srv/status/getAll'),
  import('../../api/v1/checkout_srv/delivery/getAll'),
  import('../../api/v1/checkout_srv/payment/getAll'),

  import('../../api/v1/comment_srv/comment/getAll'),
  import('../../api/v1/comment_srv/product/getAll'),
];