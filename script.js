$(document).ready(function() {
  //The document.ready checks to make sure the page is loaded first before running JS
    function init() {
        if (localStorage["name"]) {
            $("#name").val(localStorage["name"]);
        }
        if (localStorage["email"]) {
            $("#name").val(localStorage["email"]);
        }
        if (localStorage["message"]) {
            $("#name").val(localStorage["message"]);
        }    
    }
    init();
    
    //Change event used typically for forms
    $(".stored").change(function() {
        localStorage[$(this).attr("name")] = $(this).val();
    })
    
})