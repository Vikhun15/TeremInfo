
/*
*   Összesen három darab JSON fájlban van tárolva az információ
*
*   epuletek.json
*   Ez tartalmazza az iskola épületeinek a leírását és hogy melyikben milyen termek találhatóak.
*
*   termek.json
*   Ez tartalmazza a termeket, hogy van-e bennük projektor, az órarend pdf-ben a teremre hivatkozó oldal számát
*   és a terem extra információit mint például hogy kinek az osztályterme és ha szaktanterem.
*
*   tanarik.json
*   Ez tartalmazza a tanárikat és bennük található tanárok neveit. 
*
*/

fetch('./JSON/epuletek.json')
    .then((response) => response.json())
    .then((json) => epuletek = json);

fetch('./JSON/termek.json')
    .then((response) => response.json())
    .then((json) => termek = json);

fetch('./JSON/tanarik.json')
    .then((response) => response.json())
    .then((json) => tanarik = json);



//Egy gyors függvény a beágyazott lap maximum méreteinek beállítására

function resizeIframe(that){
    that.style.height=(that.contentWindow.document.body.scrollHeight+20)+'px';
}

//A galléria tartalmainak változtató függvénye

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

//A szint váltáshoz használt függvény, a kettő bementi paramétere a mostani szint és az irány.

function szintValtas(currlv,dir){

    var lvl = ""
    $("#map2").hide()
    $("#epuletek").hide()
    $("#belso div").hide()
    if(dir == "le"){
        switch (currlv){
            case "sat":
                $("#szint", parent.document).attr("value", "div")
                $("#szint", parent.document).text("Épületek")
                lvl = "#epuletek"
                break;
            case "div":
                $("#szint", parent.document).attr("value", "em3")
                $("#szint", parent.document).text("3. emelet")
                lvl = "#em3"
                break;
            case "em3":
                $("#szint", parent.document).attr("value", "em2")
                $("#szint", parent.document).text("2. emelet")
                lvl = "#em2"
                break;
            case "em2":
                $("#szint", parent.document).attr("value", "em1")
                $("#szint", parent.document).text("1. emelet")
                lvl = "#em1"
                break;
            case "em1":
                $("#szint", parent.document).attr("value", "fsz")
                $("#szint", parent.document).text("Földszint")
                lvl = "#fsz"
                break;
            case "fsz":
                $("#szint", parent.document).attr("value", "alag")
                $("#szint", parent.document).text("Alagsor")
                lvl = "#alag"
                break;
            default:
                lvl = "#alag"
        }
    }
    else{
        switch (currlv){
            case "div":
                $("#szint", parent.document).attr("value", "sat")
                $("#szint", parent.document).text("Műhold")
                lvl = "#map2"
                break;
            case "em3":
                $("#szint", parent.document).attr("value", "div")
                $("#szint", parent.document).text("Épületek")
                lvl = "#epuletek"
                break;
            case "em2":
                $("#szint", parent.document).attr("value", "em3")
                $("#szint", parent.document).text("3. emelet")
                lvl = "#em3"
                break;
            case "em1":
                $("#szint", parent.document).attr("value", "em2")
                $("#szint", parent.document).text("2. emelet")
                lvl = "#em2"
                break;
            case "fsz":
                $("#szint", parent.document).attr("value", "em1")
                $("#szint", parent.document).text("1. emelet")
                lvl = "#em1"
                break;
            case "alag":
                $("#szint", parent.document).attr("value", "fsz")
                $("#szint", parent.document).text("Földszint")
                lvl = "#fsz"
                break;
            default:
                lvl = "#map2"
        }
    }

    $(lvl).css("display", "")
}

//A beágyazott oldal betöltésekor lefutó kódok

