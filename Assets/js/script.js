function mostrarform() {
    document.getElementById('form') .style.display = "block";
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
    $(".btn-close").click(function () {
        $("#form").hide();
    });
})

