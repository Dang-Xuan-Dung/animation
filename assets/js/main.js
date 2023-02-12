let timer;

$(".box-animista").click(
    function() {
        $(this).removeClass("flip-scale-up-hor")
        if(timer){
            clearTimeout(timer)
        }

        timer = setTimeout( ()=> {
            $(this).addClass("flip-scale-up-hor")
        },100)
    }
)

let timer2;
$(".box-animista2").click(
    function() {
        $(this).removeClass("swirl-in-fwd")
        if(timer2){
            clearTimeout(timer2)
        }

        timer2 = setTimeout( ()=> {
            $(this).addClass("swirl-in-fwd")
        },100)
    }
)


let timer3;
$(".box-animate-C").click(
    function() {
        $(this).removeClass("animate__fadeInLeftBig")
        if(timer3){
            clearTimeout(timer3)
        }

        timer3 = setTimeout( ()=> {
            $(this).addClass("animate__fadeInLeftBig")
        },100)
    }
)

let timer4;
$(".box-animate-D").click(
    function() {
        $(this).removeClass("animate__zoomInRight")
        if(timer4){
            clearTimeout(timer4)
        }

        timer4 = setTimeout( ()=> {
            $(this).addClass("animate__zoomInRight")
        },100)
    }
)