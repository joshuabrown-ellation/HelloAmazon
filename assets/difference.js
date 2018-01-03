/**
 * comparing the Vilos config object with requirements for the Amazon SDK:
 * we are missing one required property in the Vilos Default object:
 *   bundle:    application identifier, once we know this we might need to modify the Vilos Config Object,
 *              but it might be identified by pageUrl or path or something.
 *
 *   As far as the other properies needed for Amazon SDK, we are missing all of the below in the current client Config from Android.
 *   I broke my iOS environment, so haven't checked iOS yet.
 */

// Vilos's device object
var device = {
  "id": null,                       // "ifa": "Device ID, send only one of IDFA or SHA1",
  "type": null,                     // not in Amazon Spec
  "advertising_id": null,           // not in Amazon Spec
  "ad_tracking_enabled": null,      // "dnt": 1, // optional Do Not track flag 0 unrestricted, 1 do not track
  "manufacturer": null,             // "make": "Apple",
  "model": null,                    // "model": "iPhone",
  "name": null,                     // not in Amazon Spec
  "ip": null,                       // "ip": "IPv4 address closest to device. ", // required
  "locale": null,                   // for geo: "country" : "us" // Country code using ISO-3166-1-alpha-3, spec says three digit but example has 2 digit for geo object.
  "network_bluetooth": null,        // not in Amazon Spec
  "network_carrier": null,          // "carrier": "String name",
  "network_cellular": null,         // for "connectionType" which is in terms of wifi, ethernet, 2G, 3G, 4G, unknown
  "network_wifi": null,             // for "connectionType

  "os_name": null,                  // "os": "iOS",
  "os_version": null,               // "osv": "5.0.1",
  "screen_density": null,           // not in Amazon Spec
  "screen_height": null,            // "h":"NUMBER: Physical height of the screen in pixels.",
  "screen_width": null,             // "w":"NUMBER: Physical width of the screen in pixels.",
  "traits": null,                   // not in Amazon Spec
  "user_agent": null,               // "ua": "User Agent String",
  "timezone": null,                 // not in Amazon Spec
  "location_latitude": null,        // for geo object
  "location_longitude": null,       // for geo object
  "location_speed": null,           // not in Amazon Spec
};

// Vilos's app object
var app = {
  "id": null,                       // "id": "Registered App ID",
  "name": null,                     // "name": "Registered app name",
  "version": null,                  // not in Amazon Spec
  "build": null,                    // not in Amazon Spec
  "library_name": null,             // not in Amazon Spec
  "library_version": null,          // not in Amazon Spec
  "page_path": null,                // not in Amazon Spec
  "page_search": null,              // not in Amazon Spec
  "page_title": null,               // not in Amazon Spec
  "page_url": null,                 // for "domain"
  "page_hash": null,                // not in Amazon Spec

  "bundle": "",                     // currently not in Vilos Default, A platform-specific application identifier, unique to the app and independent of the exchange
};
