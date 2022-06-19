
interface IParams {
  port: number;
  origin: string;
}


class Config {
  readonly port: number;
  readonly origin: string;

  constructor(params: IParams) {
    this.port = params['port'];
    this.origin = params['origin'];
  }
}

export default Config;
