# gdpr-cookies-consent-gtm

Shows a configurable form for the user to accept or reject the cookies.  
It uses Google Tag Manager custom triggers to enable each of the cookies types.

User preferences will be stored in localStorage. When the page is loaded it will check if the localStorage object contains the cookies preferences. If the preferences are found (and the version is the same as the one configures) it will be applied. Otherwise the dialog will be shown to the user.

Written without other libraries dependencies.

## Getting Started

### Prerequisites

Create an account in Google Tag Manager and setup the optional tags for your site to be enabled with a custom trigger.  
You can use more than one trigger, to separate the different types of cookies.  


### Installing

Add _dist/gdpr-cookies-consent-gtm.js_ and _dist/gdpr-cookies-consent-gtm.css_ to your project.

Add the following script to your html pages:
```
<script>
    window.addEventListener('load', function() {
        CookiesConsent({
            // options
        });
    });
</script>
```

Add the following markup as well:
```
<div id="cookies-consent">
    <button type="button" class="close">&#10060;</button>
    <p>
        Our <a href="#">Cookie Policy</a> and <a href="#">Privacy Policy</a> outline how we use cookies to help optimize service, personalize content, tailor and measure our marketing, and improve your user experience. I agree to use of cookies for
        these purposes.
    </p>
    <p class="details">
        <label><input type="checkbox" checked name="cookies-tracking" /> Tracking</label>
        <label><input type="checkbox" checked name="cookies-statistics" /> Statistics</label>
    </p>
    <p style="text-align: right;">
        <button type="button" class="accept">Agree</button>
        <button type="button" class="reject">No</button>
        <button type="button" class="details">Details</button>
    </p>
</div>
```

Customize the html markup and style to match your preferences and use case.  
Each checkbox correspond to one type of cookie. The name property will be used as event name of GTM to be triggered.  

If your use case is just a matter of accepting or rejecting the cookies and don't intend the user to select a subset of cookies, you can exclude de details parts of the markdown (but keep at least one hidden checkbox with the name for the event).

#### Options
option  |  description  |  default
--|---|--
storageKey | attribute name in localStorage where to store the user selection | 'cookies-consent'
element | selector for the DOM element that will contain the consent form | '#cookies-consent'
cookiesCheckbox | selector for the cookies checkboxes |  'input[type="checkbox"]'
visibleClass | class to be added to the element that will make it visible | 'visible'
showDetailsClass | class to be added to the element in order to make the details visible | 'show-details'
version | cookies configuration version; if you change the configuration and want to force the user to use the consent form again, change the value | 0
closeButton | close button selector; if clicked will hide the dialog without any changes | '.close'
acceptButton | accept button selector; if clicked the current selection will be saved and applied | 'button.accept'
rejectButton | reject button selector; if clicked, all checkboxes will be unchecked, the preferences will be saved and applied | 'button.reject'
detailsButton | details button selector; will add the _showDetailsClass_ to the element in order to make the details visible | 'button.details'


## Authors

* **Pedro Serra** - *Initial work*  
