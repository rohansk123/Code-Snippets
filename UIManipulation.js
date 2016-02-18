
function positionPopupsRemoveBtn()
{
   if ($(window).width() > 1750) {
                              var alertbtnmarginright = $(window).width() / 44.6 + "em";
                              // $(".ui-dialog-buttonpane button:first").css('margin-right', btnmarginright);
                              $(".alert-dialog-btn").css('margin-right', alertbtnmarginright);
                              var largeAlertBtnMarginRight = $(window).width() / 26.7 + "em";
                              $(".large-alert-dialog-btn").css('margin-right', largeAlertBtnMarginRight);
                          }
                          else if ($(window).width() < 1300) {
                              var alertbtnmarginright = $(window).width() / 56.88 + "em";
                              // $(".ui-dialog-buttonpane button:first").css('margin-right', btnmarginright);
                              $(".alert-dialog-btn").css('margin-right', alertbtnmarginright);
                              var largeAlertBtnMarginRight = $(window).width() / 23.4 + "em";
                              $(".large-alert-dialog-btn").css('margin-right', largeAlertBtnMarginRight);
                          }
                          else {
                              var alertbtnmarginright = $(window).width() / 56.88 + "em";
                              // $(".ui-dialog-buttonpane button:first").css('margin-right', btnmarginright);
                              $(".alert-dialog-btn").css('margin-right', alertbtnmarginright);
                              var largeAlertBtnMarginRight = $(window).width() / 29.7 + "em";
                              $(".large-alert-dialog-btn").css('margin-right', largeAlertBtnMarginRight);
                          }
}
