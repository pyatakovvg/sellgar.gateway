
import attributeGroupBuilder from './attributeGroup';


export default function(data) {
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    vendor: data['vendor'],
    barcode: data['barcode'],
    title: data['title'],
    description: data['description'],
    isUse: data['isUse'],
    isAvailable: data['isAvailable'],
    originalName: data['originalName'],
    groupUuid: data?.['group']?.['uuid'] ?? null,
    categoryUuid: data?.['category']?.['uuid'] ?? null,
    brandUuid: data?.['brand']?.['uuid'] ?? null,
    price: data['price'],
    purchasePrice: data['purchasePrice'],
    currencyCode: data?.['currency']?.['code'] ?? null,
    images: data['images'],
    attributes: data['attributes'].map(attributeGroupBuilder),
    updatedAt: data['updatedAt'],
    createdAt: data['createdAt'],
  };
}
