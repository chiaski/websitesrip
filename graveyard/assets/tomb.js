var g = {
  
  view: function(graveID){
    console.log("Viewing Grave " + graveID);
    
    $("#view-grave").fadeIn();
    
    let _html = $("main .grave[i='"+ graveID  +"']").html();
    
    $("#view-grave .wrapper").html("");
//    $("#view-grave .wrapper").html(_html);
    $("#view-grave .wrapper").html(`<div class="grave" i="` + graveID +`">` + _html + `</div>`);
    
    console.log("lol", _html);
    
  },
  
  
  scatterFlower: function(){
    
    $(`<img src="objects/flower-remain.gif">`)
      .addClass("decor")
      .addClass("flower-remain")
      .css("transform", "rotate("+ randInt(0,40) + "deg)")
      .css("top", randInt(1000, 2000) + "px")
      .css("left", randInt(0, 100) + "%")
      .appendTo("main");
    
  },
  
  leave: function(){ // save active grave
    
    
    let _html = $("#view-grave .wrapper .grave").html();
    let _id = $("#view-grave .wrapper .grave").attr("i");
    $("main .grave[i='" + _id + "']").html(_html);
    console.log("saving html: " + _html);
    
    $("#view-grave").fadeOut();
    
    
  }
}


g.scatterFlower();
g.scatterFlower();
g.scatterFlower();
g.scatterFlower();
g.scatterFlower();
g.scatterFlower();
g.scatterFlower();

var actions = {
  
  light: function(){
    
    if( !$("#view-grave .candle") ){
      $(`<div class="candle">
      <img src="objects/candle-unlit.gif" state="unlit">
        </div>`).appendTo("#view-grave")
    }
    
    let _state = $(".candle img").attr('state');
    
    if(_state == "unlit" || _state == "blown"){
      $(".candle img")
        .attr("src", "objects/candle-gif.gif")
        .attr("state", "lit"); 
      
      $("#act a[name='light']").html('Blow out candle');
    }   
    
    if(_state == "lit"){
      $(".candle img")
        .attr("src", "objects/candle-blown.gif")
        .attr("state", "blown"); 
      
      $("#act a[name='light']").html('Light (new) candle');
    }
    
  },
  
  layflower: function(){
    $(`<img src='assets/flower` + randInt(1,5) + `.gif' style='top:` + randInt(50,120) + `px;left:` + randInt(0,120) +`px;'>`).hide().appendTo("#view-grave .flowers").fadeIn();
  }
  
  
}


$("#act").on("click", "a", function(){
  
  let t = $(this).attr("name");
  
  console.log(t);
  
  if(t == "lay"){
    actions.layflower();
  }
  if(t == "light"){
    actions.light();
  }
  if(t == "leave"){
    g.leave();
  }
  
})

setTimeout(function(){
//g.view(1);
  
}, 50);


