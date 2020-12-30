function para1 (){
    var inputs = [];

    for (var i = 1; i <= 6; i++)        
          {
              inputs.push(document.getElementById("para1_" + i).value);
          }
    inputs.join(" ");

    document.getElementById("show_para1").innerHTML = inputs.join(" ");
}





function para2 (){
    var inputs = [];

    for (var x = 7; x <= 12; x++)        
          {
              inputs.push(document.getElementById("para1_" + x).value);
          }
    inputs.join(" ");

    document.getElementById("show_para2").innerHTML = inputs.join(" ");
}