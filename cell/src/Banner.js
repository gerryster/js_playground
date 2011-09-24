define(['Bus'], function(Bus) {
  return {
    render: function(_) {
      return [
        _('span.title', 'Azorian'), _('input.searchInput', {
          placeholder: 'Search Term',
          value: Bus.searchTerm || ''
        }), _('button.searchButton', 'Search')
      ];
    },
    on: {
      'click .searchButton': function() {
        return Bus.set({
          searchTerm: $('.searchInput').val()
        });
      },
      'keyup .searchInput': function(_arg) {
        var target, which;
        which = _arg.which, target = _arg.target;
        if (which === 13) {
          return Bus.set({
            searchTerm: $(target).val()
          });
        }
      }
    }
  };
});