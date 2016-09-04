jQuery(function() {
    jQuery(panelSelector).hide()
        .addClass('openclosePanel')
            .before('<a class="openpanel" href="#">' + openPanelText + '<em></em></a>')
                .after('<div class="paneline"></div>');
    jQuery('a.openpanel').toggle(function() {
        jQuery(this).addClass('active').html(closePanelText + '<em></em>');
        jQuery('div.openclosePanel').slideDown(slideDownPanelSpeed);
        return false;
    }, function() {
        jQuery(this).removeClass('active').html(openPanelText + '<em></em>');
        jQuery('div.openclosePanel').slideUp(slideUpPanelSpeed);
        return false;
    });
});