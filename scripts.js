$("#mapframe").on("load" ,function(){
    console.log($("#map2").attr())
    $("#fel").bind("click", function(){
        if($("#szint").attr("value") === "sat"){
            $("#map2").hide()
        }
    })
})

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
}