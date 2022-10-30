
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
    productUuid: data?.['product']?.['uuid'] ?? null,

    images: data['images'],
    attributes: data['attributes'].map(attributeGroupBuilder),

    updatedAt: data['updatedAt'],
    createdAt: data['createdAt'],
  };
}
