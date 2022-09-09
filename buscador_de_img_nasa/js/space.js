const constelacion_url =  `https://images-api.nasa.gov/search?q=` + localStorage.getItem("constelacion");

btnBuscar.addEventListener( "click" , function(){
    localStorage.setItem("constelacion", document.getElementById("inputBuscar").value);
    
    showList();
   
})



const fetchData = async (constelacion_url) =>{
    const response = await fetch(constelacion_url);
    const jsonData = await response.json();
    
    return jsonData;
}

const showList = async() => {
    let htmlContentToAppend = "";
    const jsonData = await fetchData(constelacion_url);
      const {
        collection: {items},
      } = jsonData;
      for (const item of items){
        const {
            data : [{title, description, date_created}],
            links: [{href}]
        } = item;
        //console.log(`${title} - ${href} - ${description} - ${date_created}` );
       /*  htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src=" ${href} " alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4> ${title} - ${date_created} </h4> 
                        <p> ${description} </p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ` */
        htmlContentToAppend += `
        <div class="card-group" >
            <div class="card">
                <div class="card mb-4 shadow-sm custom-card" style="width: 30rem; display: flex;">
                    <img class="card-img-top" src="${href}" alt="Card image cap" style=" objet-fit : cover ;">
                    <div class="card-body" >
                        <h5 class="card-title">  ${title} </h5>
                        <h7 style= "color : grey"> ${date_created} </h7>
                        <p class="card-text" style= "overflow: scroll; scroll-behavior: auto; ">${description} </p>
                    </div>
                </div>
            </div>          
        </div>
        `
        document.getElementById("contenedor").innerHTML = htmlContentToAppend; 
      }

     
}


