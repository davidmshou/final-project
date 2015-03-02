function Card (r, s) {
  this.rank = r;
  this.suit = s;
  this.toHTML = function() {
    return "<li class='card'>" + this.rank + "-" + this.suit + "</li>";
  };
}


function Deck() {
  var thisDeck = this;
    this.suits = ["H", "C", "D", "S"];
    this.ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    $.each(thisDeck.suits, function(index, suit) {
      var suit = this;
      $.each(thisDeck.ranks, function(index, rank) { 
        var rank = this;
        var card = new Card(rank, suit);
        $("#deck").append(card.toHTML());
      });
    });
}

var shuffle = function(m) {
  var rand, $rand;

  rand = Math.floor(Math.random() * m--);

  $("li:eq(" + m + ")").
    after($("li:eq(" + rand + ")")).
    insertBefore($("li:eq(" + rand + ")"))
    
  if(m) {
    setTimeout(shuffle, 50, m);
  }
};

var deck = new Deck();

/*var sort = function() {
  $("li:eq(0)").insertAfter($("li:eq(2)"));
}
sort();*/

// var length = $(".card").length;

/*for (i = 0, i < $(".card").length, i++) {
  $("li:eq(i)").insertBefore($("li:eq(i+1)"));
}*/

/*function bubblesort(arr){
  var i, swapped;
 
  do{
    for (i = 1; i <= arr.length; i++){
      for (j =1; j <= arr.length; j++){
        swapped = false;
        while (arr[j-1] > arr[j]){
          var temp = arr[j];
          console.log(temp);
          arr[j] = arr[j-1];
          arr[j-1] = temp;
          swapped = true;
          }
        }
      }
    } while (swapped);
  return arr;
}*/

/*$('#deshuffle').on('click', function() {
  for (var i = 0, j; i < ($(".card").length); i++) {

   var temp = $(".card[i]");

   for (j =i-1; j>=0 && $(".card[j]") > temp; j--){
     $(".card[j+1]") = $(".card[j]");

     $('li:eq(' + j + ')').
     before($('li:eq(' + i + ')')).
     after($('li:eq(' + i + ')'));

   }
   $(".card[j+1]") = temp;
 }
}*/




/*var mylist = $('.card');
var listitems = mylist.children('div').get();
listitems.sort(function(a, b) {
   var compA = $(a).text();
   var compB = $(b).text();
   return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
})
$.each(listitems, function(idx, itm) { mylist.append(itm); });
});*/



/*var sort = function(){
 for (var i = 0, j; i < array.length; i++) {

   var temp = array[i];

   for (j =i-1; j>=0 && array[j] > temp; j--){
     array[j+1] = array[j];

     $('li:eq(' + j + ')').
     before($('li:eq(' + i + ')')).
     after($('li:eq(' + i + ')'));

   }
   array[j+1] = temp;
 }
};*/



$("#shuffle").on("click", function() {
  shuffle($(".cards").length);
  $("#deck").addClass("moveCards");
});


$("#deshuffle").on("click", function() {
  for (var i = 0, j; i < ($(".card").length); i++) {

   var temp = ($(".card[i]"));

   for (j =i-1; j>=0 && ($(".card.get[j]")) > temp; j--){
     ($(".card.get[j+1]")) = ($(".card.get[j]"));

     ($('li:eq(' + j + ')')).
     before($('li:eq(' + i + ')')).
     after($('li:eq(' + i + ')'));

   }
   ($(".card.get[j+1]")) = temp;
 }
});



/*$("#deshuffle").on("click", function() {
  location.reload(); 
});*/

