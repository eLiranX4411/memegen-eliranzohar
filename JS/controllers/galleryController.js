'use strict'

const gQueryOptions = {
  filterBy: { keyword: '' },
  sortBy: {},
}

function onInit() {
  renderGallery()
  showGalleryScreen()
}

function renderGallery() {
  var elImgs = document.querySelector('.imgs-container')
  var strHtml = getImgs(gQueryOptions)
    .map((img) => `<img src="${img.url}" alt="404" onclick="onImgSelect(${img.id})" />`)
    .join('')

  elImgs.innerHTML = strHtml
}

function onImgSelect(imgId) {
  setImg(imgId)
  showEditorScreen()
  renderMeme()
}

function showEditorScreen() {
  const elGallery = document.querySelector('.gallery-container')
  elGallery.classList.add(`dsp-none`)
  elGallery.classList.remove(`dsp-grid`)

  const elEditor = document.querySelector('.editor-container')
  elEditor.classList.remove(`dsp-none`)
  elEditor.classList.add(`dsp-grid`)
}

function showGalleryScreen() {
  const elGallery = document.querySelector('.gallery-container')
  elGallery.classList.add(`dsp-grid`)
}

// -------------------------TRASHCAN-----------------------------
