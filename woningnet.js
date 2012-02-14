/* Woningnet extension for chrome by Menollo */

var registratienummer_selector = '#plhbody_0_plhrow2col2_0_textBoxLogin';
var postcode_selector = '#plhbody_0_plhrow2col2_0_textBoxZipCode';
var wachtwoord_selector = '#plhbody_0_plhrow2col2_0_textBoxPassword';

var registratienummer = localStorage.getItem('woningnet_registratienummer');
var postcode = localStorage.getItem('woningnet_postcode');
var wachtwoord = localStorage.getItem('woningnet_wachtwoord');


$(registratienummer_selector).val(registratienummer);
$(postcode_selector).val(postcode);
$(wachtwoord_selector).val(wachtwoord);

$('form#ctl00').submit(function() {
    if(!
        (
            $(registratienummer_selector).val() == registratienummer &&
            $(postcode_selector).val() == postcode &&
            $(wachtwoord_selector).val() == wachtwoord
        )
    ) {
        if(confirm('Mogen de ingevoerde gegevens voor woningnet onthouden worden?')) {
            localStorage.setItem('woningnet_registratienummer', $(registratienummer_selector).val());
            localStorage.setItem('woningnet_postcode', $(postcode_selector).val());
            localStorage.setItem('woningnet_wachtwoord', $(wachtwoord_selector).val());
        }
    }
    return true;
});

