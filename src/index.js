const crypto = require('crypto')
const Avatars = require('@dicebear/avatars').default
// const sprites = require('@dicebear/avatars-gridy-sprites').default
const sprites = require('@dicebear/avatars-jdenticon-sprites').default

const svgFromSeed = function (seed) {
  // const options = {
  //   colorful: true,
  //   deterministic: true
  // }
  // const avatars = new Avatars(sprites, options)
  const avatars = new Avatars(sprites)
  return avatars.create(_sha256(seed))
}

const svgDataUriFromSeed = function (seed) {
  const options = {
    dataUri: true,
    // colorful: true,
    // deterministic: true
  }
  const avatars = new Avatars(sprites, options)
  return avatars.create(_sha256(seed))
}

const _sha256 = function (value) {
  return crypto.createHash('sha256').update(value).digest().toString('hex')
}

module.exports = {
  svgFromSeed: svgFromSeed,
  svgDataUriFromSeed: svgDataUriFromSeed
}
