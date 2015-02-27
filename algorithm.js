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
    after($("lie:eq(" + rand + ")")).
    insertBefore($("li:eq(" + rand + ")"))
    
  if(m) {
    setTimeout(shuffle, 50, m);
  }
};

var deck = new Deck();

$("#shuffle").on("click", function() {
  shuffle($(".cards").length);
  $("#deck").addClass("moveCards");
});

$("#deshuffle").on("click", function() {
  location.reload(); 
});

