/**
 * Created by hp on 31.08.2017.
 */

jQuery('document').ready(function () {
    var love = confirm("Ты любишь меня?");
    if(!love){
        alert('It doesnt even meter');
    } else alert('Я тебя тоже :3');
    
    $('input').on('keyup',function () {
        var p1,p2;
        p1 = $("#val1").val(); p1 = parseInt(p1);
        p2 = $("#val2").val(); p2 = parseInt(p2);
        var p3=p1*p2;
        $('#res').html(p3);

    });
});