const axios = require('axios')

const endpoint = 'https://mainnet.analytics.tinyman.org/api/v1/operations/'

class TinyController {
  async getAssets(req, res) {
    const urlParams = `?limit=${req.query.limit}&offset=${req.query.offset}&type__in=swap%2Cmint%2Cburn&account__in=${req.query.id}`
    const { data } = await axios.get(endpoint + urlParams)
    return res.status(200).send({
      success: 'true',
      message: 'assets retrieved successfully',
      assets: data
    })
  }
}

const tinyController = new TinyController()
module.exports = tinyController
