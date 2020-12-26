const Avatars = require('@dicebear/avatars').default
const sprites = require('@dicebear/avatars-gridy-sprites').default

const svgFromSeed = function (seed) {
  const options = {
    colorful: true,
    deterministic: true
  }
  const avatars = new Avatars(sprites, options)
  return avatars.create(seed)
}

const svgDataUriFromSeed = function (seed) {
  const options = {
    dataUri: true,
    colorful: true,
    deterministic: true
  }
  const avatars = new Avatars(sprites, options)
  return avatars.create(seed)
}

module.exports = {
  svgFromSeed: svgFromSeed,
  svgDataUriFromSeed: svgDataUriFromSeed
}
