
export default function(data: any) {
  console.log(data)
  return {
    uuid: data['uuid'],
    value: data['value'],
    attributeUuid: data['attribute']['uuid'],
    unit: data['attribute']['unit'],
  };
}