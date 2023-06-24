var a;
function show_hidden(){
 if(a==1){
   document.getElementById("newarea").style.display="inline";
   return a=0
 }
else{
 document.getElementById("newarea").style.display="none";
   return a=1
}
}
 
 async function showemoji(){
    let temp=[]
 const url= await fetch("https://api.disneyapi.dev/character?page=1&pageSize=50");
 const jsons= await url.json();
 const rendar= document.getElementById("outLineBox")
 jsons.data.forEach(element => { 
    console.log(element)
    const newnode=document.createElement("div")
    newnode.setAttribute("class","Disneychr")
    newnode.innerHTML=`
    <div class="card mb-3" style="width: 18rem;">
    <img src="${element.imageUrl}" class="card-img-top" alt="${element.name}">
    <div class="card-body" >
    <p><b>${element.name}</b></p>
    </div>
  </div>`
    temp.push(newnode)
 });rendar.append(... temp)
}

