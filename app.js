const country_name = document.getElementById("country_name");
const serchBTN = document.getElementById ("serchBTN");


const search_box = document.getElementById("search_box")
const cards = document.querySelector(".cards")

// this is for button click
serchBTN.addEventListener("click",() => {
  search_box.classList.add("hide");
  cards.classList.add("show");
  
  
  const countryName = country_name.value; 

  if(country_name != "" ){
    fetchUniversity (countryName);
  }
  else{
    cards.innerHTML = ` <div class="msg">
    <h1>Enter the value Plz..</h1>
</div>`
  }

})


//  this is for enter click
country_name.addEventListener("keyup" , e => {
  console.log(e);

  if(e.key === "Enter"){
    search_box.classList.add("hide");
    cards.classList.add("show");
    
    
    const countryName = country_name.value; 

    if(country_name != "" ){
      fetchUniversity (countryName);
    }
    else{
      cards.innerHTML = ` <div class="msg">
        <h1>Enter the value Plz..</h1>
      </div>`
    }
  }

})
 


function fetchUniversity(country){
    cards.innerHTML = `<div class="msg">
    <h1>Please wait.....</h1>
</div>`
 fetch(`http://universities.hipolabs.com/search?country=${country}`).then (response => response.json()).then(data =>{
    console.log(data);

    if(data.length != 0){
      cards.innerHTML = data.map(element =>{
          return `<div class="card">
                    <h1>${element.name}</h1>
  
                    <div class="flex">
                        <span>${element.country}</span>
                        <a href="${element.web_pages[0]}">University Link</a>
                      </div>
                  </div>`
      }).join(" ");
    }else{
        cards.innerHTML = `<div class="msg">
               <h1>Data Not Found</h1>
         </div>`
   }

 })
 

}
