
export default function(data) {
  console.log(data)
  return {
    name: data['name'],
    description: data['description'],
    value: data['value'],
    unit: data?.['unit']?.['name'] ?? null,
  };
}
