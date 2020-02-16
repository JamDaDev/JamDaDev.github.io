

document.getElementById("btton").onclick = function(){
        alert("Make sure you have uninstalled the old version of this app before installing this one!");
};

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 50 * (i+1)
  }).add({
    targets: '.ml11 .line',
    easing:"easeOutExpo",
    opacity: [1,0],
  })
  .add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  })
  ;
  var tw = document.querySelector(".par");
  var tw1 = document.querySelector(".par1");
  var tw2 = document.querySelector(".par2");
  var tw3 = document.querySelector(".par3");
  var tw4 = document.querySelector(".j");
  tw.innerHTML = tw.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  tw1.innerHTML = tw1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  tw2.innerHTML = tw2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  tw3.innerHTML = tw3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  tw4.innerHTML = tw4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  var textWrapper = document.querySelector('.ml12');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 500,
    delay: (el, i) => 500 + 15 * i
  });
  anime.timeline({loop: false})
  .add({
    targets: '.j .letter',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 15 * i
  })
  .add({
    targets: '.par .letter',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 15 * i
  })
  .add({
    targets: '.par1 .letter',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 15 * i
  }).add({
    targets: '.par2 .letter',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 15 * i
  }).add({
    targets: '.par3 .letter',
    translateY: [50,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 15 * i
  })
  // Wrap every letter in a span
  

  