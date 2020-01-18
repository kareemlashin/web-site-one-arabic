$(document).ready(function () {
    $("#loading-page").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    })
    let nav = $(".navbar").css("height");
    $(".first-section").css("marginTop", nav)
    let navHeight = $(".navbar").height();

    $("nav a").click(function () {
        let myHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(myHref).offset().top }, 1000)
    })
    $(".up").click(function () {
        $("body,html").animate({ scrollTop: 0 + "px" }, 2000)
    })
    let mySer = $("#myServise").offset().top;
    $(window).scroll(
        function () {
            let myWindowScroll = $(window).scrollTop();
            if (myWindowScroll > mySer - navHeight) {
                $(".navbar").addClass("backGround");
                $(".navbar").removeClass("natTop");

                $(".nav-link").css("color", "#000");
                $(".logo").attr("src", "img/logo.png")
                $(".navbar-toggler-icon i").css("color", "#000")
            } else {
                $(".navbar").removeClass("backGround");
                $(".navbar").addClass("natTop");
                $(".nav-link").css("color", "#fff");
                $(".logo").attr("src", "img/white_logo.png")
                $(".navbar-toggler-icon i").css("color", "#fff")

            }
        }
    )
    $("#wallet ul li a").click(function () {
        let dataChose = $(this).attr("data-filter");
        console.log(dataChose)
        if (dataChose == "all") {
            $(".filter").show(1000);
        } else {
            $('.filter').not("." + dataChose).hide(1000);
            $('.filter').filter("." + dataChose).show(1000);
        }
    })
    $(".chose a").click(function () {
        $(this).addClass("active");
        $(".chose a").not(this).removeClass('active');

    })

    let myCount = $(".count").offset().top;
    $(window).scroll(function () {
        let myWindow = $(window).scrollTop();
        if (myWindow > myCount - navHeight) {
            function inc2() {
                let num2 = $(".codes").text();
                if (num2 < 100) {
                    num2++;
                    clearInterval(inc2)
                }
                $(".codes").text(num2)


            }
            function inc1() {
                let num1 = $(".project").text();
                if (num1 < 30) {
                    num1++;
                    clearInterval(inc2)
                }
                $(".project").text(num1)


            }
            function inc3() {
                let num3 = $(".client").text();
                if (num3 < 30) {
                    num3++;
                    clearInterval(inc3)
                }
                $(".client").text(num3)


            }
            function inc4() {

                let num4 = $(".skills").text();
                if (num4 < 5) {

                    num4++;
                    clearInterval(inc4)
                }

                $(".skills").text(num4)

            }
            setInterval(inc1, 100)
            setInterval(inc2, 100)
            setInterval(inc4, 100)
            setInterval(inc3, 100)
        }
    })

})

