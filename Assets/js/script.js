function mostrarform() {
    document.getElementById('formu') .style.display = "block";
}

$(document).ready(function () {
    $("#aerovia").click(function () {
        $("#detallesaerovia").toggle();
    })
    $(".btn-close").click(function () {
        $("#detallesaerovia").hide();
    });

    $("#leonardo").click(function () {
        $("#detallesleonardo").toggle();
    })
    $(".btn-close").click(function () {
        $("#detallesleonardo").hide();
    });

    $("#banco").click(function () {
        $("#detallesbanco").toggle();
    })
    $(".btn-close").click(function () {
        $("#detallesbanco").hide();
    });
    $(".btn-primary") .click(function(){
        $("#formu").hide();
    })
})

