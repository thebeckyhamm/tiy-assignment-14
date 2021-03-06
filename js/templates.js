this["JST"] = this["JST"] || {};
this["JST"]["album_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"albums-collection\">\n    <header><h1>Photo Gallery</h1></header>\n    <div class=\"albums-container\"></div>\n</div>";
  },"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["album_thumbnails"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"album\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"album-photo\" style=\"background-image: url("
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + ");\">\n        <div class=\"album-name\">\n            <h3>"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</h3>\n        </div>\n    </div>\n\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photo_collection"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"photo-collection\">\n    <header><h2>"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</h2></header>\n    <div class=\"photo-container\"></div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photo_thumbnails"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"photo\" data-photo-id=\""
    + escapeExpression(((helper = (helper = helpers.photo_id || (depth0 != null ? depth0.photo_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"photo-wrapper\" style=\"background-image: url("
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + ");\">\n        <h3>"
    + escapeExpression(((helper = (helper = helpers.photo_name || (depth0 != null ? depth0.photo_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_name","hash":{},"data":data}) : helper)))
    + "</h3>  \n        \n    </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["photo_zoom"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"overlay\">\n    <div class=\"photo-zoom\" data-photo-id=\""
    + escapeExpression(((helper = (helper = helpers.photo_id || (depth0 != null ? depth0.photo_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_id","hash":{},"data":data}) : helper)))
    + "\">\n    <a href=\"\" class=\"back-button\">&lt; Back</a>\n\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.photo_url || (depth0 != null ? depth0.photo_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_url","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + escapeExpression(((helper = (helper = helpers.photo_name || (depth0 != null ? depth0.photo_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_name","hash":{},"data":data}) : helper)))
    + "\">\n        <h3>"
    + escapeExpression(((helper = (helper = helpers.photo_name || (depth0 != null ? depth0.photo_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo_name","hash":{},"data":data}) : helper)))
    + "</h3>  \n    </div>\n</div>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["sidebar-album"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li><a href=\"#\" data-name=\""
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.album_name || (depth0 != null ? depth0.album_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"album_name","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"useData":true});