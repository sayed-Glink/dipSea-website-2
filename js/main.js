

ScriptProcessorNode

// (function($){
//     'use strict';

//     // code start

//     $('.main-icon i.fa-bars').on('click', function(){
//         $('.main-menu').slideDown();
//         $('.main-icon i.fa-times').show();
//         $(this).hide();
//     });

//     $('.main-icon i.fa-times').on('click', function(){
//         $('.main-menu').slideUp();
//         $('.main-icon i.fa-bars').show();
//         $(this).hide();
//     });

// }) (jQuery);


function validation() {
    var username=document.getElementById('sub-name'),
        usermail=document.getElementById('sub-mail');

    if (username.value.trim()=='') {
        document.getElementById('user-error').innerHTML='please enter your name';
        return false;
    }
    else{
        document.getElementById('user-error').innerHTML='';
    }
        // second steo........

    if (usermail.value.trim()=='') {
        document.getElementById('mail-error').innerHTML='please enter your mail';
        return false;
    }
    else{
        document.getElementById('mail-error').innerHTML='';
    }


}












