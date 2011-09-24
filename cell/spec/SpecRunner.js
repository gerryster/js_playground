define(['require', './allSpecs'], function(require, allSpecs) {
  return require(allSpecs, function() {
    var jasmineEnv, trivialReporter;
    trivialReporter = new jasmine.TrivialReporter();
    jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 1000;
    jasmineEnv.addReporter(trivialReporter);
    jasmineEnv.specFilter = function(spec) {
      return trivialReporter.specFilter(spec);
    };
    return jasmineEnv.execute();
  });
});