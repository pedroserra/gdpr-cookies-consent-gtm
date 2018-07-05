export default function(options, consent) {
    consent
        .accepted
        .forEach(eventName => {
            dataLayer.push({'event': eventName});
        });
}
