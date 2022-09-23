const bgColorSelector = document.getElementById('bg-color')
const textColorSelector = document.getElementById('teks-color')


bgColorSelector.addEventListener('input',changeBackground,false)
textColorSelector.addEventListener('input',changeTextColor,false)

function changeBackground() {
   let colorBg = document.getElementById('bg-color').value;
   document.body.style.backgroundColor = colorBg;
}

function changeTextColor(){
let textColor = document.getElementById('teks-color').value
document.getElementById('sampleText').style.color = textColor
}