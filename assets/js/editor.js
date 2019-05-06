
$(document).ready(function(){
    var options = [];
    var getitem = localStorage.getItem("prod");
    prod = JSON.parse(getitem);

    var timeQ = localStorage.getItem("timeQ");
    var timeL1 = localStorage.getItem("timeL1");
    var timeL2 = localStorage.getItem("timeL2");
    var toAnimate = false;
    var c1Chosen = false;
    var c2Chosen = false;
    var c3Chosen = false;
    var clicked = false;
    var choice1 = $("#choice1");
    var choice2 = $("#choice2");
    var choice3 = $("#choice3");
    var replay = 0;
    var toAnimate = false;
    var clicked = false;
    var hide = 0;

    

    $("#vidsrc").attr("src",prod[0]);
    document.getElementById("video").load();

    $("#choice1").attr("src", prod[5]);
    $("#choice2").attr("src", prod[6]);
    $("#choice3").attr("src", prod[7]);

    $("#d0").attr("src",prod[0]);
    $("#d1").attr("src",prod[1]);
    $("#d2").attr("src",prod[2]);
    $("#d3").attr("src",prod[3]);
    $("#d4").attr("src",prod[4]);
    $("#d5").attr("src",prod[5]);
    $("#d6").attr("src",prod[6]);
    $("#d7").attr("src",prod[7]);

    $("#hideB").click(function(){
        if(hide ==0){
            $("#tohide").css("visibility","hidden");
            $(".card-info").removeClass("augment");
            $(".card-info").addClass("reduce");
            $("#hideB").text("arrow_drop_down");
            hide = 1;
        }
        else{
            $(".card-info").removeClass("reduce");
            $(".card-info").addClass("augment");
            $("#hideB").text("arrow_drop_up");
            setTimeout(() => {
                $("#tohide").css("visibility","visible");
            }, 300);
           
            hide = 0;
        }
        

    })
    // target elements with the "draggable" class
    interact('.draggable')
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
            'moved a distance of '
            + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                .toFixed(2) + 'px');
        }
    });

    function dragMoveListener (event) {
        var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }


    function changeForm(x,y){
        $(".sBtn").css("width",x);
        $(".sBtn").css("height",y);
    }
        
    function exported(filename, elId, mimeType) {
        var elHtml = document.getElementById(elId).innerHTML;
        var link = document.createElement('a');
        mimeType = mimeType || 'text/plain';
    
        link.setAttribute('download', filename);
        link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
        link.click(); 
    }
    
    var fileName =  'video.html'; // You can use the .txt extension if you want

    $("#apply").click(function(){
        console.log("CLICKED!");
        var valQ = $("#qid").val();
        var valL1 = $("#lid").val();
        var valL2 = $("#lid2").val();

        localStorage.setItem("timeQ", valQ);
        localStorage.setItem("timeL1", valL1);
        localStorage.setItem("timeL2", valL2);
        console.log("Submitted");

        $("#qVal").text(valQ);
        $("#lVal1").text(valL1);
        $("#lVal2").text(valL2);
    })

    $("#change").click(function(){
        var width = $("#width").val();
        var height = $("#height").val();
        changeForm(width,height);
        $("#cVal").text(width +"x"+height)
    })

    $("#export").click(function(){
        // console.log("CLICKED");
        // video.currentTime = 0;
        // $(".sBtn").removeClass("draggable");
        // // $(".sBtn").addClass("qbox");
        // $(".card-info").remove();
        // $(".card-edit-final").remove();
        // $(".card-export").remove();
        // $(".card-edit-shape").remove();
        // video.removeAttribute("controls");
        // video.load();   
        // $(".sBtn").css("visibility","hidden");
        // exported(fileName, 'body','text/html');
        // setInterval(() => {
        //     startVideo();
                
        // }, 1000);

        var val1x = $("#choice1").data("x");
        var val1y = $("#choice1").data("y");
        
        var val2x = $("#choice2").data("x");
        var val2y = $("#choice2").data("y");

        var val3x = $("#choice3").data("x");
        var val3y = $("#choice3").data("y");

        console.log("The button 1's coordinates are "+ val1x + " " + val1y);
        console.log("The button 2's coordinates are "+ val2x + " " + val2y);
        console.log("The button 3's coordinates are "+ val3x + " " + val3y);

        localStorage.setItem("val1x", val1x);
        localStorage.setItem("val1y", val1y);
        localStorage.setItem("val2x", val2x);
        localStorage.setItem("val2y", val2y);
        localStorage.setItem("val3x", val3x);
        localStorage.setItem("val3y", val3y);

        window.location.href = "final.html";
    })


    function startVideo(){
        //This makes the 3 buttons appear at the time the user has set at "Question At"
        if(video.currentTime >= timeQ){
            setTimeout(() => {choice1.css("visibility","visible")}, 100);
            setTimeout(() => {choice2.css("visibility","visible")}, 200);
            setTimeout(() => {choice3.css("visibility","visible")}, 300);
            setTimeout(() => {$(".qbox").removeClass("lightSpeedIn")}, 700);
            toAnimate = false;
        }
        console.log(toAnimate);
        
        //if any button is clicked, this var is set the true and hides the button for the video to be watched without distraction
        if(clicked == true){
            $(".qbox").css("visibility","hidden");
                
        }
            
        console.log(video.currentTime);

        //once the video reaches the selected timeq, set choices to visible
        if (video.currentTime >= timeQ){
            $(".qbox").css("visibility","visible");
        }
        if(video.currentTime >= 108 && video.currentTime<=109){
            toAnimate = true;
        }
        
        //once the buttons are clicked, their opacity reduces to show the user that these choices have a;ready been made
        if(c1Chosen == true){
            $("#choice1").css("opacity","0.62");
            // video.load();
        }
        if(c2Chosen == true){
            $("#choice2").css("opacity","0.62");
            // video.load();
        }
        if(c3Chosen == true){
            $("#choice3").css("opacity","0.62");
            // video.load();
        }
        replayC1();
        replayC2();
        replayC3();
        replayGeneral();
        replayFinal();

        //this button appears after the right choice had been made and this function resets everything to initial
        $("#menu").click(function(){
            toAnimate = true;
            $("#menu").css("visibility","hidden");
            $("#video").attr("src",prod[0]);
            video.currentTime=timeQ;
            clicked = true;
            replay = 0;
            c1Chosen = true;
    
        })

        
        //attr each clicked button with the corresponding video
        $(choice1).click(function(){
        
            $("#video").attr("src",prod[1]);
            clicked = true;
            replay = 1;
            c1Chosen = true;
            // video.play();
            
    
        })
        
        $(choice2).click(function(){
            $("#video").attr("src",prod[2]);
            clicked = true;
            c2Chosen = true;
            replay = 2;
            // video.play();
        })
        $(choice3).click(function(){
            $("#video").attr("src",prod[3]);
            clicked = true;
            c3Chosen = true;
            replay = 3;
            // video.play();
        })
    }
    //these functions are checked every second and replay the main video each time unless the right choice has been made
    function replayC1(){
        if(replay==1 && video.ended){
            // toAnimate = true;
            $("#video").attr("src",prod[0]);
            video.currentTime=timeQ;
            replay = 0;
            video.load();
        }
        
    }

    function replayC2(){
        if(replay==2 && video.ended){
            // toAnimate = true;
            $("#video").attr("src",prod[0]);
            video.currentTime=timeQ;
            replay = 0;
            video.load();
        }
    }
    function replayC3(){
        if(replay==3 && video.ended){
            $("#video").attr("src",prod[4]);
            $(".qbox").css("visibility","visible");
            replay = 4;
           
        }
    }
    function replayGeneral(){
        if(replay==0 && video.ended){
            setTimeout(() => {
                replay = 0;
                video.currentTime=timeQ;
            }, 100);
        }
    }
   
    function replayFinal(){
        if(replay == 4 && video.currentTime >30){
            video.pause();
            $("#menu").css("visibility","visible");  
        }
    }
})

//----------------------------------------------------Customising video






