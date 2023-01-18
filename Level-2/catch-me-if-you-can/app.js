//# Catch Me If You Can

//1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type `number`:

try
{   
function sum(x,y ){
    //check data types first and throw error
        
        //                  (|| means or)
        if (typeof x !== "number" ) {   
            throw "x not a number"
        } else if (typeof y !== "number") {
        throw "y not a number"
        }
        return x + y;
    } } catch(error) {
        console.log('caught', error)
    }
//to input numbers into the  function
console.log(sum(1,2))

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
var user = {username: "sam", password: "123abc"};
try {
function login(username, password){
if (username !== "sam") {
    throw "username is incorrect"
} else if (password !== "123abc") {
    throw "password is incorrect"
} 
console.log("login successful!", "testing") 
} } 
catch(error){
    console.log('caught',  error)
}
console.log(login("sam", "123abc"), "testing")
