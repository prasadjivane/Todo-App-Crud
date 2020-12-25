const express = require('express');
const app = express();
const todosRoute = express.Router();

// The todos model
let todos = require('../models/Todos');

// To Add todos
todosRoute.route('/create').post((req, res, next) => {
  todos.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// To Get All todos
todosRoute.route('/').get((req, res) => {
  todos.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// To Get single todo
todosRoute.route('/read/:id').get((req, res) => {
  todos.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// To Update the todos
todosRoute.route('/update/:id').put((req, res, next) => {
  todos.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Todo updated successfully')
    }
  })
})

// To Delete the todos
todosRoute.route('/delete/:id').delete((req, res, next) => {
  todos.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = todosRoute;