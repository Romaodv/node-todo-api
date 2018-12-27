const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5c1a6dc1a4f1f3e1bdbf19e7').then((doc) => {
    console.log(doc);
}).catch((e) => console.log(e));