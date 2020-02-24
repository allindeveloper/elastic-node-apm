const schemas = require('../schemas');

function validateUserCreate(user) {
    return schemas.userCreate.validate(user);
}

exports.validateUserCreate = validateUserCreate;
