const mongoose = require('mongoose');

const ExchangeRate = require('../models/exchange-rate');

// const {
//     WellKnownJsonRes,
//     // JsonResWriter,
// } = require('../../../../api/middleware/json-response-util');
const {
    BasicRead,
    // BasicWrite,
} = require('../../../../api/middleware/crud');
const mongooseMixins = require('../../../../api/middleware/mongoose-mixins')



// endpoint-related

// cRud
exports.read_by_query = (req, res, next) => {
    BasicRead.all(req, res, next, ExchangeRate, req._q.filter, req._q.skip, req._q.limit, req._q.proj, req._q.sort);
};
