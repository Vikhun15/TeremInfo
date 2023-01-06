$("#mapframe").on("load" ,function(){
    console.log($("#map2").attr())
    $("#fel").bind("click", function(){
        if($("#szint").attr("value") === "sat"){
            $("#map2").hide()
        }
    })
})

function resizeIframe(that){
    that.style.height=(that.contentWindow.document.body.scrollHeight+20)+'px';
}

function galChange(that){
    $(".galdiv", parent.document).addClass("galhid")
    var found = false;
    $(".galdiv", parent.document).each(function(){
        if($(this).attr("id").split("_")[1] == that.attr("id")){
            $(this).removeClass("galhid")
            found = true;
        }
    })
    if(!found){
        $("#alap", parent.document).removeClass("galhid")
    }
}

function iframeLoaded(){
    $("#le", parent.document).bind("click", function(){
        if($("#szint", parent.document).attr("value") === "sat"){
            $("#map2").hide()
            $("#epuletek").css("display", "")
            $("#szint", parent.document).attr("value", "div")
            $("#szint", parent.document).text("Épületek")

        }
    })
    $("#fel", parent.document).bind("click", function(){
        if($("#szint", parent.document).attr("value") === "div"){
            $("#map2").css("display", "")
            $("#epuletek").hide()
            $("#szint", parent.document).attr("value", "sat")
            $("#szint", parent.document).text("Szatellit")
        }
    })


    //A szatellit térkép egér utasításai


    $("#map2")
    .hover( function(){
        $("#kiemelt", parent.document).text($(this).attr("alt"))
        $(this).attr("src", "map/sat/egressy_map_hover.png")
        $(this).css("left", "9px")
        $(this).css("top", "8px")
    }, function(){
        if(!$(this).hasClass("selectedmap")){
            $(this).attr("src", "map/sat/egressy_map.png")
            $(this).css("left", "9px")
            $(this).css("top", "8px")
        }
        else{
            $(this).attr("src", "map/sat/egressy_map_click.png")
        }
    })
    .click(function(){
        galChange($(this))
        if(!$(this).hasClass("selectedmap")){
            $(".selected").removeClass("selected")
            $(".selectedmap").removeClass("selectedmap")
            $(this).attr("src", "map/sat/egressy_map_click.png")
            $(this).addClass("selectedmap")
            $("#kivalasztott", parent.document).text($(this).attr("alt"))
        }
        else{
            $(this).removeClass("selectedmap")
            $(this).attr("src", "map/sat/egressy_map.png")
            $(this).css("left", "9px")
            $(this).css("top", "8px")
            $("#kivalasztott", parent.document).text("")
        }
    })
    $(".epu")
    .hover( function(){
        $("#kiemelt", parent.document).text($(this).attr("alt"))
    })
    .click(function(){
        if($("#map2").hasClass("selectedmap")){
            $("#map2").removeClass("selectedmap")
            $("#map2").attr("src", "map/sat/egressy_map.png")
            $("#map2").css("left", "9px")
            $("#map2").css("top", "8px")
        }
        if(!$(this).hasClass("selected")){
            galChange($(this))
            $(".selected").removeClass("selected")
            $(this).addClass("selected")
            $("#kivalasztott", parent.document).text($(this).attr("alt"))
        }
        else{
            galChange($("#map2"))
            $(".selected").removeClass("selected")
            $("#kivalasztott", parent.document).text("")
        }
    })
    $("#map1")
    .hover( function(){
        $("#kiemelt", parent.document).text("Az iskola")
    })
    .click(function(){
        galChange($(this))
        $(".selected").removeClass("selected")
        $(".selectedmap").removeClass("selectedmap")
        $("#kivalasztott", parent.document).text("")
    })

}


function pageLoaded(){

    var pos = $(".kep").eq(0).position()["left"] - 210
    $("#galjobb").bind("click", function(){
        if($(".kep").last().position()["left"] - 350 > 1000){
            $(".kep").animate({left: "-=250"}, 500)
        }
        else{
            $(".kep").animate({left: pos - 500}, 500)
        }
    })
    $("#galbal").bind("click", function(){
        if($(".kep").eq(0).position()["left"] + 100 < 90){
            $(".kep").animate({left: "+=250"}, 500)
        }
        else{
            $(".kep").animate({left: pos}, 500)
        }
    })

    $(".kep").bind("click", function(){
        $("#nKep").remove()
        var src = $(this).css("background-image")
        src = src.replace('url(','').replace(')','').replace(/\"/gi, "");
        var elem = $("<img id=nKep>")
        elem.attr("src", src)
        elem.addClass("kep2")
        elem.css("opacity", "1")
        $("body").append(elem)
        $(".kep2").bind("click", function(){
            $("#nKep").remove()
        })
    })
}