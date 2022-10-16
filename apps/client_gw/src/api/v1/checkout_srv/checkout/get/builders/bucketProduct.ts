
import productBuilder from './product';


export default function(data: any) {
  return {
    uuid: data['uuid'],
    count: data['count'],
    price: Number(data['price']),
    currency: data['currency'],
    product: productBuilder(data['product']),
    fullPrice: Math.round(Number(data['price']) * data['count'])
  };
}