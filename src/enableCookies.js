export default function(options, consent) {
    consent
        .accepted
        .forEach(eventName => {
            console.log('Enable cookies: ' + eventName);
            dataLayer.push({'event': eventName});
        });
    options.onApply(consent.accepted);
}
