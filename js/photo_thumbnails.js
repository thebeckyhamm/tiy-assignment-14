var Photo = (function(){
    var template = JST["photo_thumbnails"]; 


    function Photo(data) {
        this.data = data;
    };

    Photo.prototype = {
        render: function() {
            return $(template(this.data));
        }
    };

    return Photo;
})();

var PhotoList = (function() {
    var $container = $("<div />");

    function PhotoList(data) {
        this.data = data;
    };

    PhotoList.prototype = {
        render: function() {
            var $el = $container.empty();
            _.each(this.data, function(photo){
                var photo = new Photo(photo);
                $el.append(photo.render());
            });
            return $el;
        }
    }; 

    return PhotoList;
})();