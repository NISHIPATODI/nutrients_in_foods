window.addEventListener('load',()=>{
  
    let calorie= document.querySelector("#calorie");
    //let energy= document.querySelector("#energy");
    
   
    const pp= document.querySelector("#pp")
   const pq= document.querySelector("#pq")
   const recipe= document.querySelector("#recipe")
  
   //const = document.querySelector("#")
   
   
     

  
  ///food reciepe api
  /*const searchbox = document.querySelector('#search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(e) {
      if (e.keyCode == 13) {
       const name= searchbox.value
        const product=`one normal ${name}`;

          getResults(product);
           console.log(searchbox.value);
      }
  }*/
  
 /* function getResults(query) 
  {
    //  fetch(`https://api.edamam.com/search?q=${query}&app_id=e2a2f7c1&app_key=544886289c16cc75d8b6144fbb7843b6&from=0&to=3&calories=591-722&health=vegan`)
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=d25cbe00&app_key=0a2232fdb00ddc96ac4bb7fe90a439e8&ingr=${query}`)
    .then(reciepe => {
              return reciepe.json();
          }).then(data=>{
                      console.log(data);
                  
            });
            
        } */
          
  




        const searchbox = document.querySelector('#search-box');
        searchbox.addEventListener('keypress', setQuery);
        
        function setQuery(e) {
            if (e.keyCode == 13) {
             const name= searchbox.value
              const product=`one normal ${name}`;
      
                getResults(product);
                 console.log(searchbox.value);
            }
        }
        


   // analysis food api
  // const name="noodles";
   //const product=`one normal ${name}`;

   function getResults(query) 
   {
   

  const api=`https://api.edamam.com/api/nutrition-data?app_id=d25cbe00&app_key=0a2232fdb00ddc96ac4bb7fe90a439e8&ingr=${query}`;
 

   fetch(api)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);

    // to fetch CALORIES from json
const calories = data.calories;
calorie.textContent= calories;

console.log(`current calories is ${calories}`);

 // to fetch energy from json
// const energies = data.totalNutrients.ENERC_KCAL.quantity;
 //energy.textContent= energies;

//console.log(`current calories is ${calories}`);


//pp.textContent= calories;

//to fetch description
//const {quantity} = data.totalDaily.CA;

if(data.totalDaily.PROCNT!==undefined){

const pcent = data.totalDaily.PROCNT.quantity;
const punit = data.totalNutrients.PROCNT.unit;
const pqty = data.totalNutrients.PROCNT.quantity;

pp.textContent= pcent;
pq.textContent= pqty+punit;


//console.log(`calcium is ${label} qty is ${quantity}`);
console.log(`% is d ${pcent}`);
console.log(`qty is d ${pqty}`);
}
else{
    pp.textContent= 0;
pq.textContent= 0;

}
// to fetch fiber
if(data.totalDaily.FIBTG===undefined){
    const vcent = 0
    const vunit = 0
    const vqty = 0
    vp.textContent= vcent;
    vq.textContent= vqty+vunit;
     
}
else{
const vcent = data.totalDaily.FIBTG.quantity;
const vunit = data.totalNutrients.FIBTG.unit;
const vqty = data.totalNutrients.FIBTG.quantity;

vp.textContent= vcent;
vq.textContent= vqty+vunit;
}

//console.log(`calcium is ${label} qty is ${quantity}`);
//console.log(`% is d ${vcent}`);
//console.log(`qty is d ${vqty}`);


// to fetch fats
if(data.totalDaily.FAT!==undefined){

const Fcent = data.totalDaily.FAT.quantity;
const Funit = data.totalNutrients.FAT.unit;
const Fqty = data.totalNutrients.FAT.quantity;

Fp.textContent= Fcent;
Fq.textContent= Fqty+Funit;

console.log(`% is F ${Fcent}`);
console.log(`qty is F ${Fqty}`);
}
else{
    Fp.textContent= 0;
Fq.textContent= 0;

}
// to fetch Calcium
if(data.totalDaily.CA!==undefined){

const Ccent = data.totalDaily.CA.quantity;
const Cunit = data.totalNutrients.CA.unit;
const Cqty = data.totalNutrients.CA.quantity;

cp.textContent= Ccent;
cq.textContent= Cqty+Cunit;

console.log(`% is F ${Ccent}`);
console.log(`qty is F ${Cqty}`);
}
else{
    cp.textContent= 0;
cq.textContent= 0;

}

// to fetch Cholestrol
if(data.totalDaily.CHOLE!==undefined){
const Cacent = data.totalDaily.CHOLE.quantity;
const Caunit = data.totalNutrients.CHOLE.unit;
const Caqty = data.totalNutrients.CHOLE.quantity;

cap.textContent= Cacent;
caq.textContent= Caqty+Caunit;

console.log(`% is F ${Cacent}`);
console.log(`qty is F ${Caqty}`);
}
else{
    cap.textContent= 0;
caq.textContent= 0;


}

const rname= searchbox.value
             

fetch(`https://api.edamam.com/search?q=${rname}&app_id=e2a2f7c1&app_key=544886289c16cc75d8b6144fbb7843b6&from=0&to=3&calories=591-722&health=vegan`)  
  .then(reciepe => {
              return reciepe.json();
          }).then(data=>{
                      console.log(data);

                     const uri = data.hits[1].recipe.uri;
                     console.log(uri);

                  /*   var url = new URL(uri); 
            //up.innerHTML = url; 
            var down = document.getElementById('recipe'); 
            console.log(down);
            down.innerHTML = " <a href="url"></a> "; 
            
           /* function GFG_Fun() { 
                url.searchParams.set('param_1', 'val_1'); 
                down.innerHTML = url; 
            }*/ 
                    
            });
            
  


})

}  
});














/*f.addEventListener('click',()=>{
    if(temperatureSpan.textContent==="C"){
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
    else{
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
})






<div>
   
    <input type="text" autocomplete="off" class="search-box" placeholder="Search for a reciepe..." />
     </div>  
    




*/
