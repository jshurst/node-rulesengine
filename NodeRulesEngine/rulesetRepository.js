function getRuleset(options) {
    //Get the ruleset from a repository

    var ruleset = {
        validatorId: 'testValidator',
        validatorConfigurationId: 'testValidatorConfig',
        config: {
            nameToMatch: 'jeremy'
        }
    };

    return ruleset;
}

function serializeRuleset(ruleset) {
    
}

exports.getRuleset = getRuleset;
exports.serializeRuleset = serializeRuleset;