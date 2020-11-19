interface Vue2GeocoderLocationObj {
    address_line_1?: string;
    address_line_2?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
}

interface Vue2GeocoderLatLngObj {
    lat: number;
    lng: number;
}

type Vue2GeocoderModes = 'lat-lng' | 'address';

// source: https://developers.google.com/maps/coverage
type Vue2GeocoderCountryCode =
    | 'AF'
    | 'AL'
    | 'DZ'
    | 'AS'
    | 'AD'
    | 'AO'
    | 'AI'
    | 'AQ'
    | 'AG'
    | 'AR'
    | 'AM'
    | 'AW'
    | 'AC'
    | 'AU'
    | 'AT'
    | 'AZ'
    | 'BS'
    | 'BH'
    | 'BD'
    | 'BB'
    | 'BY'
    | 'BE'
    | 'BZ'
    | 'BJ'
    | 'BM'
    | 'BT'
    | 'BO'
    | 'BA'
    | 'BW'
    | 'BV'
    | 'BR'
    | 'IO'
    | 'VG'
    | 'BN'
    | 'BG'
    | 'BF'
    | 'BI'
    | 'KH'
    | 'CM'
    | 'CA'
    | 'IC'
    | 'CV'
    | 'BQ'
    | 'KY'
    | 'CF'
    | 'EA'
    | 'TD'
    | 'CL'
    | 'CN'
    | 'CX'
    | 'CP'
    | 'CC'
    | 'CO'
    | 'KM'
    | 'CG'
    | 'CD'
    | 'CK'
    | 'CR'
    | 'HR'
    | 'CU'
    | 'CW'
    | 'CY'
    | 'CZ'
    | 'CI'
    | 'DK'
    | 'DG'
    | 'DJ'
    | 'DM'
    | 'DO'
    | 'EC'
    | 'EG'
    | 'SV'
    | 'GQ'
    | 'ER'
    | 'EE'
    | 'SZ'
    | 'ET'
    | 'FK'
    | 'FO'
    | 'FJ'
    | 'FI'
    | 'FR'
    | 'GF'
    | 'PF'
    | 'TF'
    | 'GA'
    | 'GM'
    | 'GE'
    | 'DE'
    | 'GH'
    | 'GI'
    | 'GR'
    | 'GL'
    | 'GD'
    | 'GP'
    | 'GU'
    | 'GT'
    | 'GG'
    | 'GN'
    | 'GW'
    | 'GY'
    | 'HT'
    | 'HM'
    | 'HN'
    | 'HK'
    | 'HU'
    | 'IS'
    | 'IN'
    | 'ID'
    | 'IR'
    | 'IQ'
    | 'IE'
    | 'IM'
    | 'IL'
    | 'IT'
    | 'JM'
    | 'JP'
    | 'JE'
    | 'JO'
    | 'KZ'
    | 'KE'
    | 'KI'
    | 'XK'
    | 'KW'
    | 'KG'
    | 'LA'
    | 'LV'
    | 'LB'
    | 'LS'
    | 'LR'
    | 'LY'
    | 'LI'
    | 'LT'
    | 'LU'
    | 'MO'
    | 'MG'
    | 'MW'
    | 'MY'
    | 'MV'
    | 'ML'
    | 'MT'
    | 'MH'
    | 'MQ'
    | 'MR'
    | 'MU'
    | 'YT'
    | 'MX'
    | 'FM'
    | 'MD'
    | 'MC'
    | 'MN'
    | 'ME'
    | 'MS'
    | 'MA'
    | 'MZ'
    | 'MM'
    | 'NA'
    | 'NR'
    | 'NP'
    | 'NL'
    | 'NC'
    | 'NZ'
    | 'NI'
    | 'NE'
    | 'NG'
    | 'NU'
    | 'NF'
    | 'KP'
    | 'MK'
    | 'MP'
    | 'NO'
    | 'OM'
    | 'PK'
    | 'PW'
    | 'PS'
    | 'PA'
    | 'PG'
    | 'PY'
    | 'PE'
    | 'PH'
    | 'PN'
    | 'PL'
    | 'PT'
    | 'PR'
    | 'QA'
    | 'RO'
    | 'RU'
    | 'RW'
    | 'RE'
    | 'WS'
    | 'SM'
    | 'SA'
    | 'SN'
    | 'RS'
    | 'SC'
    | 'SL'
    | 'SG'
    | 'SX'
    | 'SK'
    | 'SI'
    | 'SB'
    | 'SO'
    | 'ZA'
    | 'GS'
    | 'KR'
    | 'SS'
    | 'ES'
    | 'LK'
    | 'BL'
    | 'SH'
    | 'KN'
    | 'LC'
    | 'MF'
    | 'PM'
    | 'VC'
    | 'SD'
    | 'SR'
    | 'SJ'
    | 'SE'
    | 'CH'
    | 'SY'
    | 'ST'
    | 'TW'
    | 'TJ'
    | 'TZ'
    | 'TH'
    | 'TL'
    | 'TG'
    | 'TK'
    | 'TO'
    | 'TT'
    | 'TA'
    | 'TN'
    | 'TR'
    | 'TM'
    | 'TC'
    | 'TV'
    | 'UM'
    | 'VI'
    | 'UG'
    | 'UA'
    | 'AE'
    | 'GB'
    | 'US'
    | 'UY'
    | 'UZ'
    | 'VU'
    | 'VA'
    | 'VE'
    | 'VN'
    | 'WF'
    | 'EH'
    | 'YE'
    | 'ZM'
    | 'ZW'
    | 'AX';

