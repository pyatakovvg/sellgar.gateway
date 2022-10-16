
export default function(data: any) {
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    title: data['title'],
    image: data['image'],
  };
}