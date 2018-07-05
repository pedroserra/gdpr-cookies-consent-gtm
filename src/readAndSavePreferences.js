import enableCookies from './enableCookies';

export default function (element, options) {
    let consent = {
        version: options.version,
        accepted: []
    };

    element.querySelectorAll(options.cookiesCheckbox).forEach(el => {
        let name = el.getAttribute('name');
        if (el.checked  &&  name) {
            consent.accepted.push(name);
        }
    });

    localStorage[options.storageKey] = JSON.stringify(consent);
    enableCookies(options, consent);
}
