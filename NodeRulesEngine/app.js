//Anything can call the engine, this is just a test example
//var requireFrom = require('requirefrom');
//var personController = requireFrom('/')('engine');

var Engine = require('./engine');
var rulesetRepository = require('./rulesetRepository');
var logger = require('./consoleLogger');
var err = {};

var options = {
    owner: 1,
    criteria: 'adf'
};

var context = {
    firstName: 'jeremy',
    lastName: 'hurst'
};

var currentEngine = new Engine('./rules/', rulesetRepository, logger);

//For each rule call process
var result = currentEngine.process(err, options, context);

logger.log('Validated: ' + result.success);