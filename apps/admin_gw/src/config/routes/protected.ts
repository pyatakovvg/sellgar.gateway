
export default [
  import('../../api/v1/user/getAll'),
  import('../../api/v1/user/current'),

  import('../../api/v1/product/get'),
  import('../../api/v1/product/getAll'),
  import('../../api/v1/product/update'),
  import('../../api/v1/product/template'),

  import('../../api/v1/image/get'),
  import('../../api/v1/image/getAll'),
  import('../../api/v1/image/create'),

  import('../../api/v1/currency/getAll'),

  import('../../api/v1/unit/getAll'),
  import('../../api/v1/unit/create'),
  import('../../api/v1/unit/update'),

  import('../../api/v1/attribute/getAll'),
  import('../../api/v1/attribute/create'),
  import('../../api/v1/attribute/update'),

  import('../../api/v1/brand/getAll'),
  import('../../api/v1/brand/create'),
  import('../../api/v1/brand/update'),

  import('../../api/v1/category/getAll'),
  import('../../api/v1/category/create'),
  import('../../api/v1/category/update'),

  import('../../api/v1/group/getAll'),
  import('../../api/v1/group/create'),
  import('../../api/v1/group/update'),
];