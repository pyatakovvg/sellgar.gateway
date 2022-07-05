
export default function(data) {
  return {
    isTarget: data['isTarget'],
    uuid: data['uuid'],
    vendor: data['vendor'],
    value: data['value'],
    price: Number(data['price']),
    currency: data['currency'],
  };
}
