define ['require','./allSpecs'], (require,allSpecs)->
  require allSpecs, ->
    trivialReporter = new jasmine.TrivialReporter()
    jasmineEnv = jasmine.getEnv()
    jasmineEnv.updateInterval = 1000
    jasmineEnv.addReporter trivialReporter
    jasmineEnv.specFilter = (spec)-> trivialReporter.specFilter spec
    jasmineEnv.execute()