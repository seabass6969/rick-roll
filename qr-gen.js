import QRCode from 'qrcode'
var canvas = document.getElementById('canvas')
QRCode.toCanvas(canvas, 'https://r.cephas.monster/rick/', function (error) {
  if (error) console.error(error)
  console.log('success!');
})
// let ctx = canvas.getContext("2d")
// ctx.fillText("hello world",10 ,50)
