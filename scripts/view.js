import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import { getdata } from "../components/getData.js";
const id=localStorage.getItem('id');
const blog=async (id)=>{
    let res = await getdata(`http://localhost:3000/blog/${id}`);
    // console.log(res);
    let title=document.createElement("h2");
    title.innerText=`Title:${res.title}`;
    let body=document.createElement("p");
    body.innerText=res.body;
    let author=document.createElement("p");
    author.innerHTML=`<em>${res.author}</em>`;
    document.getElementById("blogContainer").append(title,body,author);
}
blog(id);