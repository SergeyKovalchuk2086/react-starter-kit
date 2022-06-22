export interface IRequestPost<T> {
  config: any,
  data: {
    ok: boolean,
    result: T
  },
  headers: any,
  request: XMLHttpRequest,
  status: number,
  statusTetx: string
}
