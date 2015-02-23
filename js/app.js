var App = (function(){
    
    function App(data) {
        this.data = data;
        this.$content = $(".main");
        this.$sidebar = $(".sidebar");
        this.$body = $("body");

        this.showSidebar();
        //console.log($sidebar);
        this.showAlbums();
        this.addAlbumsListener();
        this.$sidebar.hide();


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
            this.$sidebar.hide();
        },

        showSidebar: function() {
            var albums = this.getAlbumData();
            var sidebarList = new SidebarList(albums);
            this.$sidebar.append(sidebarList.render());
        },

        showPhotos: function(album) {
            this.photoList = new PhotoList(album);
            this.$content.html(this.photoList.render());
            this.$sidebar.show();
        },

        zoomPhoto: function(photo) {
            this.photoZoom = new PhotoZoom(photo);
            this.$body.prepend(this.photoZoom.render());

        },

        addAlbumsListener: function() {
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
                    app.addSidebarListener();
                    app.addPhotoListener();
                });          
        },

        addSidebarListener: function() {
            var app = this;

            $(".sidebar").on("click", "a", function(event) {
                event.preventDefault();
                var $album = $(event.currentTarget);

                var currentAlbum = $album.data("name");
                if (currentAlbum === "all") {
                    app.showAlbums();
                    app.addAlbumsListener();
                    return;
                }

                var currentAlbumPhotos = _.filter(app.data, function(photo) {
                    return photo.album_name === currentAlbum;
                });
                console.log(currentAlbumPhotos);
                app.showPhotos(currentAlbumPhotos);
                app.addPhotoListener();

            });
        },

        addPhotoListener: function() {
            var app = this;

            $(".photo").on("click", function(event) {
                var $photo = $(event.currentTarget);
                console.log($photo);

                var currentPhotoId = $photo.data("photo-id");
                console.log(currentPhotoId);

                var currentPhoto = _.find(app.data, function(photo){
                    return photo.photo_id === currentPhotoId;
                });

                app.currentPhoto = currentPhoto;
                console.log(currentPhoto);

                app.zoomPhoto(currentPhoto);
                app.addBackButtonListener();

            });
        },

        addBackButtonListener: function() {
            var app = this;

            $(".back-button").on("click", function(event) {
                event.preventDefault();
                $(".overlay").remove();

            });       
        }

    };


    return App;

})();


