/* eslint-disable no-useless-catch */
import instance from '@/http'

const endpoint = '/api/v1/assets/'

export default class TinyService {
  static async getAssets(params) {
    console.log(params)
    const urlParams = `?limit=${params.limit}&offset=${params.offset}&id=${params.id}`
    try {
      const source = await instance.get(endpoint + urlParams)
      return source.data
    } catch (error) {
      throw error
    }
  }

  static async getBook(id) {
    try {
      const source = await instance.get(endpoint + id)
      return source.data
    } catch (error) {
      throw error
    }
  }
}
