document.addEventListener('DOMContentLoaded', function (){
    document.querySelector('#searchbutton').disabled = true;

    //adding a task
    document.querySelector('#searchform').onsubmit = (event) => {
        event.preventDefault(); //prevent page from refreshing
        let task = document.querySelector('#searchbar').value;  //get value from user's search input
        let li = document.createElement('li');  //create a list item
        li.innerHTML = task;    //set list item to search input
        document.querySelector('#tasklist').append(li); 

        //removing a task
        let span = document.createElement('span'); 
        span.innerHTML = '\u00d7'; //the X cross
        li.appendChild(span);

       
        document.querySelector('#searchbar').value = ''; 
        saveData();   //reset the search bar to empty
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

    //mark task as done
    document.querySelector('#tasklist').addEventListener('click', function (e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        //delete the task
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
    });

    //save to local storage
    function saveData(){
        localStorage.setItem("data", document.querySelector('#tasklist').innerHTML);
    }

    function showList(){
        document.querySelector('#tasklist').innerHTML = localStorage.getItem("data");
    }

    showList();


    
});