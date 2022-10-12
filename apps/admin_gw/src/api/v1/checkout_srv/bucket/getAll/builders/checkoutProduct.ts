
export default function(data: any) {
  return {
    uuid: data['uuid'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    status: data['status'],
    product: data['product'],
  };
}