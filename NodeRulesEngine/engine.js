var rulePath,
    rulesetService,
    logger;

var engine = function(path, repository, log) {
    rulePath = path;
    rulesetRepository = repository;
    logger = log;
};

engine.prototype.process = function(err, options, context) {
    if (options.owner == null) { err = 'owner cannot be null'; return null; }
    if (options.criteria == null) { err = 'criteria cannot be null'; return null; }
    if (context == null) { err = 'context cannot be null'; return null; }

    //First get the ruleset from a datasource (db, file, etc)
    var scenario = require('./ruleScenario');
    //var scenario = new RuleScenario();
    scenario.ruleset = rulesetRepository.getRuleset(options);
    scenario.validator = require(rulePath + scenario.ruleset.validatorId);
    var validatorConfigurator = require(rulePath + scenario.ruleset.validatorConfigurationId);

    scenario.validationResult = {};
    validatorConfigurator.configure(scenario, logger);
    var result = scenario.validator.validate(context, logger);
    return result;
};

module.exports = engine;