const randomNumber = () =>{
    num = document.getElementById("num").value;
    res = document.getElementById("result");
    res.innerHTML = Math.ceil(Math.random()*num);
}