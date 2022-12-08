/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
const getAllPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const data = await (await fetch(url)).json();
    console.log(data);
}
    getAllPosts();




// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
const getAllUsers = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'; 
    const data = await (await fetch(url)).json();
    console.log(data);
}
getAllUsers();




// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.

const getComments = async (postID) => {
    const url = 'https://jsonplaceholder.typicode.com/comments'; 
    const data = await (await fetch(url)).json();
    const JSONData = data.filter(word=> word.postId = postID);
    console.log(JSONData)
    return JSONData;
      
}

getComments(1);




// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.
const getAllComments = async (userID) => {
    const url = 'https://jsonplaceholder.typicode.com/comments'; 
    const data = await (await fetch(url)).json();
    const JSONData = data.filter(word=> word.userId = userID);
    console.log(JSONData);
    return JSONData;
   
}
getAllComments(2);





// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.

const getTodosForUser = async (userID) => {
    const url = 'https://jsonplaceholder.typicode.com/todos'; 
    const data = await (await fetch(url)).json();
    const JSONData = data.filter(word=> word.userId = userID);
    console.log(JSONData);
   return JSONData;     
   }
getTodosForUser(3);