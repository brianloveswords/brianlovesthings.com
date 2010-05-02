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
  expect(3);
  equals( $('#mininote-container').length, 1, 'mininotes container created');
  
  var notes = $('#mininote-container > div');
  equals( notes.length, 2, 'mininotes container populated');
  equals( notes.eq(1).html(), 'bears are scary' );

});

})