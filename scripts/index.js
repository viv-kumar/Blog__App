import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import {getdata} from "../components/getData.js";
const finddata=async ()=>{
    let data = await getdata("http://localhost:3000/blog");
    append(data);
}
// getdata();
finddata();
function append(data){
  data.map((ele)=>{
      let td1=document.createElement("td");
      td1.innerText=ele.id;
      let td2=document.createElement("td");
      td2.innerText=ele.title;
      let td3=document.createElement("td");
      td3.innerText=ele.author;
      let td4=document.createElement("td");
      td4.innerHTML=`<button>View</button>`;
      td4.onclick=async ()=>{
           location.href='../pages/view.html';
           localStorage.setItem("id",ele.id);
      }
      let td5=document.createElement("td");
      td5.innerHTML = `<button>Edit</button>`;
      td5.onclick = async () => {
        location.href = "../pages/edit.html";
        localStorage.setItem("id", ele.id);
      };
      let td6 = document.createElement("td");
      td6.innerHTML = `<button>Delete</button>`;
      td6.onclick=async ()=>{
        await fetch(`http://localhost:3000/blog/${ele.id}`,{
            method:'DELETE'
        });
      }

      let tr=document.createElement("tr");
      tr.append(td1,td2,td3,td4,td5,td6);
      document.getElementById("body").append(tr);


  })
}