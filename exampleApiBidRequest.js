var configJSON = {
    "device": { // User’s device information. Refer to 2.2.1
        "ip": "<DEVICE_IP>",   // IPv4 address closest to device.      App
        "ua": "Po-Dunk Like Stuff",  // browser user agent string           VILOS
        "dnt": 1,               // don't track 0 unrestricted/1 don't       Optional
        "ifa": "<DEVICE_IDFA>", // Device ID, send only one of IDFA or SHA1 App
        "carrier": "Verizon Wireless", // Carrier or ISP (e.g., “VERIZON”). “WIFI” isoften used in mobile to indicate high bandwidth (e.g., video friendly vs. cellular). App
        "os": "iOS",  //                                                    App
        "osv": "5.0.1", // Device operating system version (e.g., “3.1.2”). App
        "w": 640,       // Physical width of the device screen in pixels.   App
        "h": 390,       // Physical height of the screen in pixels.         App
        "model": "iPhone", // Device model (e.g., “iPhone”).                App
        "make": "Apple",    //                                              App
        /**
         * secure property not on device in Description, but in example it does...
         */
        "secure": true,
        /**
         * this, should we allow it to be overridden via language in Vilos?
         */
        "language": "en", // Browser language using ISO-639-1-alpha-2
        "connectiontype": "Wifi", // connection type enumerated 0 - 6 [unknown, ethernet, WIFI, Cell Unknown Gen, Cell 2G, Cell 3G, Cell 4G]
        "geo": { // geo Optional
            "lat": 80.0,
            "lon": 170.0,
            "country": "us"
        },
        "ext": {    // portrait, landscape
            "orientation": "portrait"
        }
    },
    "id": "1234567893", // Unique ID of the bid request: Vendri/Vilos provided
    /**
     * The example given has imp as array, containing the object in the description, which do we send?
     */
    "imp": [    // Video impression object (only single impression per request is supported). Refer spec: section 2.2.2
        {
            /**
             * the description has a 'secure' property, but the example text doesn't.
             */
            "id": "1", // unique id for impression within this bid request Optional
            "video": {
                "w": 640, // Width of the player/screen
                "h": 480, // Height of the player/screen
                "api": [ // Amazon API, optional as you set it in the Amazon Portal
                    2
                ],
                "protocols": [ // API of Player Vpaid 1 and Vpaid 2 OPTIONAL as you set it in Amazon Portal
                    2,
                    3
                ],
                "mimes": [
                    "video/mp4", // Mimes playable on Player, OPTIONAL as you set it in Amazon Portal
                    "video/webm",
                    "application/javascript"
                ],
                "ext": {
                    "slotId": "<REGISTERED_SLOT>" // Slot ID registered with Amazon.
                }
            }
        }
    ],
    "app": {    // Publisher’s app details. (App needs to be registered with Amazon) Refer to 2.2.3
        "id": "<REGISTERED_APP>", // App ID (Registered with Amazon)
        "name": "",                 // App name (may be aliased at the publisher’s request).
        /**
         * bundle
         * A platform-specific application identifier intended to be unique to the app and independent of the exchange.
         * On Android, this should be a bundle or package name
         */
        "bundle": "sample.bundle",  //
        "domain": "domain.com" // Domain of the app (e.g., mygame.foo.com”).
    },
};