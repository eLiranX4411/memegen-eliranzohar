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

    meme.lines.forEach((line, idx) => {
      gCtx.font = `${line.size}px Arial`
      gCtx.fillStyle = line.color
      gCtx.textAlign = 'center'

      gCtx.fillText(line.txt, line.x, line.y)

      // If the line is the selected one, draw a border around it
      if (idx === meme.selectedLineIdx) {
        const textMetrics = gCtx.measureText(line.txt)
        const textHeight = line.size

        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 2
        gCtx.strokeRect(line.x - textMetrics.width / 2 - 10, line.y - textHeight, textMetrics.width + 20, textHeight + 10)
      }
    })
  }
}

function onChangeLineTxt(txt) {
  setLineTxt(txt)
  renderMeme()
}

function onAddLine() {
  addLine()
  renderMeme()
}

function onRemoveLine(idx) {
  removeLine(idx)
}

function onSwitchLine() {
  const elTxtInput = document.querySelector('#canvasText')
  elTxtInput.value = ''

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
