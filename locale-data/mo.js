!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].mo=n())}(this,function(){"use strict";return[{locale:"mo",pluralRuleFunction:function(e,n){var t=String(e).split("."),o=!t[1],i=Number(t[0])==e&&t[0].slice(-2);return n?1==e?"one":"other":1==e&&o?"one":!o||0==e||1!=e&&i>=1&&i<=19?"few":"other"}}]});
