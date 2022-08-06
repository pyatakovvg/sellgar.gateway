
export default function(data: any) {
  return {
    code: data['code'],
    name: data['name'],
    description: data['description'],
    groupUuid: data['group']?.['uuid'] ?? null,
  };
}
