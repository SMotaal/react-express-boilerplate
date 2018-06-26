const User = require('../models/User');

const users = [];

const mark = new User({
    name: "Mark Wilkin"
});

users.push(mark);

const talia = new User({
    name: 'Talia Harrison-Marcassa'
});

users.push(talia);

module.exports = users;