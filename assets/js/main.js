
$(document).ready(function(){
    class Post{
        constructor(name,source,type){
            this.name = name;
            this.source = source;
            this.type = type
        }
    }
    var app = new Vue ({
        el: "#toAppend",
        data: {
            postList: []
        }
    });



    var prod = [];
    var count = 1;
    var videos = [];
    var container = "";

    var folder = document.getElementById("file");
    folder.onchange=function(){
        var files = folder.files,
            len = files.length,
            i;
        for(i=0;i<len;i+=1){
            console.log(files[i]);
            videos.push(files[i]);
            // console.log(videos)
        }

        for(var x of files){
            let post = new Post(
                x.name,
                x.webkitRelativePath,
                x.type

            )
            app.postList.push(post)
        }
    }
    $("#test").click(function(){
        $("#vidsrc").attr("src",prod[1]);
        console.log(prod[1])
        console.log(prod)
    })
    

    $("#nextB").click(function(){
        count++;
        checkCount();
        // console.log(videos);
        // console.log(videos[0].name)
    });


    function checkCount(){
        var video = $("#video");

        if(count == 2){
            var card = $("<div class='card'>");
            var cardBody = $("<div class='card-body'>");
            var close = $("</div>");

            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt1").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Main Clip");
            $(".holdText").text("Select The Main Clip");
            
            $('#sFolder').removeClass('active');
            $('#sFile').addClass('active');
            $("#dynamicPad").css("padding-bottom","5%");
              
            
            
        }

        else if(count == 3){
            prod.push(container);
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt2").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("First Choice Clip");
            $(".holdText").text("Select The First Choice Clip");
            $(".card-options").removeClass("selected");
            console.log(prod)
        }

        else if(count == 4){
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt3").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Second Choice Clip");
            $(".holdText").text("Select The Second Choice Clip");
            $(".card-options").removeClass("selected");

            prod.push(container);
            console.log(prod);
        }

        else if(count == 5){
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt4").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Third Choice Clip");
            $(".holdText").text("Select The Third Choice Clip (Right Choice)");
            $(".card-options").removeClass("selected");

            prod.push(container);
            console.log(prod);
        }

        else if(count == 6){
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt5").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Final Clip");
            $(".holdText").text("Select The Final Clip ");
            $(".card-options").removeClass("selected");

            prod.push(container);
            console.log(prod);
        }

        else if(count == 7){
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt6").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Button 1");
            $(".holdText").text("Select The First Choice Button ");
            $(".card-options").removeClass("selected");

            prod.push(container);
            console.log(prod);
        }

        else if(count == 8){
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt7").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Final Clip");
            $(".holdText").text("Select The Second Choice Button ");
            $(".card-options").removeClass("selected");

            prod.push(container);
            console.log(prod);
        }

        else if(count == 9){
            $(".nStep").removeClass("activeStep");
            setTimeout(() => {
                $("#pt8").addClass("activeStep");
            }, 200);
            $(".holdTitle").text("Final Clip");
            $(".holdText").text("Select The Third Choice Button (Right Choice)");
            $(".card-options").removeClass("selected");

            prod.push(container);
            console.log(prod);
        }

        else{
            prod.push(container);
            console.log(prod);
            alert("All assets uploaded!");
            localStorage.setItem("prod", JSON.stringify(prod));
            setTimeout(() => {
                window.location.href = "editor.html";
            }, 1000);
            
        }

    }
    
    $(document).on("click",".card-options", function(){
        var x = $(this).val();
        console.log(x);
        $(".card-options").removeClass("selected");
        $(this).addClass("selected");
        container = x;
    })
    
    $("#pt1").click(function(){
        count = 2;
        checkCount();
        console.log("clicked")
    })
    $("#pt2").click(function(){
        count = 3;
        checkCount();
        console.log("clicked")
    })
    $("#pt3").click(function(){
        count = 4;
        checkCount();
        console.log("clicked")
    })
    $("#pt4").click(function(){
        count = 5;
        checkCount();
        console.log("clicked")
    })
    $("#pt5").click(function(){
        count = 6;
        checkCount();
        console.log("clicked")
    })
})