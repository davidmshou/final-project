function Card (r, s) {
  this.rank = r;
  this.suit = s;
  this.toHTML = function() {
    return "<li class='card'>" + this.rank + " " + this.suit + "</li>";
  };
}


function Deck() {
    var thisDeck = this,
      $deck = $("#deck"),
      card;
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

  var deck = new Deck();

/*$("#shuffle").on("click", function() { 
    var array = new Deck();
  array.push(Math.floor(Math.random() * 52)); 
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return(array);
  });*/


var shuffle = function(array) {
   
  var n = array.length, t, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }

  return(array);
}
console.log(shuffle());