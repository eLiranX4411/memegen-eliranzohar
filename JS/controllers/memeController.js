'use strict'

var gCtx
var gElCanvas

function renderMeme() {
  gElCanvas = document.querySelector('.canvas-board')
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

      gCtx.fillText(line.txt, line.x, line.y)
      gCtx.strokeText(line.txt, line.x, line.y)
      gCtx.stroke()

      // gCtx.strokeStyle = 'black'
      // gCtx.strokeRect(line.x, line.y, line.x, line.y)
    })
  }
}

function onChangeLineTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

function onAddTxt() {
  addLine()
  renderMeme()
}

function onSwitchLine() {
  switchLines()
  renderMeme()
}

function onChangeColorTxt(color) {
  setLineColor(color)
  renderMeme()
}

function onIncreaseFontSize() {
  increaseFontSize()
  renderMeme()
}

function onDecreaseFontSize() {
  decreaseFontSize()
  renderMeme()
}

function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}

// -------------------------TRASHCAN-----------------------------
