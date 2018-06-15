
/*
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });

    //js code for play and pause buttons on carousel
        $(document).ready(function(){
            $('#mycarousel').carousel({interval: 2000});
            $('#carousel-pause').click(function(){
                $('#mycarousel').carousel('pause');
            });
            $('#carousel-play').click(function(){
                $('#mycarousel').carousel('cycle');
            });
        });
*/
        
//js code for single play/pause button on carousel

        $(document).ready(function() {
            $('#mycarousel').carousel({interval: 2000});
            $('#carouselButton').click(function() {
                if($('#carouselButton').children('span').hasClass('fa-pause')) {
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                }
                else {
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }
            });

            //toggle the reserve table modal
            $('#reserveTableButton').click(function(){
                $('#reserveModal').modal();
            });

            //toggle login modal
            $('#loginModalButton').click(function(){
                $('#loginmodal').modal();
            });

        });