(function( $ ) {
  $.newElement = function(tag, attrs){
    var el = $(document.createElement( tag ));
    for (var a in attrs) {
      el.attr(a, attrs[a]);
    }
    return el;
  };
    
  var mininote = {
    elements: null,
    notes : new Array(),
    
    activate: function(self,opts) {
      this.elements = self;
      
      this.getNotesFromTitle();
      this.makeNoteElements();
      this.monitorEvents();
      
      return self;
    },

    getNotesFromTitle: function() {
      this.elements.each(function(){
        var el = $(this)
        el.data('mininote_html', el.attr('title'));
        el.attr('title', '');
      })
    },

    makeNoteElements: function(){
      var mininote_container = $.newElement('div', {id:'mininote-container'}),
          self = this;

      this.elements.each(function(){
        var note_element = $.newElement('div').addClass('mininote');
        note_element.html( $(this).data('mininote_html') );
        
        self.notes.push({
          note: note_element,
          element: $(this)
        });
        mininote_container.append( note_element );
        
        this.mininote_element = note_element;
        console.dir(this);
      });

      $('body').append( mininote_container );
    },

    monitorEvents: function(){
      this.elements.bind('mouseover', function(event){
        this.mininote_element.addClass('active');
      });
      this.elements.bind('mouseout', function(event){
        this.mininote_element.removeClass('active');
      });
      this.elements.bind('mousemove', function(event){
        console.dir(event);
        
        this.mininote_element.css({
          top: (event.pageY + 15) + "px",
          left: (event.pageX + 15) + "px"
        });
        this.mininote_element.addClass('tracking');
      });
    }
    
  }    

  $.mininote = mininote;
  $.fn.mininote = function(opts){ return mininote.activate(this, opts); }
  
})(jQuery)