
/* var folder = "img/product-img/";

$.ajax({
    url: folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match('\.(png|jpg|jpeg)$')) {
                $(".product-imgs").append("<img src='" + val + "'>");
            }
            console.log("val -> ",val);
        });
    }
}); */

/* $.ajax({
    url: "img/product-img/",
    success: function(data) {
        $(data).find("a").attr("href", function (i, val) {
            if (val.match('\.(png|jpg|jpeg)$')) {
                $("body").append("<img src='" + val + "'>");
            }
            console.log("val -> ",val);
        });
    }
}); */

/* var dir = "img/product-img/";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("body").append("<img src='" + dir + filename + "'>");
        });
    }
}); */