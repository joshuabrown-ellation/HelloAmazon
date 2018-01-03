var amazonSdkRequirement = {
  "id": "Unique ID of the bid request",
  "imp": {// spec has this Object, this is array with object inside of it!
    "id": "1", // Optional
    "video": {
      "w": "NUMBER: Width of the player/screen.",
      "h": "NUMBER: Height of the player/screen.",
      "api": [ // OPTIONAL! Vpaid API level, 1 or 2, only use here if overriding portal settings.
        2
      ],
      "protocols": [ // OPTIONAL! array of Vast level #'s, only use here if overriding portal settings.
        2,
        3
      ],
      "mimes": [ // OPTIONAL! the mime types supported by the ad player, only use here if overriding portal settings.
        "video/mp4",
        "video/webm",
        "application/javascript"
      ],
      "ext": {
        "slotId": "Registered slot name, like videoSlot"
      }
    }
    /**
     * secure
     * spec property: integer 0,1
     * 0 insecure,
     * 1 secure here,
     *
     * in the example they provide there is a secure property boolean in the device object?
     */
    //
  },
  "app": {
    "id": "Registered App Name",
    "name": "",
    "bundle": "sample.bundle",
    "domain": "domain.com"
  },
  "device": {
    "ip": "IPv4 address closest to device. ", // required
    "ua": "User Agent String",
    "dnt": 1, // optional Do Not track flag 0 unrestricted, 1 do not track
    "ifa": "Device ID, send only one of IDFA or SHA1",
    "carrier": "Verizon Wireless",
    "os": "iOS",
    "osv": "5.0.1",
    "w": "NUMBER: Physical width of the screen in pixels.",
    "h": "NUMBER: Physical height of the screen in pixels.",
    "model": "iPhone",
    "make": "Apple",
    "secure": true, // shold this be in the impression like in spec or left down here in device or in both?
    "language": "en", // ISO-639-1-alpha2 language code
    /**
     * connectiontype
     * in the spec is enumerated with integers expressing type of a connection, NOT a string like in the given example
     * in the example it's lower cased, but in the spec is camelCased
     * 0: unknown
     * 1: Ethernet
     * 2: Wifi
     * 3: Cellular Network Unknown Generation
     * 4: Cell 2G
     * 5: Cell 3G
     * 6: Cell 4G
     */
    "connectiontype": "Wifi",
    "geo": {  // optional
      "lat": 80.0, // +/- 90, negative is South
      "lon": 170.0, // +/- 180, negative is West
      "country": "us" // Country code using ISO-3166-1-alpha-3, spec says three digit, USA, but example has 2 digit?.
    },
    "ext": { // this property is mandatory, but the value inside it is optional in the spec?
      "orientation": "portrait" // optional
    }
  }
};

var exampleBidResponse = {
  "cur": "USD",
  "id": "1234567",
  "seatbid": [ // spec shows this to be an object, but example shows this as an array
    {
      "bid": [ // spec shows this to be an object, but example shows this as an array
        {
          "ext": {
            "targeting": {
              "b": ["123"],
              "amznslots": ["abc123"],
              "amznp": ["lncr9c"],
              "creativeURL": [
                "https://aax-us-pdx.amazonadsystem.com/e/mdtb/vast?b=QkBkjNJBlAJp6GCZ1PH8unIAAAFeXsTAEgAAAA-qAsvF2JE"
              ]
            }
          },
          "impid": "123"
        }
        // spec describes a crid property: Creative ID encrypted with exchanged keys
      ]
    }
  ]
};

