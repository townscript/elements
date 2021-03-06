
export class RegEx {
    static email =
        new RegExp(
            '^(([^<>()\\[\\]\\.,;:\\s@\\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@(([^<>()[\\]\\.,;:\\s@\\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\\"]{2,})$',
            'i');

    static numbericPincode = new RegExp('^[1-9][0-9]{5}$', 'i');

    static gstin = new RegExp(
        '^([0]{1}[1-9]{1}|[1-2]{1}[0-9]{1}|[3]{1}[0-7]{1})([a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1})+$',
        'i');

    static time = new RegExp('^([0-1][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$', 'i');
}
