$(function(){

    $.ajax("photos.json", {

        success: function(data) {
            //console.log(data);
            window.app = new App(data);
        },

        error: function() {
            console.log("sucking");
        }
    });

});
