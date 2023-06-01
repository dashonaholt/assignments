const express = require("express")
const todo = express.Router()
const {v4: uuidv4} = require("uuid")

const todos = [
    {
        name: "Mop",
        description: "mop kitchen floor",
        imageUrl: "https://media.istockphoto.com/id/1139901565/photo/cleaning-parquet-floor.jpg?s=612x612&w=0&k=20&c=7UcOZfjrMFcuGmuO0XxCkZS4C5GjyqECHBIxeLffo54=",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Sweep",
        description: "sweep kitchen floor",
        imageUrl: "https://www.thespruce.com/thmb/7sneQUisScWY46jsqnZTxbunaJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-sweep-a-floor-1901115-04-f3e1d8dd6d1740fba82d35ef51a1bd1b.jpg",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Laundry",
        description: "do laundry",
        imageUrl: "https://media.istockphoto.com/id/1318399310/photo/laundry-detergents-and-dirty-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Y_YqOi3SuAx35-ap2T0nVIN9D3tkyFLNhUJPzQVPwN8=",
        completed: false,
        _id: uuidv4()
    }
];
//returns the entire list of todos,
todo.route("/")
.get((req, res) => {
    res.send(todos)
})
//allows new todo items to be posted to the array,
.post((req, res) => {
    newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the database!`)
})
//allows the user to delete a todo by its _id, 
todo.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(to => to._id === todoId) 
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo!")
})
//allows the user to update a todo by its _id,
todo.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(to => to._id === todoId) 
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})



module.exports = todo