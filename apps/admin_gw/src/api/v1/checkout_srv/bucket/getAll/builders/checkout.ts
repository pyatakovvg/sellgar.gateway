
import checkoutProductBuilder from './checkoutProduct';


export default function(data: any) {
  return {
    uuid: data['uuid'],
    externalId: data['externalId'],
    createdAt: data['createdAt'],
    updatedAt: data['updatedAt'],
    status: data['status'],
    products: data['products'].map(checkoutProductBuilder),
  };
}