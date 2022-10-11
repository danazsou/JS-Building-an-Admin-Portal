
// Your Code Here

//make sure to add async along with await so it won't be a long response time
async function main(){
    let response = await fetch('http://localhost:3001/listBooks')
 
    let books = await response.json()
    
    books.forEach(displayBook)
 
 }
 function displayBook(book){
     
    let root = document.querySelector('#root')
 
     let li = document.createElement('li')
     li.textContent = book.title
 
     let input = document.createElement('input')
     input.value = book.quantity
 
     let saveButton = document.createElement('button')
     saveButton.textContent= 'Save'
 
     saveButton.addEventListener('click', function(){
         fetch('http://localhost:3001/updateBook',{
                    
             method: 'PATCH',
             headers: { 'Content-Type': 'application/json'},
             body: JSON.stringify({
                 id: book.id,
                 quantity: input.value
             })
         })
     })
 
     li.append(input, saveButton)
     root.append(li)
 }
 
 main()

 