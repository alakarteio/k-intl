!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].cs=n())}(this,function(){"use strict";return[{locale:"cs",pluralRuleFunction:function(e,n){var t=String(e).split("."),o=t[0],i=!t[1];return n?"other":1==e&&i?"one":o>=2&&o<=4&&i?"few":i?"other":"many"}}]});
