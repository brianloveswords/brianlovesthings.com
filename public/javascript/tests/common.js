module( "String extensions" );

test("Whitespace trimming", function() {
  expect(1);
  equals("  fffuuu  ".trim(), "fffuuu", "Whitspace should be trimmed from both sides");
});

module( "Array extensions" );

test("Array shuffling", function() {
  expect(2);
  
  var arr = [1,"test",{a:'b'},"four" ["five"]],
      shuffled = arr.shuffle();
  
  ok( shuffled != arr, "Array should be shuffled");
  ok( shuffled.sort().same( arr.sort() ) , "Array still contains all items");
});

test("Array contains", function() {
  expect(1);
  
  var arr = ['0', 'test'];
  ok( arr.contains('test'), "obj should be found in array" );
});
    
test('Array comparison', function() {
  expect(2);
  ok( [1,2,[3,4]].same( [1,2,[3,4]] ), "array.same() should return true");
  ok( [1,2,[3,4]].same( [1,2,[3,9]] ) == false , "array.same() should return false");
});

test("Array clone", function() {
  expect(2);
  
  var arr = ['test', 1, [9, 10]];
  ok( arr.clone() !== arr, "array should not be itself" );
  ok( arr.clone().same( arr ), "array should be cloned" );
});