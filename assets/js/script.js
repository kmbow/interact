$(document).ready(function(){
    var clicked = false;
    var replay = 0;
    var glueChosen = false;
    var starchChosen = false;
    var glitterChosen = false;
    var question = $('<img class="animated lightSpeedIn" id="question" src="assets/slimequestion.png" alt="">')
    var glue = $('<img class="qbox qboxAnim animated lightSpeedIn" id="glue" src="assets/glue.png" alt="">');
    var glitter = $(' <img id="glitter" class="qbox qboxAnim animated lightSpeedIn" src="assets/glitter.png" alt="">');
    var starch = '<img id="starch" class="qbox qboxAnim animated lightSpeedIn" src="assets/liquid starch.png" alt="">'
    var toAnimate = false;
    

   
    $("body").click(function(){
        $("#start").css("visibility","hidden");
        video.play();
        
    })
    function setCurTime() { 
        video.currentTime=110;
    } 
    $("#get").click(function(){
        setCurTime();
        console.log(video.currentTime);
    })
    setInterval(() => {
        if(replay ==4){
            $("#question").remove();
        }
        if(toAnimate == true){
            $("body").append(question);
            setTimeout(() => {$("body").append(starch);}, 100);
            setTimeout(() => {$("body").append(glitter);}, 200);
            setTimeout(() => {$("body").append(glue);}, 300);
            setTimeout(() => {$(".qbox").removeClass("lightSpeedIn")}, 700);
            toAnimate = false;
        }
        console.log(toAnimate);
        if(clicked == true){
            $(".qbox").css("visibility","hidden");
            
        }
        
        console.log(video.currentTime);
        if (video.currentTime >= 109){
           $(".qbox").css("visibility","visible");
        }
        if(video.currentTime >= 108 && video.currentTime<=109){
            toAnimate = true;
        }
        if(glitterChosen == true){
            $("#glitter").css("opacity","0.62");
        }
        if(glueChosen == true){
            $("#glue").css("opacity","0.62");
        }
        if(starchChosen == true){
            $("#starch").css("opacity","0.62");
        }
        replayGlitter();
        replayGlue();
        replayGeneral();
        replayStarch();
        replayFinal();
        
    }, 1000);

    $("#play").click(function(){
        video.play();
    })

    $(document).on("click","#starch",function(){
        
        $("#video").attr("src","Interactive/Slimey Situation (Liquid Starch).mp4");
        clicked = true;
        replay = 1;
        starchChosen = true;
        

    })
    $("#menu").click(function(){
        toAnimate = true;
        $("#menu").css("visibility","hidden");
        $("#video").attr("src","Interactive/Slimey Situation (Part 1).mp4");
        video.currentTime=110;
        clicked = true;
        replay = 0;
        starchChosen = true;

    })
    $(document).on("click","#glue",function(){
        $("#video").attr("src","Interactive/Slimey Situation (Glue).mp4");
        clicked = true;
        glueChosen = true;
        replay = 3;
        
    })
    $(document).on("click","#glitter",function(){
        $("#video").attr("src","Interactive/Slimey Situation (Glitter).mp4");
        clicked = true;
        glitterChosen = true;
        replay = 2;
    })
    function replayGlitter(){
        if(replay==2 && video.currentTime>6){
            $(".qbox").css("visibility","visible");
            $("#video").attr("src","Interactive/Slimey Situation (Part 1).mp4");
            setTimeout(() => {
                replay = 0;
                video.currentTime = 110;
            }, 100);
           
        }
    }
    function replayGlue(){
        if(replay==3 && video.currentTime>13){
            $("#video").attr("src","Interactive/Slimey Situation (Part 1).mp4");
            $(".qbox").css("visibility","visible");
            setTimeout(() => {
                replay = 0;
                video.currentTime = 110;
            }, 100);
           
        }
    }
    function replayGeneral(){
        if(replay==0 && video.currentTime>121){
            setTimeout(() => {
                replay = 0;
                video.currentTime = 110;
            }, 100);
        }
    }
    function replayStarch(){
        if(replay==1 && video.currentTime >31){
            // toAnimate = true;
            $("#video").attr("src","Interactive/Slimey Situation (Educational).mp4");
            replay = 4;
           
        }
        
    }
    function replayFinal(){
        if(replay == 4 && video.currentTime >30){
            video.pause();
            $("#menu").css("visibility","visible");  
        }
    }
   
})
  

