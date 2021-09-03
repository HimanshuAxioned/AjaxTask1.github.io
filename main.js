console.log('Hello Ajax');

let list= document.querySelector('.titleList');
list.textContent= '';

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

let start= 0;
let end=6 ;

function buttonClickHandler(){
  // console.log('cliked on load more button');


  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  // xhr.onreadystatechange= function(){
  //   console.log('ready state is', xhr.readyState);
  // }

  //open the object
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

  //what to do on progress(optional)
  // xhr.onprogress = function(){
  //   console.log('on progress');
  // } 
  
 
  //what to do when response is ready
  xhr.onload= function(){

    let obj = JSON.parse(xhr.responseText);
    // console.log('obj =>', obj);
    newObj= obj.slice(start,end);
    
    let str= ""
    for(key in newObj){
      str += `<li>Title=>  ${newObj[key].title } <br> Body=> ${newObj[key].body}  </li>`;
    }

    list.innerHTML= str;


    if(end > obj.length){
      fetchBtn.style.display="none";
    }

    start+=6;
    end+=6;
    // console.log('newObj =>',newObj)
    // console.log('start =>',start, 'end =>',end);  
  }
  
  

  //send the req
  xhr.send();

  
}

