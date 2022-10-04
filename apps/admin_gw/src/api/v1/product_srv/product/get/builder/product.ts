
import groupBuilder from './group';


export default function(data) {
  console.log(data['images'])
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    title: data['title'],
    description: data['description'],
    isUse: data['isUse'],
    isAvailable: data['isAvailable'],
    originalName: data['originalName'],
    groupUuid: data?.['group']?.['uuid'] ?? null,
    categoryUuid: data?.['category']?.['uuid'] ?? null,
    brandUuid: data?.['brand']?.['uuid'] ?? null,
    price: data['price'],
    currencyCode: data?.['currency']?.['code'] ?? null,
    images: data['images'],
    attributes: data['attributes'].map(groupBuilder),
    updatedAt: data['updatedAt'],
    createdAt: data['createdAt'],
  };
}
