const todoForm = document['todo-form'];
// const checkbox = document['check-box'];
// getting the data
function getData() {
    axios.get('https://api.vschool.io/dashonaholt/todo/')
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}
// making the data show up on the webpage
//listData is going to recieve the data array
function listData(data) {
    console.log(data);
  //clears the list before it list it out to the page
    clearList();
  //looping through the element
    for (let i = 0; i < data.length; i++) {
    //creating a div for all of the elements to sit inside of
    const div = document.createElement('div');
    div.setAttribute('id', `div${i}`);
    document.getElementById('todo-list').appendChild(div);
    //creating a h1
    const h1 = document.createElement('h1');
    //set id(i) to the h1
    h1.setAttribute('id', `${data[i]._id}`);
    const h2 = document.createElement('h2');
    const  h3 = document.createElement('h3')
    // const button = document.createElement('button');
    const img = document.createElement('img');
    const checkbox = document.createElement('input')
    //checkbox content
    checkbox.type = 'checkbox';
    checkbox.value = 'fruit';

    // text content
    h1.textContent = data[i].title;
    h2.textContent += data[i].description;
    h3.textContent = data[i].price;
    img.src = data[i].imgUrl;
    // button.textContent = 'complete';
    checkbox.textContent = 'Completed';
    // button.addEventListener('click', (myFunction));
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    // function myFunction() {
    //   //look for id(i)
    //     document.getElementById(`${i}`).style.textDecoration = 'line-through';
    document.getElementById(`div${i}`).append(h1, h2, h3, img, deleteBtn, checkbox);
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            h1.style.textDecoration = 'line-through';
            isComplete();
        } else if (!checkbox.checked) {
            h1.style.textDecoration = 'none';
            notComplete()
        }
    })
    function isComplete() {
        const completed = {
        completed: true,
    }
    //put to mark complete
    axios.put(`https://api.vschool.io/dashonaholt/todo/${data[i]._id}`, completed)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
function notComplete() {
    const completed = {
        completed: false,
    }
    //new put to mark incomplete
    axios.put(`https://api.vschool.io/dashonaholt/todo/${data[i]._id}`, completed)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

    // adding event listener to delete button for it to actually delete things
    deleteBtn.addEventListener('click', () => {
        axios.delete(`https://api.vschool.io/dashonaholt/todo/${data[i]._id}`)
        .then((res) => location.reload())
        .catch((err) => console.log(err));
    });
    }
}
// creating clear list function to prevent duplicates
function clearList() {
    const element = document.getElementById('todo-list');
  //looping over the element
    while (element.firstChild) {
    // removing every child element it has until it has nomore child elements
    element.removeChild(element.firstChild);
    }
}
}
// on submit function
todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
  // creating new todo
    console.log(todoForm, 'todoForm');
    const newTodo = {
    title: todoForm.title.value,
    description: todoForm.description.value,
    imgUrl: todoForm.imgUrl.value,
    price: todoForm.price.value,
};
  // clearing the form
    todoForm.title.value = '';
    todoForm.description.value = '';
    todoForm.imgUrl.value = '';
    todoForm.price.value = '';
    // axios.put("https://api.vschool.io/dashonaholt/todo/", {})
    // .then(res => console.log(res.data))
    // .catch(err => console.log(err))
//   sending the post request to the api, adding newToDo
    console.log(newTodo, 'newTodo');
    axios.post('https://api.vschool.io/dashonaholt/todo/', newTodo)
    //this is saying dont worry about the response just go get the data
    .then((res) => getData())
    .catch((err) => console.log(err)); 
});
getData();
