var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
define(['Bus'], function(Bus) {
  var _;
  _ = cell.prototype.$R;
  return {
    afterRender: function() {
      return Bus.bindAndCall({
        'change:searchTerm': __bind(function(_arg) {
          var isearch, searchTerm;
          searchTerm = _arg.cur;
          if (searchTerm) {
            isearch = new google.search.ImageSearch();
            isearch.setSearchCompleteCallback(this, __bind(function() {
              var r, _i, _len, _ref, _results;
              this.$el.html('');
              _ref = isearch.results;
              _results = [];
              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                r = _ref[_i];
                _results.push(this.$el.append(_("<a href='" + r.originalContextUrl + "' target='_blank'><img src='" + r.tbUrl + "'></a>")));
              }
              return _results;
            }, this));
            return isearch.execute(searchTerm);
          }
        }, this)
      });
    }
  };
});