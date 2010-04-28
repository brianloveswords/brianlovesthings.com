// find '.thing'
// collect array of things from attr('title')
// set position relative

// spawn new .thing
// set opacity 0, left +500px

// animate old .thing: opacity:0, top:50
// animate new .thing: opacity:1, left:0

(function($){
  $.fn.rotateTitle = function() {
    //setup
    var self = this;
    
    function trim(str) {
      return str.replace(/^\s+|\s+$/g,"");
    }
    function setCurrentIndex(index) {
      self.data('rtIndex', index);
      return true;
    }
    function getThingList() {
      if (self.data('thingList')) {return self.data('thingList')}
      
      var things = self.attr('title').split(',');
      self.data('thingList', things);
      return things;
    }
    function getNextThing() {
      var index = parseInt(self.data('rtIndex')) + 1 ,
          thingList = getThingList();
      
      if (typeof thingList[index] == "undefined") {index = 0}
      
      setCurrentIndex(index);
      
      return trim(thingList[index]);
    }
    function setup() {
      setCurrentIndex(0);
    }
    
    /* main */
    setup();
    
    setInterval(function(){
      console.dir(getNextThing());
    }, 1000);
      
  }
})(jQuery)
    

