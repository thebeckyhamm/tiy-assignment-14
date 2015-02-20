var Album = (function(){

    var template = JST["album_thumbnails"];

    function Album(data) {
        this.data = data;
    };

    Album.prototype = {
        // render the template for the album thumb
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
    };

    AlbumList.prototype = {
        render: function() {
            // render the album collection template first
            var $el = $( template() ); 
            // then grab the container div
            var $container = $el.find(".albums-container"); 

            // create each new album, loop over them,
            // render each and append it to the container
            _.each(this.data, function(album){
                var thumbnail = new Album(album);
                $container.append( thumbnail.render() );
            });
            return $el;
        }
    };

    return AlbumList;
})();