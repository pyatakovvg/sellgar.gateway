
export default function(data: any) {
  return {
    uuid: data.catalog.uuid,
    image: data.catalog.image,
    externalId: data.catalog.externalId,
    name: data.catalog.name,
    vendor: data['vendor'],
    groupCode: data.catalog.groupCode,
    categoryCode: data.catalog.categoryCode,
  };
}