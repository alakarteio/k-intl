!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].shi=n())}(this,function(){"use strict";return[{locale:"shi",pluralRuleFunction:function(e,n){var t=String(e).split("."),i=Number(t[0])==e;return n?"other":e>=0&&e<=1?"one":i&&e>=2&&e<=10?"few":"other"}},{locale:"shi-Latn",pluralRuleFunction:function(e,n){return"other"}},{locale:"shi-Tfng",parentLocale:"shi"}]});
