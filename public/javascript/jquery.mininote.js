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
    
    activate: function(self,opts) {
      this.elements = self;
      
      this.getNotesFromTitle();
      this.makeNoteElements();
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
        var note_element = $.newElement('div');
        note_element.html( $(this).data('mininote_html') );
        mininote_container.append( note_element );
      });

      $('body').append(mininote_container);
    }
  }    

  $.mininote = mininote;
  $.fn.mininote = function(opts){ return mininote.activate(this, opts); }
  
})(jQuery)