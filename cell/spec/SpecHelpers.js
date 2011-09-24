define({
  spyOnAll: function(o) {
    var k;
    for (k in o) {
      spyOn(o, k);
    }
    return o;
  }
});