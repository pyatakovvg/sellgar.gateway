
interface IDataError {
  code: string;
  message: string;
  correlationId?: string;
}


class Result {
  private result: object = {};

  constructor(state: boolean = true) {
    this.result['success'] = state;
    return this;
  }

  data(data: any | null) {
    this.result['data'] = data;
    return this;
  }

  error(data: IDataError) {
    this.result['error'] = data;
    return this;
  }

  meta(meta) {
    this.result['meta'] = meta;
    return this;
  }

  build() {
    return this.result;
  }

  stream() {
    return this.result['data'];
  }
}

export default Result;
