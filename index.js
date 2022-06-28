var level=1;
var generated = [];
var inputted = [];
var j=1;
var mark=0;
do{
    var randomN = Math.floor(Math.random()*4 + 1);
    generated.push(randomN);
    if(j==1){
        giveInitialBeep(level, randomN);
    }else{
        giveBeep(level, randomN);
    }
    
    
    var mark=0;
    for(var i=0;i<generated.length;i++){
        
        
$("button").click(function() {
    var classs=this; 
    theClass = this.className;  // "this" is the element clicked
    
    $(classs).addClass("change2");
        setTimeout(function(){
            $(classs).removeClass("change2");
        },100);
        if(theClass == "b1"){
            inputted.push(1);
        }else if(theClass == "b2"){
            inputted.push(2);
        }else if(theClass == "b3"){
            inputted.push(3);
        }else{
            inputted.push(4);
        }
        
});


        if(inputted[i]!==generated[i]){
            mark++; generated = []; break;
        }
    }
    level++;
    j++;

}while(mark==0);

function giveInitialBeep(level, randomN){
    $(document).keypress(function(event){
        
        if(event.key == 'a'){
            $("h1").text("Level "+level);
            $(".b"+randomN).addClass("change1");
            setTimeout(function(){
                $(".b"+randomN).removeClass("change1");
            },150);
        }
    });
}

function giveBeep(level, randomN){
            $("h1").text("Level "+level);
            $(".b"+randomN).addClass("change1");
            setTimeout(function(){
                $(".b"+randomN).removeClass("change1");
            },150);
}







