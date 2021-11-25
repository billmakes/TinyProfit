<template>
  <div>
    <div v-for="asset in assets" :key="asset.id">
      <div v-if="asset.bought_asset">
        <h5>out</h5>
        <span v-if="asset.bought_asset && asset.bought_asset.name">{{
          asset.bought_asset.name
        }}</span>
        {{
          insertDecimal(asset.bought_asset_amount, asset.bought_asset.decimals)
        }}
      </div>
      <div v-if="asset.sold_asset">
        <h5>in</h5>
        {{ asset.sold_asset.name }}
        {{ insertDecimal(asset.sold_asset_amount, asset.sold_asset.decimals) }}
      </div>
    </div>
  </div>
</template>
<script>
import TinyService from '@/services'

export default {
  name: 'Home',
  data() {
    return {
      assets: null
    }
  },
  created() {
    this.getAssets({
      limit: 5,
      offset: 10,
      id: 'OYM2HBHYTCTKSJLHWG6JIIJJP3GSIPPAOLX3JAWBQ3NUI6YZRKZPNSIOKQ'
    })
  },
  methods: {
    insertDecimal(num, dec) {
      console.log(num)
      if (!dec) return Number(num).toLocaleString()
      return Number(
        `${num.slice(0, dec * -1)}${'.'}${num.slice(dec * -1)}`
      ).toLocaleString()
    },
    getAssets(params) {
      TinyService.getAssets(params).then(res => {
        this.assets = res.assets.results
        console.log(res.assets.results)
      })
    }
  }
}
</script>
