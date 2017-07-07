$(document).ready(function () {

  $( '#button' ).on("click", function(event) {
    var $desc = $('#issueInput').val();
    var $selSev = $('#severitySelect').val();
    var $resp = $('#assignedToInput').val();

    event.preventDefault();  // ne pas envoyer le formulaire (mode test)

    // Pour créer les divs en jQuery
    var $createContainer = $('<div class="result-container">');
    var $issueNumberDisplay = $('<div class="issueNumber text-muted">Issue ID:&nbsp;&nbsp;<span class="issueNumber"></span></div>');
    var $openIssue = $('<p><button type="button" class="btn btn-info btn-sm" id="btn-openIssue">Open</button></p>');

    $( '#result-box' ).append( $createContainer );  // Crée le rectangle rouge
    $('.result-container').append( $issueNumberDisplay, $openIssue);  // Le numéro d'issue est attribué et s'affiche + le bouton
    $('.issueNumber').text(stringGen());

      $( '#btn-openIssue' ).on("click", function(event) { //Fait afficher les détails
        $('.details').show();
      });

        var $addDetails = $('<div class="details">');
        var $showIssueDesc = $('<h2 class="issueDesc"></h2>');
        var $showSevSel = $('<p class="sevSelection"><img src="https://png.icons8.com/clock/p1em/16" title="Clock" width="16" height="16"></p>');
        var $showRespData = $('<p class="respData"><img src="https://png.icons8.com/male-user/win8/26" title="Male User" width="16" height="16"></p>');
        var $closeIssue = $('<button type="button" class="btn btn-warning" id="btn-closeIssue">Close</button>&nbsp;<button type="button" class="btn btn-danger" id="btn-delIssue">Delete</button>');


        $(".result-container").append( $addDetails );  // Crée le div pour afficher les détails
        $(".details").append( $showIssueDesc, $showSevSel, $showRespData, $closeIssue );


    $( '.issueDesc').append( $desc );  // ça marche !
    $( '.sevSelection').append( $selSev );
    $( '.respData').append( $resp );
    $('.result-container').show();
    $('.details').hide();
    //$('.result-container').clone().appendTo("#result-box");
    //$('#issueNumber').text(stringGen());  //Test de le placer plus haut vers ligne 17
    $( '#btn-closeIssue' ).on("click", function(event) {
      $('.details').hide();
    });

    $( '#btn-delIssue' ).on("click", function(event) {
      $('.result-container').hide();
    });
  }); // fin du onclick bouton Track


}); //fin de jQuery

//début de Javascript
function stringGen() { //fonctionne encore mieux que stringGen(len)
    function random(length) {
      return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
    }
    issueNumber = random(8) + "-" + random(4) + "-" + random(4) + "-" + random(4) + "-" + random(12);
    return issueNumber;
}
