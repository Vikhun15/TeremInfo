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
    $(".kep", parent.document).animate({left: "0"}, 500)
    if(($(".kep", parent.document).length - $(".galhid", parent.document).children(".kep").length) <= 4){
        $(".handle", parent.document).hide();
    }
    else{
        $(".handle", parent.document).css("display", "")
    }
}

function iframeLoaded(){
    var isktxt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet tincidunt tortor, quis dignissim lacus imperdiet eu. Praesent mollis aliquet justo non elementum. Morbi dignissim orci eget ullamcorper pretium. Etiam in massa laoreet, iaculis leo sit amet, blandit leo. Maecenas vitae leo in elit ullamcorper pharetra ac eget ligula."
    $("#le", parent.document).bind("click", function(){
        if($("#szint", parent.document).attr("value") === "sat"){
            $("#map2").hide()
            $("#epuletek").css("display", "")
            $("#szint", parent.document).attr("value", "div")
            $("#szint", parent.document).text("Épületek")

        }
        else if($("#szint", parent.document).attr("value") === "div"){
            $("#epuletek").hide()
            $("#em3").css("display", "")
            $("#szint", parent.document).attr("value", "em3")
            $("#szint", parent.document).text("3. emelet")
        }
        else if($("#szint", parent.document).attr("value") === "em3"){
            $("#em3").hide()
            $("#em2").css("display", "")
            $("#szint", parent.document).attr("value", "em2")
            $("#szint", parent.document).text("2. emelet")
        }
        else if($("#szint", parent.document).attr("value") === "em2"){
            $("#em2").hide()
            $("#em1").css("display", "")
            $("#szint", parent.document).attr("value", "em1")
            $("#szint", parent.document).text("1. emelet")
        }
        else if($("#szint", parent.document).attr("value") === "em1"){
            $("#em1").hide()
            $("#fsz").css("display", "")
            $("#szint", parent.document).attr("value", "fsz")
            $("#szint", parent.document).text("Földszint")
        }
        else if($("#szint", parent.document).attr("value") === "fsz"){
            $("#fsz").hide()
            $("#alag").css("display", "")
            $("#szint", parent.document).attr("value", "alag")
            $("#szint", parent.document).text("Alagsor")
        }
    })
    $("#fel", parent.document).bind("click", function(){
        if($("#szint", parent.document).attr("value") === "div"){
            $("#map2").css("display", "")
            $("#epuletek").hide()
            $("#szint", parent.document).attr("value", "sat")
            $("#szint", parent.document).text("Szatellit")
        }
        else if($("#szint", parent.document).attr("value") === "em3"){
            $("#epuletek").css("display", "")
            $("#em3").hide()
            $("#szint", parent.document).attr("value", "div")
            $("#szint", parent.document).text("Épületek")
        }
        else if($("#szint", parent.document).attr("value") === "em2"){
            $("#em3").css("display", "")
            $("#em2").hide()
            $("#szint", parent.document).attr("value", "em3")
            $("#szint", parent.document).text("3. emelet")
        }
        else if($("#szint", parent.document).attr("value") === "em1"){
            $("#em2").css("display", "")
            $("#em1").hide()
            $("#szint", parent.document).attr("value", "em2")
            $("#szint", parent.document).text("2. emelet")
        }
        else if($("#szint", parent.document).attr("value") === "fsz"){
            $("#em1").css("display", "")
            $("#fsz").hide()
            $("#szint", parent.document).attr("value", "em1")
            $("#szint", parent.document).text("1. emelet")
        }
        else if($("#szint", parent.document).attr("value") === "alag"){
            $("#fsz").css("display", "")
            $("#alag").hide()
            $("#szint", parent.document).attr("value", "fsz")
            $("#szint", parent.document).text("Földszint")
        }
    })


    //A szatellit térkép egér utasításai


    $("#map2")
    .hover( function(){
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
            $("#kivalasztott", parent.document).css("opacity", "1")
            $("#info", parent.document).text(isktxt)
            
        }
        else{
            $(this).removeClass("selectedmap")
            $(this).attr("src", "map/sat/egressy_map.png")
            $(this).css("left", "9px")
            $(this).css("top", "8px")
            $("#kivalasztott", parent.document).text("-")
            $("#kivalasztott", parent.document).css("opacity", "0")
            $("#info", parent.document).text("")
        }
    })
    $(".epu")
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
            $("#kivalasztott", parent.document).css("opacity", "1")
            $("#info", parent.document).text("")
            for(var i = 0; i < epuletekJSON.length; i++){
                if(epuletekJSON[i].epulet == $(this).attr("id")){
                    var para = $("<p>")
                    para.text(`${epuletekJSON[i]["text"]}`)
                    $("#info", parent.document).append(para)
                    if(!epuletekJSON[i]["termek"].includes(null)){
                        $("#info", parent.document).append(`<div class='row'>Termek:`)
                        for(var j in epuletekJSON[i]["termek"]){
                            $("#info", parent.document).append(`<div class='col'>${epuletekJSON[i]["termek"][j]}</div>`)
                        }
                        $("#info", parent.document).append(`</div>`)
                    }
                    break
                }
            }
        }
        else{
            galChange($("#map2"))
            $(".selected").removeClass("selected")
            $("#kivalasztott", parent.document).text("-")
            $("#kivalasztott", parent.document).css("opacity", "0")
            $("#info", parent.document).text("")
        }
    })
    $("#map1")
    .click(function(){
        galChange($(this))
        $(".selected").removeClass("selected")
        $(".selectedmap").removeClass("selectedmap")
        $("#kivalasztott", parent.document).text("-")
        $("#kivalasztott").css("opacity", "0")
        $("#info", parent.document).text("")
    })
    $(".belso")
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
            $("#kivalasztott", parent.document).text($(this).attr("title"))
            $("#kivalasztott", parent.document).css("opacity", "1")
            $("#info", parent.document).text("")
        }
        else{
            galChange($("#map2"))
            $(".selected").removeClass("selected")
            $("#kivalasztott", parent.document).text("-")
            $("#kivalasztott", parent.document).css("opacity", "0")
            $("#info", parent.document).text("")
        }
    })

}


