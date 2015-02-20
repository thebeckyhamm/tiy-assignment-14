var SidebarItem = (function(){

    var template = JST["sidebar-album"];

    function SidebarItem(data) {
        this.data = data;
    };

    SidebarItem.prototype = {

        render: function() {
            return $( template(this.data));
        }

    };

    return SidebarItem;
})();


var SidebarList = (function(){
        var $el = $("<ul />");

    function SidebarList(data) {
        console.log(data);
        this.data = data;
    };

    SidebarList.prototype = {

        render: function() {
            _.each(this.data, function(album) {
                var listItem = new SidebarItem(album);
                $el.append(listItem.render());
            });

            return $el;
        }

    };


    return SidebarList;
})();