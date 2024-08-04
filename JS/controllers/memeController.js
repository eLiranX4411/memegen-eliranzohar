'use strict'

var gCtx
var gElCanvas

function renderMeme() {
  var gElCanvas = document.querySelector('.canvas-board')
  const gCtx = gElCanvas.getContext('2d')

  const meme = getMeme()
  const img = new Image()
  const selectedImg = getImgById(meme.selectedImgId)

  img.src = selectedImg.url
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)

    meme.lines.forEach((line) => {
      gCtx.font = `${line.size}px Arial`
      gCtx.fillStyle = line.color
      gCtx.textAlign = `center`
      gCtx.fillText(line.txt, gElCanvas.width / 2, gElCanvas.height / 2)
    })
  }
}

function onChangeLineTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

// -------------------------TRASHCAN-----------------------------
