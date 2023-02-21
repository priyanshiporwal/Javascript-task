const fetchData=async()=>{
   const api=await fetch("https://jsonplaceholder.typicode.com/posts");
   const res=await api.json();
   return res;
}
fetchData().then((data)=>{
    console.log(data);
    let tableData="";
    data.map((item)=>{
      tableData+=`<tr>
        <td>${item.userId}</td>
        <td>${item.id}</td>
        <td>${item.title}</td>
        <td>${item.body}</td>
      </tr>`
    })
    document.getElementById("table-body").innerHTML=tableData;
});
