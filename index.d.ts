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

export interface Vue2Geocoder {
    defaultCountryCode?: Vue2GeocoderCountryCode;
    defaultLanguage?: Vue2GeocoderLanguageCode;
    defaultMode: Vue2GeocoderModes;
    googleMapsApiKey: string;
    googleMapsUrl: string;
    createRequestObject: (url: string, callback?: () => any) => XMLHttpRequest;
    getDefaultUrl: () => string;
    send: (
        dataObj: Vue2GeocoderLocationObj | Vue2GeocoderLatLngObj,
        callback?
    ) => void;

    toAddressString: (locationObj: Vue2GeocoderLocationObj) => string;

    getGoogleResponseFromAddress: (
        locationObj: Vue2GeocoderLocationObj,
        callback?: () => any
    ) => void;
    getGoogleResponseFromLatLng: (
        latLngObj: Vue2GeocoderLatLngObj,
        callback?: () => any
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
