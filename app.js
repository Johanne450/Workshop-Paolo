$(document).ready(function () {

  $( '#button' ).on("click", function(event) {
    var $desc = $('#issueInput').val();
    var $selSev = $('#severitySelect').val();
    var $resp = $('#assignedToInput').val();

    event.preventDefault();  // ne pas envoyer le formulaire (mode test)

    // Pour créer les divs en jQuery
    var a = $('<div class="result-container">');
    var b = $("<div class='issueNumber text-muted'>Issue ID:&nbsp;&nbsp;<span id='issueNumber'></span></div>");
    var c = $("<p><button type='button' class='btn btn-info btn-sm' id='btn-openIssue'>Open</button></p>");

    $( "#result-box" ).append( a );  // Crée le rectangle rouge
    $(".result-container").append( b, c);  // Le numéro d'issue est attribué et s'affiche + le bouton

    $( '#btn-openIssue' ).on("click", function(event) { //Fait afficher les détails
      $('.details').show();

      var d = $("<div class='details'>");
      var e = $("<h2 class='issueDesc'></h2>");
      var f = $("<p class='sevSelection'><img src='https://png.icons8.com/clock/p1em/16' title='Clock' width='16' height='16'></p>");
      var g = $("<p class='respData'><img src='https://png.icons8.com/male-user/win8/26' title='Male User' width='16' height='16'></p>");
      var h = $("<button type='button' class='btn btn-warning' id='btn-closeIssue'>Close</button>&nbsp;<button type='button' class='btn btn-danger' id='btn-delIssue'>Delete</button>");


      $(".result-container").append( d );  // Crée le div pour afficher les détails
      $(".details").append( e, f, g, h );
    }); //fin de la fonction on click sur #btn-openIssue pour afficher détails


    $( '.issueDesc').append( $desc );  // ça marche !
    $( '.sevSelection').append( $selSev );
    $( '.respData').append( $resp );
    $('.result-container').show();
    $('.details').hide();
    //$('.result-container').clone().appendTo("#result-box");
    $('#issueNumber').text(stringGen());
  }); // fin du onclick bouton Track


  $( '#btn-closeIssue' ).on("click", function(event) {
    $('.details').hide();
  });

  $( '#btn-delIssue' ).on("click", function(event) {
    $('.result-container').hide();
  });

}); //fin de jQuery

//début de Javascript
function stringGen() { //fonctionne encore mieux que stringGen(len)
    function random(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
    issueNumber = random(8) + "-" + random(4) + "-" + random(4) + "-" + random(4) + "-" + random(12);
    return issueNumber;
}
