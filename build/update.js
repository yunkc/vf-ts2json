const fse = require('fs-extra')
const download = require('download-git-repo')

console.log('downloading update..')

const updateFolderList = [
  "/build"
]

const dist = process.cwd() + '/ts2json_update_temp'
download('github:vipkid-edu/vf-ts2json', dist, {}, async err => {
  if (err) {
    return console.error(err)
  }

  console.log('updating..')

  const from = dist + updateFolderList[0]
  const to = process.cwd() + updateFolderList[0]

  const copyErr = await fse.copy(from, to, {overwrite: true})

  if (copyErr) {
    return console.error(copyErr)
  }

  const removeErr = await fse.remove(dist)

  if (removeErr) {
    return console.error(removeErr)
  }

  console.log('complete.')
})
