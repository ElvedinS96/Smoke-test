exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['smokeTest.js'],
    jasmineNodeOpts: {
      defaultTimeoutInterval: 2500000
      },
    multiCapabilities: [{
        'browserName': 'firefox'
      }, {
        'browserName': 'chrome'
      }]
  }