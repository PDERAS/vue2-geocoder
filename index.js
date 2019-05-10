export default {
    install(Vue, options) {
        Vue.$geocoder = Vue.prototype.$geocoder = {
            defaultCountryCode: options.defaultCountryCode || null,
            defaultLanguage:    options.defaultLanguage || null,
            defaultMode:        options.defaultMode == 'lat-lng' ? 'lat-lng' : 'address',
            googleMapsApiKey:   options.googleMapsApiKey,
            googleMapsUrl:      'https://maps.googleapis.com/maps/api/geocode/json',

            createRequestObject(url, callback = null) {
                var xhr = new XMLHttpRequest();

                /* Register callback functions */
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        if (callback) {
                            callback(xhr.response);
                        }
                    }
                }

                xhr.responseType = "json";
                xhr.open("GET", url);

                return xhr;
            },

            getDefaultUrl() {
                var url = this.googleMapsUrl;

                url += "?key=" + encodeURIComponent(this.googleMapsApiKey);
                if (this.defaultCountryCode) {
                    url += "&components=country:" + this.defaultCountryCode;
                }
                if (this.defaultLanguage) {
                    url += "&language=" + this.defaultLanguage;
                }

                return url;
            },

            send(dataObj, callback = null) {
                switch (this.defaultMode) {
                    case 'lat-lng':
                        this.getGoogleResponseFromLatLng(dataObj, callback);
                        break;

                    case 'address':
                    default:
                        this.getGoogleResponseFromAddress(dataObj, callback);
                        break;
                }
            },

            getGoogleResponseFromAddress(locationObj, callback = null) {
                var address  = this.toAddressString(locationObj);
                var url = this.getDefaultUrl();

                /* Add query parameters */
                url += "&address=" + encodeURIComponent(address);

                var xhr = this.createRequestObject(url, callback)
                xhr.send();
            },

            getGoogleResponseFromLatLng(latLngObj, callback = null) {
                var url = this.getDefaultUrl();

                /* Add query parameters */
                url += "&latlng=" + encodeURIComponent(latLngObj.lat) + "," + encodeURIComponent(latLngObj.lng);

                var xhr = this.createRequestObject(url, callback)
                xhr.send();
            },

            toAddressString(locationObj) {
                var addressStr = '';
                if (locationObj) {
                    addressStr += locationObj.address_line_1 ? locationObj.address_line_1 + ' ' : '';
                    addressStr += locationObj.address_line_2 ? locationObj.address_line_2 + ' ' : '';
                    addressStr += locationObj.city ? locationObj.city + ', ' : '';
                    if (locationObj.province || locationObj.postal_code) {
                        addressStr += locationObj.province ? locationObj.province + ', ' : '';
                        addressStr += locationObj.postal_code ? locationObj.postal_code + ', ' : '';
                    } else {
                        addressStr += locationObj.state ? locationObj.state + ', ' : '';
                        addressStr += locationObj.zip_code ? locationObj.zip_code + ', ' : '';
                    }
                    addressStr += locationObj.country ? locationObj.country: '';
                }
                return addressStr;
            },

            setDefaultCountryCode(code) {
                this.defaultCountryCode = code;
            },

            setDefaultLanguage(code) {
                this.defaultLanguage = code;
            },

            setDefaultMode(mode) {
                this.defaultMode = mode == 'address' ? mode : 'lat-lng';
            },

            setGoogleMapsApiKey(key) {
                this.googleMapsApiKey = key;
            },

            getDefaultCountryCode() {
                return this.defaultCountryCode;
            },

            getDefaultLanguage() {
                return this.defaultLanguage;
            },

            getDefaultMode() {
                return this.defaultMode;
            },

            getGoogleMapsApiKey() {
                return this.googleMapsApiKey;
            }
        }
    }
}
