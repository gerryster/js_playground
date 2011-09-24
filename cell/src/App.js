define(['cell!./Banner', 'cell!./SearchResults'], function(Banner, SearchResults) {
  return {
    render: function(_) {
      return [_(Banner), _(SearchResults)];
    }
  };
});