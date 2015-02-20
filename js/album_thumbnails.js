var Album = (function(){

    var template = JST["album_thumbnails"];

    function Album(data) {
        this.data = data;
    };

    Album.prototype = {
        // render the template
        render: function() { 
            return $(template(this.data));
        }
    };
    return Album;

})();


var AlbumList = (function(){

    var template = JST["album_collection"];

    function AlbumList(data) {
        this.data = data;
        this.$el = $("<div />");
    };

    AlbumList.prototype = {
        render: function() {
            var $el = $( template() ); // render the template first
            var $container = $el.find(".albums-container"); // then grab the container div

            _.each(this.data, function(album){
                var thumbnail = new Album(album);
                $container.append( thumbnail.render() );
            });
            return $el;
        }
    };

    return AlbumList;
})();