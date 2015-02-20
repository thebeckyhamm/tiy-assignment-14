var App = (function(){
    
    function App(data) {
        this.data = data;
        this.$content = $(".main");

        this.showAlbums();
        //this.showPhotos();
        this.addListeners();


    };


    App.prototype = {

        getAlbumData: function() {
            var albumData = _.chain(this.data)
                .pluck("album")
                .uniq()
                .map(function(albumName) {
                    return {album: albumName};
                })
                .value();

            var app = this;

            _.each(albumData, function(album) {
                var albumName = album.album;

                var photo = _.find(app.data, function(photo){
                    return photo.album  === albumName;
                });

                album.photo = photo.photo;
            });
            return albumData;
        },

        // getCurrentAlbum: function() {
        //     return _.filter(this.data, function() {
        //         return this
        //     });
        // },

        showAlbums: function() {
            var albums = this.getAlbumData();

            var list = new AlbumList(albums);

            this.$content.html(list.render());
        },

        showPhotos: function(album) {
            this.photoList = new PhotoList(album);
            this.$content.html(this.photoList.render());
        },

        zoomPhoto: function(photo) {

        },

        addListeners: function() {
            // allow lower functions to access this.data
            var app = this;

            $(".albums-container").on("click", ".album", function(event) {
                var $album = $(event.currentTarget);

                // get the clicked album name from the data attribute
                var currentAlbum = $album.data("name");
                //console.log(currentAlbum);

                // Filter down all the data to only those with
                // the clicked album name. 
                // * filter on all data
                // * return only those where the album name equals
                //   the clicked album name
                var currentAlbumPhotos = _.filter(app.data, function(photo) {
                    return photo.album === currentAlbum;
                });
                //console.log(currentAlbumPhotos)
                app.showPhotos(currentAlbumPhotos);
            });
           

        }

    };


    return App;

})();


