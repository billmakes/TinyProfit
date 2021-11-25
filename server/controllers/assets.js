const axios = require('axios')

const endpoint =
  'https://mainnet.analytics.tinyman.org/api/v1/operations/?limit=5&offset=10&type__in=swap%2Cmint%2Cburn&account__in=OYM2HBHYTCTKSJLHWG6JIIJJP3GSIPPAOLX3JAWBQ3NUI6YZRKZPNSIOKQ'

class TinyController {
  async getAssets(req, res) {
    const { data } = await axios.get(endpoint)
    return res.status(200).send({
      success: 'true',
      message: 'assets retrieved successfully',
      assets: data
    })
  }
}

const tinyController = new TinyController()
module.exports = tinyController
