console.log('Hello Ajax');

let list = document.querySelector('.titleList');

let fetchBtn = document.getElementById('fetchBtn');


let start = 0;
let end = 6;

window.addEventListener('load', function () {



  // console.log('cliked on load more button');

  //instantiate an xhr object
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    console.log('ready state is', xhr.readyState);
  }

  //open the object
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

  //what to do on progress(optional)
  // xhr.onprogress = function(){
  //   console.log('on progress');
  // } 


  //what to do when response is ready
  xhr.onload = function () {

    let data = xhr.responseText

    try {
      var obj = JSON.parse(data);
    } catch (e) {
      console.error('this is not JSON string');
    }

    // let obj = JSON.parse(data);
    // console.log('obj =>', obj);
    newObj = obj.slice(start, end);
     
    let str = ""
    for (key in newObj) {
      str += `<tr><td>${newObj[key].id}</td><td> ${newObj[key].title} </td><td> ${newObj[key].body}</td></tr>`;
    }

    list.innerHTML = str;


    if (end > obj.length) {
      fetchBtn.style.display = "none";
    }

    end += 6;
    return obj;
    // console.log('newObj =>',newObj)
    // console.log('start =>',start, 'end =>',end);  
  }



  //send the req
  xhr.send();



  fetchBtn.addEventListener('click', buttonClickHandler);

  function buttonClickHandler() {
    let data = xhr.responseText

    try {
      var obj = JSON.parse(data);
    } catch (e) {
      console.error('this is not JSON string');
    }

    newObj = obj.slice(start, end);

    let str = ""
    for (key in newObj) {
      str += `<tr><td>${newObj[key].id}</td><td> ${newObj[key].title} </td><td> ${newObj[key].body}</td></tr>`;
    }

    list.innerHTML = str;


    if (end > obj.length) {
      fetchBtn.style.display = "none";
    }
    end += 6;
    // console.log('newObj =>',newObj)
    console.log('start =>', start, 'end =>', end);
  }

})


