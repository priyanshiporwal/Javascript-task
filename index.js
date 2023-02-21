const fetchData=async()=>{
   const api=await fetch("https://jsonplaceholder.typicode.com/posts");
   const res=await api.json();
   return res;
}

fetchData().then((data)=>{
  console.log(Object.keys(data[0]));
  let keys=Object.keys(data[0]);
  let col=keys.length;
  let table=document.createElement("table");
  let row=table.insertRow(-1);
  for(let i=0;i<col;i++){
    var head=document.createElement("th");
    head.innerHTML=keys[i];
    row.appendChild(head);
  }
  for(let i=0;i<data.length;i++){
    row=table.insertRow(-1);
    var values=Object.values(data[i]);
    for(let j=0;j<values.length;j++){
      let cell=row.insertCell(-1);
      //console.log(cell);
      cell.innerHTML=values[j];
    }

  }
  let divTable=document.getElementById("table-div");
  divTable.appendChild(table);
});

   