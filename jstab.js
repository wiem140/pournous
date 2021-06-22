/*let like= Array.from(document.getElementsByClassName('fa-heart')) ;
for ( let heart of like){
    heart.addEventListener("click", function(){
        if (heart.style.color==="red")
        {heart.style.color="black"}
        else
        {heart.style.color="red"}
    })
}*/


var inc= Array.from(document.getElementsByClassName('plus-btn'));
var inp= Array.from(document.getElementsByTagName('input'));
for ( let i in inc){
    inc[i].addEventListener("click",function(){

        inp[i].value++;
        sum ()
    })
}
var dec= Array.from(document.getElementsByClassName('minus-btn'));
for ( let el of dec){
    el.addEventListener("click",function(){
    let t= ( el.nextElementSibling).value;
    let s= parseInt(t,10);
    if (s>0){
        s--;
    }
       (el.nextElementSibling).value=s;
       sum ()
    });
}
    var del=Array.from(document.getElementsByClassName('delete-btn'));
    for ( let el of del){
        el.addEventListener("click", function(){
            var r= confirm("are ou sure to delete this iteam?");
            if(r== true){
                const parent = el.closest(".item")
                while ( parent.firstChild){
                    parent.firstChild.remove()

                }
                sum()
            }
        });
    }
   
    function sum () {
        let qte= Array.from(document.getElementsByClassName("qte"));
        let prices= Array.from(document.getElementsByClassName("price"));
        let total = 0;
        for ( let i=0; i< prices.length-1;i++){
            total+=parseInt(qte[i].value)* parseFloat(prices[i].innerHTML)}
    
        return ( document.getElementsById("prix").innerHTML = "TOTAL: $"+ total);
    
    } 