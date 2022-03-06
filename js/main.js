/*global $, jQuery, alert*/

$(function () {

    "use strict";

    //Adjut Slider Height

    let window_height = $(window).height(),
        upper_bar_height = $(".upper-bar").innerHeight(),
        nav_height = $("nav").innerHeight();

    $(".slider").height(window_height - (upper_bar_height + nav_height));

    $(".carousel-item").height(window_height - (upper_bar_height + nav_height));

    // Smoothly Scroll To Elment
    $(".navbar-nav li a").click(function (e) {

        e.preventDefault();

                $(".navbar-collapse").toggleClass("show");

        document.querySelector($(this).data("scroll")).scrollIntoView({

            behavior: "smooth"

        });

    });

    // Work Shuffle
    $(".our-work ul li").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        if ($(this).data("class") == "all") {

            $(".shuffle-box .col-md").css("opacity", 1)
        } else {

            $(".shuffle-box .col-md").css("opacity", .1);

            $($(this).data("class")).parent().css("opacity", 1)
        }

    });

    // Show The Arrow-up If Window scrollY Is >= 700
    $(window).scroll(function () {

        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })
    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })
});
