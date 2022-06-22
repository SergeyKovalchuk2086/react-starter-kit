import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class DataService {
  private apiClient: AxiosInstance

  constructor (baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
      headers: {
        'Content-type': 'application/json'
      }
    })
  }

  async get<T> (url: string, config?: AxiosRequestConfig | undefined): Promise<T> {
    return this.apiClient.get(url, config)
  }

  async post<T, S> (url: string, body?: S, config?: AxiosRequestConfig | undefined): Promise<T> {
    return this.apiClient.post(url, body, config)
  }

  async put<T, S> (url: string, body?: S, config?: AxiosRequestConfig | undefined): Promise<T> {
    return this.apiClient.put(url, body, config)
  }

  async delete<T, S> (url: string, body?: S): Promise<T> {
    return this.apiClient.delete(url, body)
  }
}

export default DataService
