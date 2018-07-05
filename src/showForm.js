import readAndSavePreferences from './readAndSavePreferences';

export default function(element, options) {
    element
        .classList
        .add(options.visibleClass);

    // Ignore dialog and close button
    let closeButtons = element.querySelectorAll(options.closeButton);
    if (closeButtons.length) {
        closeButtons.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                element
                    .classList
                    .remove(options.visibleClass);
            });
        });
    }

    // show details
    let detailsButtons = element.querySelectorAll(options.detailsButton);
    if (detailsButtons.length) {
        detailsButtons.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                element
                    .classList
                    .add(options.showDetailsClass);
            });
        });
    }

    // reject all
    let rejectButtons = element.querySelectorAll(options.rejectButton);
    if (rejectButtons.length) {
        rejectButtons.forEach(el => {
            el.addEventListener('click', e=> {
                e.preventDefault();
                element.classList.remove(options.visibleClass);
                element.querySelectorAll(options.cookiesCheckbox).forEach(el => {
                    el.checked = false;
                });
                readAndSavePreferences(element, options);
            });
        });
    }

    // accept selection
    let acceptButtons = element.querySelectorAll(options.acceptButton);
    if (acceptButtons.length) {
        acceptButtons.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault();
                element.classList.remove(options.visibleClass);
                readAndSavePreferences(element, options);
            });
        });
    }
}
