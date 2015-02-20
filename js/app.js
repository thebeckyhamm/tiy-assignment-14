var App = (function(){
    
    function App(data) {
        this.data = data;
        this.$content = $(".main");
        this.$sidebar = $(".sidebar");

        this.showAlbums();
        this.addListeners();


    };


    App.prototype = {

        getAlbumData: function() {
            // allow inner functions to access all data
            var app = this; 

            var albumData = _.chain(app.data)
                .pluck("album_name") // ["korea", "korea", "england", ...]
                .uniq() // ["korea", "england", ...]
                .map(function(albumName) {
                    return {album_name: albumName};
                })
                .value(); // [{album: "korea"}, {album: "england"}]

            // get 1 photo from each type of album to show as thumbnail
            _.each(albumData, function(album) {
                var albumName = album.album_name;

                var photo = _.find(app.data, function(photo){
                    return photo.album_name  === albumName;
                });

                album.photo_url = photo.photo_url;
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

        showSidebar: function() {
            var albums = this.getAlbumData();
            console.log(albums);

            var sidebarList = new SidebarList(albums);
            console.log(sidebarList);
            window.list = sidebarList;
            this.$sidebar.html(sidebarList.render());
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
                    return photo.album_name === currentAlbum;
                });
                //console.log(currentAlbumPhotos)
                app.showPhotos(currentAlbumPhotos);
                app.showSidebar();
            });
           

        }

    };


    return App;

})();


