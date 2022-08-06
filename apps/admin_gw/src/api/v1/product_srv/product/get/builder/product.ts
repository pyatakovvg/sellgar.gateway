
import modeBuilder from './mode';
import attributeBuilder from './attribute';


export default function(data) {
  return {
    externalId: data['externalId'],
    uuid: data['uuid'],
    isUse: data['isUse'],
    isAvailable: data['isAvailable'],
    title: data['title'],
    originalName: data['originalName'],
    groupCode: data?.['group']?.['code'] ?? null,
    categoryCode: data?.['category']?.['code'] ?? null,
    brandCode: data?.['brand']?.['code'] ?? null,
    description: data['description'],
    gallery: data['gallery'],
    modes: data['modes'].map((data) => modeBuilder(data)),
    attributes: data['attributes'].map((data) => attributeBuilder(data)),
    updatedAt: data['updatedAt'],
  };
}
