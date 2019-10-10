const button = document.querySelectorAll('button[data-type]');

// function Type(){button.addEventListener('click', function(){
//     let type = button.dataset.type;
//     return type;
// })
// }

for(let i = 0; i < button.length-1; i++){
    button[i].addEventListener('click', function(){
        let type = button.dataset.type;
        return type;
    });
  }

function Block(){
    document.querySelector('.pay').disabled = false;
    if (type === 'simple'){
        document.querySelectorAll('button[data-type='author']').disabled = true;
        document.querySelector('button[data-type='syrup']').disabled = false;
    }
    else if (type === 'author'){
        document.querySelectorAll('button[data-type]').disabled = true;
    }
    else (type === 'milk'){
        document.querySelectorAll('button[data-type='simple']').disabled = true;
        document.querySelectorAll('button[data-type='author']').disabled = true;
        document.querySelector('button[data-type='syrup']').disabled = false;
    }
}

  