function pageLoaded(){


    $("#teremipt")
    .focus(function(){
        if($("#teremipt").val().length < 1){
            
            $("#teremList div").remove()
            var keresettTerem = []
            $("#mapframe").contents().find(".belso").each(function(){
                if($(this).attr("title").toLowerCase().includes($("#teremipt", parent.document).val().toLowerCase())){
                    keresettTerem.push($(this).attr("title"))
                }
            })
            keresettTerem.forEach(function(element){
                $("#teremList").append(`<div class="teremclick row">${element}</div>`)
            })
            $("#teremList").css("display", "")

        }

    })
    .focusout(function(){
        $("#teremList").hide()
    })
    .bind("keyup", function(){
        $("#teremList div").remove()
        var keresettTerem = []
        $("#mapframe").contents().find(".belso").each(function(){
            if($(this).attr("title").toLowerCase().includes($("#teremipt", parent.document).val().toLowerCase())){
                keresettTerem.push($(this).attr("title"))
            }
        })
        keresettTerem.forEach(function(element){
            $("#teremList").append(`<div class="teremclick row">${element}</div>`)
        })
        if($("#teremipt").val().length < 1){
            

            $("#teremList").css("display", "")

        }
        $(".teremclick").click(function(){
            
        })
    })
    

    var unusedTags = ["WC", "Női", "Férfi", "Tanári", "Öltöző", "Szertár", "Ebédlő", "Terem", "Folyosó", "Lépcső", "Labor", "Könyvtár", "Orvosi", "Műhely", "Irattár", "Titkárság"]


    for(var i in unusedTags){
        $("#tagek").append(`<span class="tags col-6">${unusedTags[i]}</span>`)
    }
    $(".tags").bind("click", ontagclick)

    function ontagclick(){
        if($('#tagek').has($(this)).length){
            $("#tagek").remove($(this))
            $("#selectedtags").append($(this))
        }
        else{
            $("#selectedtags").remove($(this))
            $("#tagek").append($(this))
        }
    }

    $("#tagipt")
    .click(function(){
        if($("#tagek").css("display") == "none"){
            $("#tagek").css("display", "")
        }
        else{
            $("#tagek").css("display", "none")
        }
        
    })

    .bind("keyup", function(){
        $(".tags").each(function(){
            if(!$(this).text().toLowerCase().includes($("#tagipt").val().toLowerCase())){
                $(this).hide()
            }
            else{
                $(this).css("display", "")
            }
        })
        $(".tags").bind("click", ontagclick)
    })
    $(document).mouseup(function(e) 
    {
        var container = $("#ipttag");
        
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $("#tagek").hide();
        }
    })
    
    $("#kereses").click(function(){
        var keresett = []
        $("#kivalasztott").text("")
        $("#selectedtags span").each(function(){
            $("#kivalasztott").text($("#kivalasztott").text() + " " + $(this).text())
            $("#kivalasztott").css("opacity", "1")
            switch($(this).text()){
                case "WC":
                    keresett.push("wc")
                    break;
                case "Tanári":
                    keresett.push("tanari")
                    break;
                case "Női":
                    keresett.push("noi")
                    break;
                case "Férfi":
                    keresett.push("ffi")
                    break;
                case "Öltöző":
                    keresett.push("oltozo")
                    break;
                case "Szertár":
                    keresett.push("szertar")
                    break;
                case "Ebédlő":
                    keresett.push("ebedlo")
                    break;
                case "Terem":
                    keresett.push("terem")
                    break;
                case "Folyosó":
                    keresett.push("folyoso")
                    break;
                case "Lépcső":
                    keresett.push("lepcso")
                    break;
                case "Könyvtár":
                    keresett.push("konyvtar")
                    break;
                case "Orvosi":
                    keresett.push("orvosi")
                    break;
                case "Műhely":
                    keresett.push("muhely")
                    break;
                case "Irattár":
                    keresett.push("irattar")
                    break;
                case "Titkárság":
                    keresett.push("titkarsag")
                    break;
            }
        })
        if(keresett.length > 0){
            var search = ""
            for(var i in keresett){
                var search = search + "." + keresett[i]
            }
            $("#mapframe").contents().find(search).addClass("selected")
            if($("#mapframe").contents().find(".selected").length < 1){
                $("#kivalasztott").text("Nincs a keresésnek megfelelő elem")
            }
        }
        else{
            $("#mapframe").contents().find(".selected").removeClass("selected")
            $("#kivalasztott").text("-")
            $("#kivalasztott").css("opacity", "0")
        }
    })

    

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