
export default function(data) {
  return {
    uuid: data['uuid'],
    label: data['label'],
    isTarget: data['isTarget'],
    productUuid: data['product']?.['uuid'] ?? null,
  };
}
