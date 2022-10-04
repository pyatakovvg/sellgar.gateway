
import attributeBuilder from './attribute';


interface IGroup {
  uuid: string;
  name: string;
  values: Array<any>;
}


export default function(data: IGroup) {
  return {
    uuid: data['uuid'],
    name: data['name'],
    values: data['values'].map(attributeBuilder),
  }
}
