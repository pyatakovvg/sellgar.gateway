
import bucketProductBuilder from './bucketProduct';


export default function(data: any) {
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    status: data['status'],
    count: data['count'],
    price: Number(data['price']),
    currency: data['currency'],
    delivery: data['delivery'],
    payment: data['payment'],
    products: data['products'].map(bucketProductBuilder),
  };
}