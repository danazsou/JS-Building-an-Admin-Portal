
// Your Code Here

//make sure to add async along with await so it won't be a long response time
 function admin(){
    
    const bookListResponse = fetch('http://localhost:3001/ListBooks');
    const bookList = bookListResponse.json();



    const ul = document.createElement('ul');
}