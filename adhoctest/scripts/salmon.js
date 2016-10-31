
function init() {
    $(".slide").each(function(i) {
        $(this).delay(i * 3000).fadeIn(2000).delay(1000).fadeOut(2000);
    });

    setTimeout(function() {
        $(".slide").each(function() {
                $(this).css("position", "relative").fadeIn(3000);	
        });				
    }, 8000);
}

$(document).ready(init);
