'use strict'

const STORAGE_KEY = 'memes'

var storageMeme = []

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'trump'] },
  { id: 2, url: 'img/2.jpg', keywords: ['love', 'dogs'] },
  { id: 3, url: 'img/3.jpg', keywords: ['cute', 'babies'] },
  { id: 4, url: 'img/4.jpg', keywords: ['sleepy', 'cat'] },
  { id: 5, url: 'img/5.jpg', keywords: ['funny', 'baby'] },
  { id: 6, url: 'img/6.jpg', keywords: ['intersting', 'long hair man'] },
  { id: 7, url: 'img/7.jpg', keywords: ['funny', 'baby'] },
  { id: 8, url: 'img/8.jpg', keywords: ['dreamy', 'man with hat'] },
  { id: 9, url: 'img/9.jpg', keywords: ['funny', 'kid'] },
]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Shalom',
      size: 30,
      color: 'white',
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
}

function getImgById(id) {
  return gImgs.find((img) => img.id === id)
}

function _storageSaving() {
  saveToStorage(STORAGE_KEY, storageMeme)
}

// -------------------------TRASHCAN-----------------------------
