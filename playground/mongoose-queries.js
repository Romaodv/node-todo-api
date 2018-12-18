const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var userId = '5c17c1f52389090c44b04bf6';

// var id = '5c18d2fa3d9b8330b0f29ce122';

// if (!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo)
//         return console.log('Id not found');
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


// User.findById

User.findById(userId).then((user) => {
    if (!user)
        return console.log('User not found');
    console.log('User: ', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));