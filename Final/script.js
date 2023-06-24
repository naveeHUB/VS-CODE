var a=1;
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
 const url= await fetch("https://emojihub.yurace.pro/api/all/category/travel-and-places")
 const jsons= await url.json()
 const rendar= document.getElementById("outLineBox")
 jsons.forEach(element => {
    const newnode=document.createElement("div")
    newnode.setAttribute("class","Emoji")
    newnode.innerHTML=`<h2>${element.htmlCode}</h>`
    temp.push(newnode)
 });rendar.append(... temp)
}
