!function(e,l){"object"==typeof exports&&"undefined"!=typeof module?module.exports=l():"function"==typeof define&&define.amd?define(l):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].sr=l())}(this,function(){"use strict";return[{locale:"sr",pluralRuleFunction:function(e,l){var r=String(e).split("."),n=r[0],t=r[1]||"",o=!r[1],a=n.slice(-1),c=n.slice(-2),s=t.slice(-1),i=t.slice(-2);return l?"other":o&&1==a&&11!=c||1==s&&11!=i?"one":o&&a>=2&&a<=4&&(c<12||c>14)||s>=2&&s<=4&&(i<12||i>14)?"few":"other"}},{locale:"sr-Cyrl",parentLocale:"sr"},{locale:"sr-Cyrl-BA",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-ME",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-XK",parentLocale:"sr-Cyrl"},{locale:"sr-Latn",pluralRuleFunction:function(e,l){return"other"}},{locale:"sr-Latn-BA",parentLocale:"sr-Latn"},{locale:"sr-Latn-ME",parentLocale:"sr-Latn"},{locale:"sr-Latn-XK",parentLocale:"sr-Latn"}]});