function iframeLoaded(){

    //Térképen belüli emelet navigációs parancsok
    
    $("#le", parent.document).bind("click", function(){
        szintValtas($("#szint", parent.document).attr("value"), $(this).attr("id"))
    })
    $("#fel", parent.document).bind("click", function(){
        szintValtas($("#szint", parent.document).attr("value"), $(this).attr("id"))
    })

    
    //Az iskola épületének leírása
    const isktxt = "Az Egressy Gábor Gimnáziumot 1956-ban alapította a XIV kerület városi tanácsa a növekvő diáklétszám taníttatására. Kezdetben még a szomszédos (napjainkban Herman Ottó) általános iskolához tartozott mint fiúgimnázium. Az iskola 1964-ben megváltoztatta a nevét, hogy jobban reflektálja a műszaki irányt. Az iskola neve 'Egyressy Gábor Gimnázium és Ipari szakközépiskola' lett. Az évek során a kezdetben csak a mai 'B' épületből álló iskola kibővült. Megépültek az 'A' és 'C' épületek, az iskola új ebédlőt és tornatermet kapott. 2004-ben az iskolában új képzés alakult, Két tanítási nyelvű osztályok indultak szeptembertől. Következő nagy fejlődés 2012-ben történt mikor az országban elsőként honvéd kadét program indult az iskolában. Napjainkban már az iskola a jól ismert 'Egressy Gábor Két Tanítási nyelvű Technikum' néven fut tovább, minden évben közel 40 szakemberrel gazdagítva a magyar gazdaságot."


    //A szatellit térkép egér utasításai
    

    $("#map2")
    .hover( function(){
        $(this).attr("src", "../map/sat/egressy_map_hover.png")
        $(this).css("left", "9px")
        $(this).css("top", "8px")
    }, function(){
        if(!$(this).hasClass("selectedmap")){
            $(this).attr("src", "../map/sat/egressy_map.png")
            $(this).css("left", "9px")
            $(this).css("top", "8px")
        }
        else{
            $(this).attr("src", "../map/sat/egressy_map_click.png")
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
            for(var i = 0; i < epuletek.length; i++){
                if(epuletek[i].epulet == $(this).attr("id")){
                    var para = $("<div>")
                    para.text(`${epuletek[i]["text"]}`)
                    $("#info", parent.document).append(para)
                    if(!epuletek[i]["termek"].includes(null)){
                        $("#info", parent.document).append(`<div class='row'>Termek:`)
                        for(var j in epuletek[i]["termek"]){
                            $("#info", parent.document).append(`<div class='col'>${epuletek[i]["termek"][j]}</div>`)
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
            if($(this).hasClass("tanari")){
                for(var i = 0; i < tanarik.length; i++){
                    if(tanarik[i].terem == $(this).attr("id")){
                        if(tanarik[i].tanarok.length > 0){
                            $("#info", parent.document).append('<div class="row" >')
                            for(var j = 0; j < tanarik[i].tanarok.length; j++){
                                $("#info", parent.document).append(`<div class="col-4">${tanarik[i].tanarok[j]}</div>`)
                            }
                            $("#info", parent.document).append("<div>")
                            break
                        }
                    }
                }
            }
            else{
                for(var i = 0; i < termek.length; i++){
                    if(termek[i].terem == $(this).attr("id")){
                        $("#info", parent.document).append('<div class="row" >')
                        $("#info", parent.document).append(`<div>${(termek[i].projektor? "Rendelkezik kivetítővel" : "Nem rendelkezik kivetítővel")}</div>`)
                        if(termek[i].extra !== null){
                            $("#info", parent.document).append(`<div>${termek[i].extra}</div>`)
                        }
                        if(termek[i].orarend !== null){
                            $("#info", parent.document).append(`<a href="https://www.egressy.info/img/oldalak/Hirek__informaciok/doc/Orarend_202223_3.pdf#page=${termek[i].orarend}" target="_blank">Órarend</a>`)
                        }
                        $("#info", parent.document).append("<div>")
                        break
                    }
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

}

//A főoldal betöltésekor lefutó kódok

function pageLoaded(){

    //A kereső mezőkhöz tartozó Listenerek

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
            
            $(".teremclick").bind("click", function(){
                var searchTtl = `.belso[title=${$(this).text()}]`
                $("#teremipt").val($(this).text())
            })
        }

    })
    .bind("keyup", function(){
        $("#teremList").css("display", "")
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
        $(".teremclick").bind("click", function(){
            var searchTtl = `.belso[title=${$(this).text()}]`
            $("#teremipt").val($(this).text())
        })
    })
    $("body").click(
      function(e)
      {
        if(e.target.id !== "teremList" && e.target.id !== "teremipt")
        {
          $("#teremList").hide();
        }
      }
    )
    
    $("#teremList")
    .click(function(){
        $("#teremList").hide()
    })
    
    
    //Az összes lehetséges (és logikus) tag

    var unusedTags = ["WC", "Tanári", "Öltöző", "Szertár", "Ebédlő", "Terem", "Folyosó", "Lépcső", "Labor", "Könyvtár", "Orvosi", "Műhely", "Irattár", "Titkárság"]


    for(var i in unusedTags){
        $("#tagek").append(`<span class="tags col-6">${unusedTags[i]}</span>`)
    }
    $(".tags").bind("click", ontagclick)

    function ontagclick(){
        if($('#tagek').has($(this)).length){
            $("#tagek").remove($(this))
            $("#selectedtags").append($(this))
            if($(this).text() == "WC"){
                $("#oltozor").css("display", "none")
                $("#wcr").css("display", "")
            }
            else if($(this).text() == "Öltöző"){
                $("#wcr").css("display", "none")
                $("#oltozor").css("display", "")
            }
            else{
                $("#wcr").css("display", "none")
                $("#oltozor").css("display", "none")
            }
        }
        else{
            $("#selectedtags").remove($(this))
            $("#tagek").append($(this))
        }

        if($("#selectedtags").has($(this)).length < 1){
            $("#wcr").css("display", "none")
            $("#oltozor").css("display", "none")
        }

    }

    //A kereső mezők beviteli részeinek utasításai

    $("#tagipt")
    .click(function(){
        if($("#tagek").css("display") === "block"){
            $("#tagek").css("display", "none")
        }
        else{
            $("#tagek").css("display", "")
        }
    })
    .focusout(function(){
        $("#tagek").css("display", "none")
    })
    .hover(function(){
        $("#menugomb").css("background-color", "rgb(220,220,220")
    }, function(){
        $("#menugomb").css("background-color", "rgb(200,200,200")
    })

    $("#menugomb")
    .click(function(){
        if($("#tagek").css("display") === "block"){
            $("#tagek").css("display", "none")
        }
        else{
            $("#tagek").css("display", "")
        }
    })
    .focusout(function(){
        $("#tagek").css("display", "none")
    })
    .hover(function(){
        $("#menugomb").css("background-color", "rgb(220,220,220")
    }, function(){
        $("#menugomb").css("background-color", "rgb(200,200,200")
    })

    $("#tagek").click(function(){
        $(this).css("display", "none")
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
        $("#info").text("")
        $("#mapframe").contents().find(".selected").removeClass("selected")
        $("#selectedtags span").each(function(){
            $("#kivalasztott").text($("#kivalasztott").text() + ", " + $(this).text())
            $("#kivalasztott").text($("#kivalasztott").text().substring(1))
            $("#kivalasztott").css("opacity", "1")
            switch($(this).text()){
                case "WC":
                    keresett.push("wc")
                    break;
                case "Tanári":
                    keresett.push("tanari")
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
        if($("#teremipt").val().length > 0){
            var srcttl = `.belso[title='${$("#teremipt").val()}']`
            var keresettElem = $("#mapframe").contents().find(srcttl)
            keresettElem.addClass("selected")
            if(keresettElem.hasClass("tanari")){
                for(var i = 0; i < tanarik.length; i++){
                    if(tanarik[i].terem == keresettElem.attr("id")){
                        if(tanarik[i].tanarok.length > 0){
                            $("#info", parent.document).append('<div class="row" >')
                            for(var j = 0; j < tanarik[i].tanarok.length; j++){
                                $("#info", parent.document).append(`<div class="col-4">${tanarik[i].tanarok[j]}</div>`)
                            }
                            $("#info", parent.document).append("<div>")
                            break
                        }
                    }
                }
            }
            else{
                for(var i = 0; i < termek.length; i++){
                    if(termek[i].terem == keresettElem.attr("id")){
                        $("#info", parent.document).append('<div class="row" >')
                        $("#info", parent.document).append(`<div>${(termek[i].projektor? "Rendelkezik kivetítővel" : "Nem rendelkezik kivetítővel")}</div>`)
                        if(termek[i].extra !== null){
                            $("#info", parent.document).append(`<div>${termek[i].extra}</div>`)
                        }
                        if(termek[i].orarend !== null){
                            $("#info", parent.document).append(`<a href="https://www.egressy.info/img/oldalak/Hirek__informaciok/doc/Orarend_202223_3.pdf#page=${termek[i].orarend}" target="_blank">Órarend</a>`)
                        }
                        $("#info", parent.document).append("<div>")
                        break
                    }
                }
            }
            $("#kivalasztott").text($("#teremipt").val())
            $("#kivalasztott").css("opacity", "1")
            if(keresettElem.hasClass("em3")){
                $("#mapframe").contents().find("#epuletek").hide()
                $("#mapframe").contents().find("#em3").hide()
                $("#mapframe").contents().find("#em2").hide()
                $("#mapframe").contents().find("#em1").hide()
                $("#mapframe").contents().find("#fsz").hide()
                $("#mapframe").contents().find("#alag").hide()
                $("#mapframe").contents().find("#em3").css("display", "")
                $("#szint").attr("value", "em3")
                $("#szint").text("3. emelet")
            }
            else if(keresettElem.hasClass("em2")){
                $("#mapframe").contents().find("#epuletek").hide()
                $("#mapframe").contents().find("#em3").hide()
                $("#mapframe").contents().find("#em2").hide()
                $("#mapframe").contents().find("#em1").hide()
                $("#mapframe").contents().find("#fsz").hide()
                $("#mapframe").contents().find("#alag").hide()
                $("#mapframe").contents().find("#em2").css("display", "")
                $("#szint").attr("value", "em2")
                $("#szint").text("2. emelet")
            }
            else if(keresettElem.hasClass("em1")){
                $("#mapframe").contents().find("#epuletek").hide()
                $("#mapframe").contents().find("#em3").hide()
                $("#mapframe").contents().find("#em2").hide()
                $("#mapframe").contents().find("#em1").hide()
                $("#mapframe").contents().find("#fsz").hide()
                $("#mapframe").contents().find("#alag").hide()
                $("#mapframe").contents().find("#em1").css("display", "")
                $("#szint").attr("value", "em1")
                $("#szint").text("1. emelet")
            }
            else if(keresettElem.hasClass("fsz")){
                $("#mapframe").contents().find("#epuletek").hide()
                $("#mapframe").contents().find("#em3").hide()
                $("#mapframe").contents().find("#em2").hide()
                $("#mapframe").contents().find("#em1").hide()
                $("#mapframe").contents().find("#fsz").hide()
                $("#mapframe").contents().find("#alag").hide()
                $("#mapframe").contents().find("#fsz").css("display", "")
                $("#szint").attr("value", "fsz")
                $("#szint").text("Földszint")
            }
            else if(keresettElem.hasClass("alag")){
                $("#mapframe").contents().find("#epuletek").hide()
                $("#mapframe").contents().find("#em3").hide()
                $("#mapframe").contents().find("#em2").hide()
                $("#mapframe").contents().find("#em1").hide()
                $("#mapframe").contents().find("#fsz").hide()
                $("#mapframe").contents().find("#alag").hide()
                $("#mapframe").contents().find("#alag").css("display", "")
                $("#szint").attr("value", "alag")
                $("#szint").text("Alagsor")
            }
        }

        else if(keresett.length > 0){
            var search = ""
            for(var i in keresett){
                if(i > 0){
                    if(keresett[i] === "wc"){
                        if($("#noiwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i]) + "." + "noi"
                        }
                        if($("#ffiwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i]) + "." + "ffi"
                        }
                        if($("#tanariwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i]) + "." + "tanari"
                        }
                        if(!$("#noiwc").is(":checked") && !$("#ffiwc").is(":checked") && !$("#tanariwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i])
                        }
                    }
                    else if(keresett[i] === "oltozo"){
                        if($("#noio").is(":checked") && $("#ffio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "" : ", ." + keresett[i])
                            continue;
                        }
                        if($("#noio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i]) + "." + "noi"
                        }
                        if($("#ffio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i]) + "." + "ffi"
                        }
                        if(!$("#noio").is(":checked") && !$("#ffio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i])
                        }
                    }
                    else{
                        var search = search + (search.includes(keresett[i])? "," : ", ." + keresett[i])
                    }
                }
                else{
                    if(keresett[i] === "wc"){
                        if($("#noiwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i]) + "." + "noi"
                        }
                        if($("#ffiwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i]) + "." + "ffi"
                        }
                        if($("#tanariwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i]) + "." + "tanari"
                        }
                        if(!$("#noiwc").is(":checked") && !$("#ffiwc").is(":checked") && !$("#tanariwc").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i])
                        }
                    }
                    else if(keresett[i] === "oltozo"){
                        if($("#noio").is(":checked") && $("#ffio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i])
                            continue;
                        }
                        if($("#noio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i]) + "." + "noi"
                        }
                        if($("#ffio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i]) + "." + "ffi"
                        }
                        if(!$("#noio").is(":checked") && !$("#ffio").is(":checked")){
                            var search = search + (search.includes(keresett[i])? "," : "." + keresett[i])
                        }
                    }
                    else{
                        var search = search + (search.includes(keresett[i])? "," : "." + keresett[i])
                    }
                }
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

    //Galléria jobb és balra navigáció

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

    //Kép "nagyítás"

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