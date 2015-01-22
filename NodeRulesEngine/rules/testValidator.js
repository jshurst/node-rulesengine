function validate(context, logger) {
    var validationResult = require('../validationResult');

    validationResult.success = true;
    
    //Run commands
    return validationResult;
};

exports.validate = validate;