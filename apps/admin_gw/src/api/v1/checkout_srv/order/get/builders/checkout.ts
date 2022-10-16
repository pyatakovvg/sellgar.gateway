
import bucketProductBuilder from './checkoutProduct';


export default function(data: any) {
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    status: data['status'],
    details: data['details'],
    count: data['count'],
    price: Number(data['price']),
    currency: data['currency'],
    delivery: data['delivery'],
    payment: data['payment'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    products: data['products'].map(bucketProductBuilder),
  };
}