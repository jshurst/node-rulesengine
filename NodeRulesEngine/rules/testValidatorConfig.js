function configure(ruleScenario, logger) {
    logger.log('made it to the testValidatorConfig');
    ruleScenario.validator.nameToMatch = ruleScenario.ruleset.config.nameToMatch;
};

exports.configure = configure;