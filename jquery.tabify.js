(function ($) {
  $.fn.tabify = function (options) {
    var defaults = {};

    var options = $.extend(defaults, options);

    return this.each(function () {
      var self = $(this);

      $(this).find(".window").hide();
      $(this).find(".window:first").show();

      $(this).find("ul li:first").addClass("active");

      $(this)
        .find("ul li a")
        .click(function () {
          self.find("li").removeClass("active");
          self.find(".window").hide();

          $(this).parent().addClass("active");
          var id = $(this).attr("href");
          $(id).show();

          return false;
          void 0;
        });
    });
  };
})(jQuery);

$(document).ready(function () {
  $(".tabs").tabify();
});
