// const constants = require('./constants');

// Declare UA table
declare({
    database: constants.UA_DATABASE,
    schema: constants.UA_DATASET,
    name: constants.UA_TABLE,
});

// Declare GA4 table
declare({
    database: constants.GA4_DATABASE,
    schema: constants.GA4_DATASET,
    name: constants.GA4_TABLE,
});
