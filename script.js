const display = document.querySelector('#display')

const buttons = document.querySelectorAll('button')

buttons.forEach((item)=>{                                                     // forEach() method calls a function for each element in an array
    item.onclick = ()=>{
        if(item.id=='clear'){
            display.innerText = ''
        }

        else if(item.id=='backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length-1)             //substr() is a string method, used to extract a substring from a string, given a start position and a length
        }

        else if(display.innerText!='' && item.id=='equal'){
            display.innerText = eval(display.innerText)                        //eval() function evaluates JS code represented as a string and returns its completion value
        }

        else if(display.innerText=='' && item.id=='equal'){
            display.innerText = 'Please enter something to calculate'
            setTimeout(()=>(display.innerText=''), 2000)                      //setTimeout() method calls a function after a number of milliseconds
        }

        else{
            display.innerText+= item.id
        }
    }
})
