'use strict'

const gQueryOptions = {
  filterBy: { title: '', rating: 0 },
  sortBy: {},
}

var gCtx
var gElCanvas

function onInit() {
  renderImgs()
}

function renderImgs() {
  var elImgs = document.querySelector('.imgs-container')
  var strHtml = getImgs(gQueryOptions)
    .map((img) => `<img src="${img.url}" alt="404" onclick="onSetImg(${img.id})" />`)
    .join('')

  elImgs.innerHTML = strHtml
}

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

function onSetImg(imgId) {
  const meme = getMeme()
  meme.selectedImgId = imgId
  showEditorScreen()
  renderMeme()
}

function showEditorScreen() {
  const elGallery = document.querySelector('.gallery-container')
  elGallery.classList.add(`dsp-none`)

  const elEditor = document.querySelector('.editor-container')
  elEditor.classList.remove(`dsp-none`)

  renderMeme()
}

// -------------------------TRASHCAN-----------------------------

/*
function showGalleryScreen() {
  const elEditor = document.querySelector('.editor-container')
  elEditor.classList.add(`dsp-none`)

  renderMeme()
}
*/
