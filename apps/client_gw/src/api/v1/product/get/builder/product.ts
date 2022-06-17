
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
    groupUuid: data?.['group']?.['uuid'] ?? null,
    categoryUuid: data?.['category']?.['uuid'] ?? null,
    brandUuid: data?.['brand']?.['uuid'] ?? null,
    description: data['description'],
    gallery: data['gallery'],
    modes: data['modes'].map((data) => modeBuilder(data)),
    attributes: data['attributes'].map((data) => attributeBuilder(data)),
    updatedAt: data['updatedAt'],
  };
}
