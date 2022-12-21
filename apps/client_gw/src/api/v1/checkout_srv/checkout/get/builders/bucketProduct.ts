
import productBuilder from './product';


export default function(data: any) {
  console.log(data)
  return {
    uuid: data['uuid'],
    count: data['count'],
    price: Number(data['price']),
    currency: data['currency'],
    product: productBuilder(data['store']),
    fullPrice: Math.round(Number(data['price']) * data['count'])
  };
}