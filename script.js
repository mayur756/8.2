function loop1(){
    let n = parseInt(document.getElementById('num').value);
    let msg = "";

    let i;
    for(i=1;i<=n;i++){
        msg +=i;
        msg+="<br>"
    }
    document.getElementById('inp').innerHTML = msg;
}