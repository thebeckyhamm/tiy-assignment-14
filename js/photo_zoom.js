var PhotoZoom = (function(){
    var template = JST["photo_zoom"]; 


    function PhotoZoom(data) {
        this.data = data;
        //console.log(this.data);
    };

    PhotoZoom.prototype = {
        render: function() {
            return $(template(this.data));

        }
    };

    return PhotoZoom;
})();