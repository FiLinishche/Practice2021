$(function() {
    let buttonEnter = $('#enter');
    buttonEnter.click(function(){
        createTodo();
    })
    let userInput = $('#userInput');
    let ul = $('ul');
    let localStorage = window.localStorage;
    let itemMap = [
        {
            ind:1,
            text:'sample'
        }
    ]
    
    function inputLength(){
        return !!userInput.val();
    }
    
    function createTodo(){
        let li = $("<li>");
        li.append(document.createTextNode(userInput.val()));
        ul.append(li);
        itemMap.push(
            {
                ind:itemMap.length+1,
                text:userInput.val()
            }
        )
        localStorage.setItem('Todo_items', JSON.stringify(itemMap));
        userInput.val('');
        li.click(function() {
            li.toggleClass('done');
        });
    
        let deleteButton = $('<button>');
        deleteButton.append(document.createTextNode('X'));
        li.append(deleteButton);
        deleteButton.click(deleteTododItem);
    
        function deleteTododItem(){
            li.fadeOut();
        }
    
        /*
        li.onclick = function(){
            li.classList.toggle('done')
        }
        */
    }
    
    /*
    buttonEnter.onclick = function(){
        createTodo();
    }
    */
    
    function changeListAfterKeypress(event) {
        if (inputLength() && event.which === 13) {
            createTodo()
        }
    }
    
    userInput.keypress(changeListAfterKeypress);
})

