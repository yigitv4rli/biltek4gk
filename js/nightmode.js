function night() {
    body.className = "darkSwitch";
};

function day() {
    body.className = "";
};

$(function () {
    var bgColor = document.cookie.replace(/(?:(?:^|.*;\s*)bgColor\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    var button = $('input[type=button].changeBg');
    button.on('click', function (event) {
        event.preventDefault();

        eval($(this).val().toLowerCase() + "();");

        button.not($(this)).removeAttr('disabled');
        if ($(this).val() != "Reset") {
            $(this).attr('disabled', '');
            document.cookie = "bgColor="+$(this).val();
        }
    });

    if(bgColor.length > 0)
    {
        eval(bgColor.toLowerCase()+'()');
        $.each($('input[type="button"].changeBg'),function(){
            if($(this).val() == bgColor)
                $(this).attr('disabled','disabled');
        });
    }
});
