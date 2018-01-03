var amazonSdkRequirement = {
  "imp": {// spec has this Object, this is array with object inside of it!
    // spec has secure property boolean here, but in the example object, it's in the device object?
  },
  "app": {
    "id": "Registered App ID",
    "name": "Registered app name",
    /**
     * bundle
     * A platform-specific application identifier
     intended to be unique to the app and
     independent of the exchange. On Android,
     this should be a bundle or package name
     (e.g., “mygame.foo.com”)
     */
    "bundle": "sample.bundle",
    "domain": "domain.com"
  },
  "device": {
    "ip": "IPv4 address closest to device. ", // required
    "dnt": 1, // optional Do Not track flag 0 unrestricted, 1 do not track
    "ifa": "Device ID, send only one of IDFA or SHA1",
    "carrier": "Verizon Wireless",
    "os": "iOS",
    "osv": "5.0.1",
    "w":"NUMBER: Physical width of the screen in pixels.",
    "h":"NUMBER: Physical height of the screen in pixels.",
    "model": "iPhone",
    "make": "Apple",
    "secure":true, // shold this be in the impression like in spec or left down here in device or in both?
    "language": "en", // ISO-639-1-alpha2 language code
    /**
     * connectiontype
     * in the spec is enumerated with integers expressing type of a connection, NOT a string like in the given example
     * 0: unknown
     * 1: Ethernet
     * 2: Wifi
     * 3: Cellular Network Unknown Generation
     * 4: Cell 2G
     * 5: Cell 3G
     * 6: Cell 4G
     */
    "connectiontype": "Wifi",
    "geo":{  // optional
      "lat":80.0, // +/- 90, negative is South
      "lon":170.0, // +/- 180, negative is West
      "country" : "us" // Country code using ISO-3166-1-alpha-3, spec says three digit, USA, but example has 2 digit?.
    },
  }
};

