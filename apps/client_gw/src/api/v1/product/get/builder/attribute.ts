
export default function(data) {
  console.log(data)
  return {
    attributeUuid: data['ProductAttribute']['attributeUuid'],
    value: data['ProductAttribute']['value'],
  };
}
