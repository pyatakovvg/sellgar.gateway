
import productBuilder from './product';
import attributeGroupBuilder from './attributeGroup';


export default function(data) {
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],

    name: data['name'],
    description: data['description'],

    isUse: data['isUse'],

    groupUuid: data?.['group']?.['uuid'] ?? null,
    categoryUuid: data?.['category']?.['uuid'] ?? null,

    images: data['images'],
    products: data['products'].map(productBuilder),
    attributes: data['attributes'].map(attributeGroupBuilder),

    updatedAt: data['updatedAt'],
    createdAt: data['createdAt'],
  };
}
