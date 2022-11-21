import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.getElementById("publish").addEventListener("click", async ()=>{
    event.preventDefault();
    let blogData={
        title:document.getElementById("title").value ,
        body:document.getElementById("body").value ,
        author:document.getElementById("author").value 

    }
    console.log(blogData);
    let res = await fetch(`http://localhost:3000/blog` ,{
        method:"POST",
        body:JSON.stringify(blogData),
        headers:{
            "Content-type":"application/json",
        },
    });
    location.href='../index.html';
})