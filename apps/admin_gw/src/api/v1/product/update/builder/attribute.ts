
export default function(data) {
  return {
    attributeUuid: data['ProductAttribute']['attributeUuid'],
    value: data['ProductAttribute']['value'],
  };
}
