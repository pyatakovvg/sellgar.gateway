
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
    group: data?.['group'] ?? null,
    category: data?.['category'] ?? null,
    brand: data?.['brand'] ?? null,
    description: data['description'],
    gallery: data['gallery'],
    modes: data['modes'].map((data) => modeBuilder(data)),
    attributes: data['attributes'].map((data) => attributeBuilder(data)),
    updatedAt: data['updatedAt'],
  };
}
