module( "native extensions" );
test("Whitespace trimming", function() {
  expect(1);
  equals("  fffuuu  ".trim(), "fffuuu", "But the whitespace remains the same");
});
  
test("Array shuffling", function() {
  expect(1);
  arr = [1,2,3,4,5,6];
  ok( arr.shuffle() != arr, "The array remains unshuffled");
});
    
