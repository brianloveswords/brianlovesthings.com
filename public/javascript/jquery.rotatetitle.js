// by brian j brennan
// if you can find a use for this, you are free to use it for whatever you want, no strings attached

(function($){
  $.fn.rotateTitle = function() {

    var self = this,
        vars = {};
    
    function setCurrentIndex(index) {
      vars.rtIndex = index;
      return true;
    }
    function getThingList() {
      if (vars.thingList) {return vars.thingList}
      
      var things = self.attr('title').split(',');
      vars.thingList = things.shuffle();
      return things;
    }
    function getNextThing() {
      var index = parseInt(vars.rtIndex) + 1 ,
          thingList = getThingList();
      
      if (typeof thingList[index] == "undefined") {index = 0}
      
      setCurrentIndex(index);
      
      return thingList[index].trim();
    }
    function makeThingElement(){
      var newThingElement = self.clone();
      newThingElement.html(getNextThing());
      return newThingElement;
    }
    function showNewThing() {
      var newThing = makeThingElement(),
          container = self.parent();

      newThing.css({left:(parseInt(vars.leftOffset)+270)+"px", opacity:0});
      container.append(newThing);

      newThing.animate({opacity:1,left:vars.leftOffset}, 700);
      return newThing;
    }
    function hideOldThing() {
      self.animate({opacity:0,top:'-1em'}, function(){$(this).remove()})
    }
    function cycle(){
      var newThing = showNewThing();
      hideOldThing();
      
      self = newThing;
    }
    
    function cycleTime() {
      var min = 5000,
          more = Math.floor(Math.random()*2000);
      return min + more;
    }
    
    function setup() {
      vars.leftOffset = self.css('left')
      setCurrentIndex(0);
    }
    
    /* main */
    setup();
    setInterval(function(){ cycle();  }, cycleTime());
  }
})(jQuery)
    

