!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].mt=t())}(this,function(){"use strict";return[{locale:"mt",pluralRuleFunction:function(e,t){var n=String(e).split("."),i=Number(n[0])==e&&n[0].slice(-2);return t?"other":1==e?"one":0==e||i>=2&&i<=10?"few":i>=11&&i<=19?"many":"other"}}]});
