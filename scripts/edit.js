import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
import { getdata } from "../components/getData.js";
const id=localStorage.getItem("id");
const blog=async (id) =>{
    let res = await getdata(`http://localhost:3000/blog/${id}`);
    document.getElementById("title").value=res.title;
     document.getElementById("body").value = res.body;
      document.getElementById("author").value = res.author;
      document.getElementById("publish").addEventListener("click",async()=>{
        event.preventDefault();
        let updatedBlogData = {
          title: document.getElementById("title").value,
          body: document.getElementById("body").value,
          author: document.getElementById("author").value,
        };
          await fetch(`http://localhost:3000/blog/${id}`, {
           method: "PATCH",
           body: JSON.stringify(updatedBlogData),
           headers: {
             "Content-type": "application/json",
           },
         });
         location.href = "../index.html";
      })

}
blog(id);
