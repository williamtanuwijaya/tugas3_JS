const bgColorSelector = document.getElementById('bg-color')
const textColorSelector = document.getElementById('teks-color')
const alignSelector = document.getElementById("textarea")

bgColorSelector.addEventListener('input', changeBackground, false)
textColorSelector.addEventListener('input', changeTextColor, false)
// alignSelector.addEventListener('onChange',change,fal)


function changeBackground() {
   let colorBg = document.getElementById('bg-color').value;
   document.body.style.backgroundColor = colorBg;
}

function changeTextColor() {
   let textColor = document.getElementById('teks-color').value
   document.getElementById('sampleText').style.color = textColor
}

document.getElementById("random-number").innerHTML =
   Math.floor(Math.random() * 11);

// function myFunction() {
//    document.getElementById("kiri").style.textAlign = "lef";
//  }

//  function rightFunction() {
//    document.getElementById("kanan").style.textAlign = "right";
//  }

//  function centerFunction() {
//    document.getElementById("tengah").style.textAlign = "center";
//  }

function change(item) {
   var name = item.options[item.selectedIndex].text
   document.getElementById("textarea").style.textAlign = name;
}