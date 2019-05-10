# Vue Geocoder
A vue.js plugin to interact with Google Maps API.

## How to initialize Vue Geocoder
A vue 2 plugin to interact with google maps api that will query the google maps API to retrieve location results.

```javascript
import Geocoder from "@pderas/vue2-geocoder";

Vue.use(Geocoder, {
    defaultCountryCode: null, // e.g. 'CA'
    defaultLanguage:    null, // e.g. 'en'
    defaultMode:        'address', // or 'lat-lng'
    googleMapsApiKey:   GOOGLE_MAPS_API_KEY
});
```
## Usage
General usage: ```Vue.$geocoder.[FUNCTION_NAME]```

##### Address Example
```javascript
Vue.$geocoder.setDefaultMode('address');      // this is default
var addressObj = {
    address_line_1: '1600 Amphitheatre Parkway',
    address_line_2: '',
    city:           'Mountain View',
    state:          'CA',               // province also valid
    zip_code:       '94043',            // postal_code also valid
    country:        'United States'
}
Vue.$geocoder.send(addressObj, response => { console.log(response) });
```

Its important to note that even if your country is set in the address object to the specified country, it is still possible to pull results from other countries. If you want to limit the results to a specific country, you must set the country code in the geocoder.
```javascript
Vue.$geocoder.setDefaultCountryCode('CA');
```
[Click here for Country Codes](https://developers.google.com/maps/coverage)

##### Lat Lng Example
```javascript
Vue.$geocoder.setDefaultMode('lat-lng');
var latLngObj = {
    lat: 37.421512,
    lng: -122.084101
}
Vue.$geocoder.send(latLngObj, response => { console.log(response) });
```

##### Language
To get result in your language you should set language code in the geocoder
```javascript
Vue.$geocoder.setDefaultLanguage('en') // this is default
```

## License
This project is covered under the MIT License. Feel free to use it wherever you like.
