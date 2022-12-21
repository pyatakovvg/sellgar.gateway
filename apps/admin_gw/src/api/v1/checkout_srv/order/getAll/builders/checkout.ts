
import bucketProductBuilder from './checkoutProduct';


export default function(data: any) {
  console.log(data)
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    status: data['status'],
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