
export default function(data: any) {
  return {
    uuid: data['uuid'],
    name: data['name'],
    code: data['code'],
    description: data['description'],
    group: data['groups']?.[0] ?? null,
  };
}
