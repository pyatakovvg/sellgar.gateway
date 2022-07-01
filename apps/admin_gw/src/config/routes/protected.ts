
export default [
  import('../../api/v1/identity_srv/user/getAll'),
  import('../../api/v1/identity_srv/user/current'),

  import('../../api/v1/product_srv/product/get'),
  import('../../api/v1/product_srv/product/getAll'),
  import('../../api/v1/product_srv/product/update'),
  import('../../api/v1/product_srv/product/template'),
  import('../../api/v1/product_srv/product/update-only'),

  import('../../api/v1/file_srv/image/get'),
  import('../../api/v1/file_srv/image/getAll'),
  import('../../api/v1/file_srv/image/create'),
  import('../../api/v1/file_srv/image/delete'),

  import('../../api/v1/product_srv/currency/getAll'),

  import('../../api/v1/product_srv/unit/getAll'),
  import('../../api/v1/product_srv/unit/create'),
  import('../../api/v1/product_srv/unit/update'),

  import('../../api/v1/product_srv/attribute/getAll'),
  import('../../api/v1/product_srv/attribute/create'),
  import('../../api/v1/product_srv/attribute/update'),

  import('../../api/v1/product_srv/brand/getAll'),
  import('../../api/v1/product_srv/brand/create'),
  import('../../api/v1/product_srv/brand/update'),

  import('../../api/v1/product_srv/category/get'),
  import('../../api/v1/product_srv/category/getAll'),
  import('../../api/v1/product_srv/category/create'),
  import('../../api/v1/product_srv/category/update'),

  import('../../api/v1/product_srv/group/getAll'),
  import('../../api/v1/product_srv/group/create'),
  import('../../api/v1/product_srv/group/update'),

  import('../../api/v1/checkout_srv/order/get'),
  import('../../api/v1/checkout_srv/order/getAll'),

  import('../../api/v1/comment_srv/comment/getAll'),
];