const sharp = require("sharp")
const inputFilePath = `${__dirname}/input`
const outputFilePath = `${__dirname}/output`

async function main() {
  ;["example-image"].forEach((item) =>
    sharp(`${inputFilePath}/${item}.png`)
      .metadata()
      .then(({ width, height }) =>
        sharp(`${inputFilePath}/${item}.png`).resize(1600).webp().toFile(`${outputFilePath}/${item}.webp`)
      )
  )
}

main()
