!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e["k-intl"]=e["k-intl"]||{},e["k-intl"].mk=n())}(this,function(){"use strict";return[{locale:"mk",pluralRuleFunction:function(e,n){var t=String(e).split("."),i=t[0],o=t[1]||"",l=!t[1],u=i.slice(-1),r=i.slice(-2),c=o.slice(-1);return n?1==u&&11!=r?"one":2==u&&12!=r?"two":7!=u&&8!=u||17==r||18==r?"other":"many":l&&1==u||1==c?"one":"other"}}]});
