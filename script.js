document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#searchbutton').disabled = true;

    //adding a task
    document.querySelector('#searchform').onsubmit = (event) => {
        event.preventDefault(); //prevent page from refreshing
        let task = document.querySelector('#searchbar').value;  //get value from user's search input
        let li = document.createElement('li');  //create a list item
        li.innerHTML = task;    //set list item to search input

        //removing a task
        let remove = document.createElement('button');
        remove.innerHTML = '  X';
        li.appendChild(remove);

        remove.addEventListener('click', () => {
            removeTask(li);
        })

       
        document.querySelector('#tasklist').append(li); 
        document.querySelector('#searchbar').value = '';    //reset the search bar to empty
        document.querySelector('#searchbutton').disabled = true;

    }

    //prevent submitting nothing
    document.querySelector("#searchbar").onkeyup = () => {
        if(document.querySelector('#searchbar').value.length === 0){
            document.querySelector('#searchbutton').disabled = true;
        }
        else{
            document.querySelector('#searchbutton').disabled = false;
        }
    }

    const removeTask = (li) => {
        li.remove();
    }

    
});