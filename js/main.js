/* jshint browser: true, devel: true, indent: 2, curly: true, eqeqeq: true, futurehostile: true, latedef: true, undef: true, unused: true */
/* global $, jQuery, document, Site, Modernizr */

Site = {
  mobileThreshold: 601,
  init: function() {
    var _this = this;

    $(window).resize(function(){
      _this.onResize();
    });

    $(document).ready(function () {
      $('#donate').click(function(event) {
        event.preventDefault();

        $('#donation-form').submit()
      });
    });

  },

  onResize: function() {
    var _this = this;

    if ($('.post iframe').length) {
      Site.Post.sizeIframes();
    }
  },

  fixWidows: function() {
    // utility class mainly for use on headines to avoid widows [single words on a new line]
    $('.js-fix-widows').each(function(){
      var string = $(this).html();
      string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
      $(this).html(string);
    });
  },
};

Site.Post = {
  init: function() {
    var _this = this;

    if ($('.post iframe').length) {
      _this.sizeIframes();
    }
  },

  sizeIframes: function() {
    $('#documentation iframe').each(function() {
      $(this).height(($(this).width() / 16) * 9);
    });
  }
}

Site.init();
