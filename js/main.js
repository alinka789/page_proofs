$(function() {

    Cufon.replace("h2", {fontFamily: "Steelfish"});
    Cufon.replace("h1", {fontFamily: "Steelfish"});
    Cufon.replace("h3", {fontFamily: "Steelfish"});
    Cufon.replace("h4", {fontFamily: "Steelfish"});
    Cufon.replace("h5", {fontFamily: "Steelfish Rg"});
    Cufon.replace("h6", {fontFamily: "Steelfish Rg"});
    Cufon.replace(".title span", {fontFamily: "Steelfish"});
    Cufon.replace(".data", {fontFamily: "Steelfish Rg"});
    Cufon.replace(".ex-discr p", {fontFamily: "Steelfish"});
    Cufon.replace(".workouts-header .work-title", {fontFamily: "Steelfish"});
    Cufon.replace(".workouts-body .item p", {fontFamily: "Steelfish"});
    Cufon.replace(".player-body ol", {fontFamily: "Steelfish"});
    Cufon.replace(".player-body li", {fontFamily: "Steelfish"});
    Cufon.replace(".time p", {fontFamily: "Steelfish Rg"});



    $("#main-label").on("mouseenter", function() {
        $("#main-label").animate({'background-position-x': '0px'}, 1000);
    });

    $("#main-label").on("mouseleave", function() {
        $("#main-label").animate({'background-position-x': '-200px'}, 10);
    });

    $("#training").on("mouseenter", function() {
        $("#training").animate({'background-position-x': '0px'}, 1000);
    });

    $("#training").on("mouseleave", function() {
        $("#training").animate({'background-position-x': '-250px'}, 10);
    });

    $("#nutrition").on("mouseenter", function() {
        $("#nutrition").animate({'background-position-x': '0px'}, 1000);
    });

    $("#nutrition").on("mouseleave", function() {
        $("#nutrition").animate({'background-position-x': '-250px'}, 10);
    });

    $("#fashion").on("mouseenter", function() {
        $("#fashion").animate({'background-position-x': '0px'}, 1000);
    });

    $("#fashion").on("mouseleave", function() {
        $("#fashion").animate({'background-position-x': '-250px'}, 10);
    });

    $("#sports").on("mouseenter", function() {
        $("#sports").animate({'background-position-x': '0px'}, 1000);
    });

    $("#sports").on("mouseleave", function() {
        $("#sports").animate({'background-position-x': '-250px'}, 10);
    });

    $("#entertainment").on("mouseenter", function() {
        $("#entertainment").animate({'background-position-x': '0px'}, 1000);
    });

    $("#entertainment").on("mouseleave", function() {
        $("#entertainment").animate({'background-position-x': '-250px'}, 10);
    });

    $("#interactive").on("mouseenter", function() {
        $("#interactive").animate({'background-position-x': '0px'}, 1000);
    });

    $("#interactive").on("mouseleave", function() {
        $("#interactive").animate({'background-position-x': '-250px'}, 10);
    });

    $("#sec-fashion").on("mousemove", function() {
        $("#sec-fashion").attr('src', 'images/sec_fashion2.png');
        $("#sec-fashion").css({'z-index': '2'});
        $("#sec-interactive").css({'display': 'none'});
    });

    $("#sec-fashion").on("mouseleave", function() {
        $("#sec-fashion").attr('src', 'images/sec_fashion.png');
        $("#sec-interactive").css({'display': 'inline-block'});
    });

    $("#sec-sports").on("mousemove", function() {
        $("#sec-sports").attr('src', 'images/sec_sports.jpg');
        $("#sec-training").css({'display': 'none'});
    });

    $("#sec-sports").on("mouseleave", function() {
        $("#sec-sports").attr('src', 'images/sec_sports.png');
        $("#sec-training").css({'display': 'inline-block'});
    });

    // SLIDESHOW //

    var description = $(".description p:first-child");

    function slides() {

        description.animate({opacity: 0}, 5000, function() {
            description.removeClass("show");
            description.css({opacity: 1});
            if (description.next("p").is("p") === false) {
                description = $(".description p:first-child");
                // description.animate({opacity: 1}, 2500);
                description.addClass("show");
            } else {
                // description.animate({opacity: 1}, 2500);
                description.next("p").addClass("show");
                description = description.next("p");
            }
        });

        $(".prev").animate({left: "-124%"}, 5000, function() {
            $(".prev").attr("class", "no-active");
            $(".slideshow .no-active").css({left: "155%"});
        });

        var active = $(".active");

        active.animate({left: "-55%", right: "0%", opacity: 0.5}, 5000, function() {
            active.attr("class", "prev");
        });


        $(".next").animate({left: "15%", right: "15%", opacity: 1}, 5000, function() {
            $(".next").attr("class", "active");
            var pagination;
            if ($(".current").next("li").is("li") === false) {
                pagination = $(".current").removeClass("current");
                $(".pagination li:first-child").addClass("current");
            } else {
                pagination = $(".current").next("li");
                $(".current").removeClass("current");
                pagination.addClass("current");
            }
        });
        if ($(".slideshow .next").next("img").is("img") === false) {
            $(".slideshow .no-active:first-child").animate({left: "85%"}, 5000, function() {
                $(".slideshow .no-active:first-child").attr("class", "next");
            });

        } else {

            var no_active = $(".slideshow .next").next("img");
            no_active.animate({left: "85%"}, 5000, function() {
                no_active.attr("class", "next");

            });

        }
    }

    slides();

    setInterval(slides, 8000);


});


