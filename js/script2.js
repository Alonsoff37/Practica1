function cic(n = 0) {
    var x = document.getElementById("ciclo1");
    if (n==0){
        var y = "Este texto es generado con un ciclo for/while en JS, se puede sobreescribir en el HTML:"
        for (let i=0; i < y.length; i++){
            x.innerHTML+=y[i];
        }
    } else {
        x.innerHTML="";
        var y = document.getElementById("cik").value;
        let i = 0;
        while (i < y.length){
            x.innerHTML+=y[i];
            i++;
        }
    }
}
