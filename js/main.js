//Menu Toggle Button
$(document).ready(function() {
    $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
    });
});

function myFunction(){
    alert("Size: 42 " + "Amount: $500,");
}