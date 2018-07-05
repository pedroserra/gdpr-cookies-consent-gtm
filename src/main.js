import enableCookies from './enableCookies';
import showForm from './showForm';

global.CookiesConsent = function(options) {
    options = Object.assign({}, {
        storageKey: 'cookies-consent',
        element: '#cookies-consent',
        cookiesCheckbox: 'input[type="checkbox"]',
        visibleClass: 'visible',
        showDetailsClass: 'show-details',
        version: 0,
        closeButton: '.close',
        acceptButton: 'button.accept',
        rejectButton: 'button.reject',
        detailsButton: 'button.details'
    }, options);

    let element = document.querySelector(options.element);
    if (!element) {
        throw new Error(options.element + ' not found');
    }

    // Check if consent was given previously
    let consent = localStorage[options.storageKey];
    if (consent) {
        try {
            consent = JSON.parse(consent);
        } catch (e) {
            // Ignores parsing error
            consent = null;
        };
    }

    // If has consent, enable cookies, else show dialog
    if (!consent || consent.version != options.version) {
        showForm(element, options);
    } else {
        enableCookies(options, consent);
    }
};
