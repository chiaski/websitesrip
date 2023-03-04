
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
    
    
  let flowers = ``;
       
    for(let f = 0; f < 4; f++){
    if(chance(0.5)) continue;  
      
      flowers += `<img src='assets/flower` + randInt(1,5) + `.gif' style='top:` + randInt(0,50) + `px;left:` + randInt(0,70) +`px;'>`;
      
//      
//      $(`<img src='assets/flower` + randInt(1,5) + `.gif'>`)
//        .css("left", randInt(0, 40) + "px")
//        .css("top", randInt(0, 20) + "px")
//        .appendTo( flowers );
    }
    
//    console.log("flowers:", flowers);

    
  grave = `<div class="grave">
      <img src="tombstones/` + randInt(1, 6) + `.gif">
        <p class="grave-name">
        </p>
      <div class="flowers">` + flowers  + `</div>
      </div>`;
    
    console.log(":" + grave);
    console.log("?");
    
  $(grave)
    .css("top", 700 + (i * 200) + randInt(0, 100) + "px")
    .css("left", randInt(0, 80) + "%")
    .appendTo("main");
    
  }
  
  $("main").on("click", ".grave", function(){
    
    let t = $(this).html();
    
    $("#view-grave .wrapper").html(`<div class='grave'>` + t + `</div>`);
    console.log(t);
    
    $("#view-grave").fadeIn();
    
    
    
  });
  
  
});


