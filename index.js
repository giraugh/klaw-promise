const klaw = require('klaw')

module.exports = (pathToDir) =>
  new Promise((resolve, reject) => {
    const items = []
    klaw(pathToDir)
      .on('data', item => items.push(item.path))
      .on('error', reject)
      .on('end', () => resolve(items))
  })
