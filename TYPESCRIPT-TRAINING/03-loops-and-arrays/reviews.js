var reviews = [1, 3, 2, 4.5, 2, 1];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Reviews average = " + average);
