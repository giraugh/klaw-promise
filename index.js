const klaw = require('klaw')

module.exports = (dir, options) =>
  new Promise((resolve, reject) => {
    const items = []
    klaw(dir, options)
      .on('error', reject)
      .on('end', () => resolve(items))
      .on('data', ({path, stats}) =>
        (options.nodir && stats.isDirectory)
        ? null
        : items.push(path))
  })
