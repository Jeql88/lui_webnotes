function computeVal(){
    var add = parseFloat(document.getElementById("num1").value) + (parseFloat(document.getElementById("num1").value) * parseFloat(document.getElementById("quality").value))
    document.getElementById("value").innerHTML = (add /parseFloat(document.getElementById("people").value)).toFixed(2)

}