const axios = require('axios')

// parseInt(new Date().getTime() / (60 * 1000))
// 15:05:20.474
// 26430187

// todo: add vf cli update notice feature
module.exports =  function () {
  const timestamp = parseInt(new Date().getTime() / (60 * 1000))
  axios.get(`https://s.vipkidstatic.com/vf/engine/engine.json?v=${timestamp}`).then( res => {
    const lastVFVersion = res.data.default
    const lastVFVersionType = res.data.list[lastVFVersion].status

    console.log("\x1b[32m", `👉 VF 引擎最新的${lastVFVersionType} 版是: ${lastVFVersion}, 请对比本地版本是否需要更新`)
  })
}
