'use strict'

const MEME_STORAGE_KEY = 'memes'
const IMAGES_STORAGE_KEY = 'images'

var gImgs = []

createImages()

function createImages() {
  gImgs = loadFromStorage(IMAGES_STORAGE_KEY) || []
  if (gImgs && gImgs.length > 0) return

  const imgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'trump'] },
    { id: 2, url: 'img/2.jpg', keywords: ['love', 'dogs'] },
    { id: 3, url: 'img/3.jpg', keywords: ['cute', 'babies'] },
    { id: 4, url: 'img/4.jpg', keywords: ['sleepy', 'cat'] },
    { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'img/6.jpg', keywords: ['interesting', 'long hair man'] },
    { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'img/8.jpg', keywords: ['dreamy', 'man with hat'] },
    { id: 9, url: 'img/9.jpg', keywords: ['funny', 'kid'] },
  ]

  gImgs = imgs

  _imagesStorageSaving()
}

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Text Here',
      size: 40,
      color: 'white',
      x: 350,
      y: 50,
    },
    {
      txt: 'Text 2 Here',
      size: 40,
      color: 'white',
      x: 350,
      y: 600,
    },
  ],
}

var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 }

function getMeme() {
  return gMeme
}

function getImgs() {
  return gImgs
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId
}

function setLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt

  _memeStorageSaving()
}

function addLine() {
  gMeme.lines.push({
    txt: 'Text Here',
    size: 40,
    color: 'white',
    x: 250,
    y: getRandomInt(100, 500),
  })
}

function switchLines() {
  if (gMeme.selectedLineIdx === 0) {
    gMeme.selectedLineIdx++
  } else {
    gMeme.selectedLineIdx--
  }
  // console.log(`gMeme.selectedLineIdx:`, gMeme.selectedLineIdx)
  // console.log(`gMeme:`, gMeme)
}

function setLineColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color

  _memeStorageSaving()
}

function increaseFontSize(size = 5) {
  gMeme.lines[gMeme.selectedLineIdx].size += size

  _memeStorageSaving()
}

function decreaseFontSize(size = 5) {
  gMeme.lines[gMeme.selectedLineIdx].size -= size

  _memeStorageSaving()
}

function getImgById(id) {
  return gImgs.find((img) => img.id === id)
}

function _memeStorageSaving() {
  saveToStorage(MEME_STORAGE_KEY, gMeme)
}

function _imagesStorageSaving() {
  saveToStorage(IMAGES_STORAGE_KEY, gImgs)
}

// -------------------------TRASHCAN-----------------------------