// source: https://developers.google.com/maps/faq#languagesupport
type Vue2GeocoderLanguageCode =
    | 'af'
    | 'ja'
    | 'sq'
    | 'kn'
    | 'am'
    | 'kk'
    | 'ar'
    | 'km'
    | 'hy'
    | 'ko'
    | 'az'
    | 'ky'
    | 'eu'
    | 'lo'
    | 'be'
    | 'lv'
    | 'bn'
    | 'lt'
    | 'bs'
    | 'mk'
    | 'bg'
    | 'ms'
    | 'my'
    | 'ml'
    | 'ca'
    | 'mr'
    | 'zh'
    | 'mn'
    | 'zh-CN'
    | 'ne'
    | 'zh-HK'
    | 'no'
    | 'zh-TW'
    | 'pl'
    | 'hr'
    | 'pt'
    | 'cs'
    | 'pt-BR'
    | 'da'
    | 'pt-PT'
    | 'nl'
    | 'pa'
    | 'en'
    | 'ro'
    | 'en-AU'
    | 'ru'
    | 'en-GB'
    | 'sr'
    | 'et'
    | 'si'
    | 'fa'
    | 'sk'
    | 'fi'
    | 'sl'
    | 'fil'
    | 'es'
    | 'fr'
    | 'es-419'
    | 'fr-CA'
    | 'sw'
    | 'gl'
    | 'sv'
    | 'ka'
    | 'ta'
    | 'de'
    | 'te'
    | 'el'
    | 'th'
    | 'gu'
    | 'tr'
    | 'iw'
    | 'uk'
    | 'hi'
    | 'ur'
    | 'hu'
    | 'uz'
    | 'is'
    | 'vi'
    | 'id'
    | 'zu'
    | 'it';

// source: https://developers.google.com/maps/documentation/geocoding/overview#Types
type AddressComponentType =
    | 'street_address'
    | 'route'
    | 'intersection'
    | 'political'
    | 'country'
    | 'administrative_area_level_1'
    | 'administrative_area_level_2'
    | 'administrative_area_level_3'
    | 'administrative_area_level_4'
    | 'administrative_area_level_5'
    | 'colloquial_area'
    | 'locality'
    | 'sublocality'
    | 'neighborhood'
    | 'premise'
    | 'subpremise'
    | 'plus_code'
    | 'postal_code'
    | 'natural_feature'
    | 'airport'
    | 'park'
    | 'point_of_interest'
    | 'floor'
    | 'establishment'
    | 'landmark'
    | 'point_of_interest'
    | 'parking'
    | 'post_box'
    | 'postal_town'
    | 'room'
    | 'street_number'
    | 'bus_station';

// source: https://developers.google.com/maps/documentation/geocoding/overview#results
type LocationType =
    | 'ROOFTOP'
    | 'RANGE_INTERPOLATED'
    | 'GEOMETRIC_CENTER'
    | 'APPROXIMATE';

interface AddressComponent {
    long_name: string;
    short_name: string;
    types: AddressComponentType[];
}

interface Bound {
    lat: number;
    lng: number;
}

interface Bounds {
    northeast: Bound;
    southwest: Bound;
}

interface Location {
    lat: number;
    lng: number;
}

interface Viewport {
    northeast: Bound;
    southwest: Bound;
}

interface Geometry {
    bounds: Bounds;
    location: Location;
    location_type: LocationType;
    viewport: Viewport;
}

export interface Result {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: Geometry;
    place_id: string;
    types: string[];
}

// source: https://developers.google.com/maps/documentation/geocoding/overview#StatusCodes
type Statuses =
    | 'ZERO_RESULTS'
    | 'OK'
    | 'OVER_DAILY_LIMIT'
    | 'OVER_QUERY_LIMIT'
    | 'REQUEST_DENIED'
    | 'INVALID_REQUEST'
    | 'UNKNOWN_ERROR';

export interface Response {
    results: Result[];
    status: Statuses;
}

export interface Vue2Geocoder {
    defaultCountryCode?: Vue2GeocoderCountryCode;
    defaultLanguage?: Vue2GeocoderLanguageCode;
    defaultMode: Vue2GeocoderModes;
    googleMapsApiKey: string;
    googleMapsUrl: string;
    createRequestObject: (url: string, callback?: ((response: Response) => Promise<any>) | ((response: Response) => any) ) => XMLHttpRequest;
    getDefaultUrl: () => string;
    send: (
        dataObj: Vue2GeocoderLocationObj | Vue2GeocoderLatLngObj,
        callback?: ((response: Response) => Promise<any>) | ((response: Response) => any)
    ) => void;

    toAddressString: (locationObj?: Vue2GeocoderLocationObj) => string;

    getGoogleResponseFromAddress: (
        locationObj: Vue2GeocoderLocationObj,
        callback?: ((response: Response) => Promise<any>) | ((response: Response) => any)
    ) => void;
    getGoogleResponseFromLatLng: (
        latLngObj: Vue2GeocoderLatLngObj,
        callback?: ((response: Response) => Promise<any>) | ((response: Response) => any)
    ) => void;

    setDefaultCountryCode: (code: Vue2GeocoderCountryCode) => void;
    setDefaultLanguage: (code: Vue2GeocoderLanguageCode) => void;
    setDefaultMode: (mode: Vue2GeocoderModes) => void;
    setGoogleMapsApiKey: (key: string) => void;

    getDefaultCountryCode: () => Vue2GeocoderCountryCode;
    getDefaultLanguage: () => Vue2GeocoderLanguageCode;
    getDefaultMode: () => Vue2GeocoderModes;
    getGoogleMapsApiKey: () => string;
}
