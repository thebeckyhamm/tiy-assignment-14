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
    var template = JST["photo_collection"];


    function PhotoList(data) {
        this.data = data;
    };

    PhotoList.prototype = {
        render: function() {
            var $renderedTemplate = $(template(this.data[0]));
            console.log($renderedTemplate);
            var $containerDiv = $renderedTemplate.find(".photo-container");
            _.each(this.data, function(photo){
                var photo = new Photo(photo);
                $containerDiv.append(photo.render());
            });
            return $renderedTemplate;
        }
    }; 

    return PhotoList;
})();