
export default function(data: any) {
  return {
    uuid: data['uuid'],
    name: data['name'],
    code: data['code'],
    description: data['description'],
    groupUuid: data['group']?.['uuid'] ?? null,
  };
}
