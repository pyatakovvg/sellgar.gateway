
export default function(data) {
  return {
    name: data['name'],
    description: data['description'],
    value: data['ProductAttribute']['value'],
    unit: data?.['unit']?.['name'] ?? null,
  };
}
