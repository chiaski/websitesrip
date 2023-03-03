
function chance(prob) {
  return !!prob && Math.random() <= prob;
}

function randInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function pick(arr) {
  return arr[(Math.random() * arr.length) | 0]
}



$(document).ready(function() {
  
  
  let grave_count = 6;
  let grave = "";
  
  for(let i = 0; i < grave_count; i++){
    
  grave = `<div class="grave">
      <img src="tombstones/` + randInt(1, 6) + `.gif">
        <p class="grave-name">what is it...</p>
      </div>`;
    
  $(grave)
    .css("top", (i * 300) + randInt(0, 200) + "px")
    .css("left", randInt(0, 80) + "%")
    .appendTo("main");
    
  }
  
  
  
});
