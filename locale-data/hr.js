!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].hr=t())}(this,function(){"use strict";return[{locale:"hr",pluralRuleFunction:function(e,t){var n=String(e).split("."),i=n[0],o=n[1]||"",l=!n[1],r=i.slice(-1),c=i.slice(-2),u=o.slice(-1),f=o.slice(-2);return t?"other":l&&1==r&&11!=c||1==u&&11!=f?"one":l&&r>=2&&r<=4&&(c<12||c>14)||u>=2&&u<=4&&(f<12||f>14)?"few":"other"}},{locale:"hr-BA",parentLocale:"hr"}]});
