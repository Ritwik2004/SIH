let dropdown_op=document.getElementById("dropdown_op");
dropdown_op.addEventListener('click',(ele)=>{
  let locSelector=document.getElementById("locSelector");
  if(ele.target.value=="Delhi"){
    locSelector.innerHTML="Delhi";
  }
  else if(ele.target.value=="Bombay"){
    locSelector.innerHTML="Bombay";
  }
  else if(ele.target.value=="Madras"){
    locSelector.innerHTML="Madras";
  }
  else if(ele.target.value=="Karnatak"){
    locSelector.innerHTML="Karnatak";
  }
    // console.log(ele.target.value);
})

// JavaScript code

function search_animal() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('animals');
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      }
      else {
        x[i].style.display = "list-item";
      }
    }
}

  