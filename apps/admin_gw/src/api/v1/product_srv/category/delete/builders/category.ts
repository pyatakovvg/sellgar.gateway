
export default function(data) {
  return {
    uuid: data['uuid'],
    code: data['code'],
    name: data['name'],
    description: data['description'],
    image: data['images']?.[0] ? data['images']?.[0] : null,
    group: data['group'] ? data['group'] : null,
  };
}
