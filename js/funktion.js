
$(document).ready(function(){
  //Skrollfunktionen
  //när a trycks på, alltså ett val i menyn.
  $("a").on('click', function(event) {
    //$.attr(this, 'href')=kollar på det tryckta elementet och tar ut dess href.
    //offset kollar hur långt ner det är till det elementet som är href
    //variabeln top = avståndet till det element vi vill till
    var top = $( $.attr(this, 'href') ).offset().top;
      //skrollar ner så långt som top är.
      $('html, body').animate({
        scrollTop: top
      }, 500);

    return false;
  });
});
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAx3XTBKOhEbrfKOHAnbpC8o0e-R8Tfs4A",
    authDomain: "qunicy-c1a10.firebaseapp.com",
    databaseURL: "https://qunicy-c1a10.firebaseio.com",
    projectId: "qunicy-c1a10",
    storageBucket: "",
    messagingSenderId: "250921380742"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer");
    return $firebaseArray(ref);
  }
);
// Vi gör så att vi kan komma åt inläggen i kommentarer-fabriken med ng-model
app.controller("KommentarCtrl", function($scope, kommentarer) {
    $scope.kommentarer = kommentarer;

    // Definera en kommentar med tom text och skribent
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
    $scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
};
  }
);
