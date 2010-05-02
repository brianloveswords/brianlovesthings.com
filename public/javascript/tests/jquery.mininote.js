/* things the mininote should do:
   - exist
   - have a debug mode
   - find the tooltip based on the title attr
   - remove the title attr from the element
   - defaults
     - display the note on mouseover
     - track on mousemove 
     - remove the note on mouseout 
*/
$(document).ready(function(){

mininote = jQuery.mininote

module("Mininote");
test("basics", function() {
  expect(3);
  ok( jQuery.fn.mininote, 'mininote exists' );
  ok( $("#mininote-test span").mininote({debug:true}), 'mininote activate' );
  
  ok( mininote.elements, 'properly stored elements' );
});

test("note grabbing", function() {
  expect(2);
  var el1 = $(mininote.elements[0]);
  equals( el1.data('mininote_html'), "this is great!");
  equals( el1.attr('title'), "");
});

test('note element creation', function() {
  expect(4);
  equals( $('#mininote-container').length, 1, 'mininotes container created');
  
  var notes = $('#mininote-container > div');
  equals( notes.length, 2, 'mininotes container populated');
  equals( notes.eq(1).html(), 'bears are scary' );
  equals( $(mininote.elements[1].mininote_element).html(), 'bears are scary');
});

test('element event attachment', function() {
  expect(6);
  
  var note_element = mininote.notes[0].note,
      trigger_element = mininote.notes[0].element;
  trigger_element.trigger('mouseover');
  equals( note_element.hasClass('active'), true );

  trigger_element.trigger('mouseout');
  equals( note_element.hasClass('active'), false );

  var mousemove_event = jQuery.Event('mousemove');
  
  mousemove_event.pageX = 500;
  mousemove_event.pageY = 500;
  
  trigger_element.trigger(mousemove_event);
  equals( note_element.css('top'), '515px' );
  equals( note_element.css('left'), '515px' );

  mousemove_event.pageX = 539;
  mousemove_event.pageY = 210;

  trigger_element.trigger(mousemove_event);
  equals( note_element.css('top'), 210 + 15 + 'px' );
  equals( note_element.css('left'), 539 + 15 + 'px' );

});


})