import QRCode from 'qrcode'
var canvas = document.getElementById('canvas')
QRCode.toCanvas(canvas, 'https://r.cephas.monster/rick/', function (error) {
  if (error) console.error(error)
  console.log('success!');
})
let ctx = canvas.getContext("2d")
// ctx.fillText("hello world",10 ,50)
document.getElementById('downloadBTN').addEventListener("click", ()=>{
    let imgurl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadELE = document.createElement('a')
    downloadELE.download = "qr_code.png"
    downloadELE.href = imgurl
    downloadELE.click();
})
let selectionQR = document.getElementById('selectionQR')
selectionQR.addEventListener("change", ()=>{
    console.log()
    QRCode.toCanvas(canvas, selectionQR.options[selectionQR.selectedIndex].value, function (error) {
    if (error) console.error(error)
    console.log('success!');
    })
})
