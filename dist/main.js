(()=>{"use strict";function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(e){t(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===n(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function o(e){t(1,arguments);var n=r(e),a=n.getUTCDay(),o=(a<1?7:0)+a-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function i(e){t(1,arguments);var n=r(e),a=n.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var u=o(i),l=new Date(0);l.setUTCFullYear(a,0,4),l.setUTCHours(0,0,0,0);var s=o(l);return n.getTime()>=u.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}var u={};function l(){return u}function s(e,n){var o,i,u,s,d,c,m,f;t(1,arguments);var h=l(),g=a(null!==(o=null!==(i=null!==(u=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==u?u:h.weekStartsOn)&&void 0!==i?i:null===(m=h.locale)||void 0===m||null===(f=m.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==o?o:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),w=v.getUTCDay(),y=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-y),v.setUTCHours(0,0,0,0),v}function d(e,n){var o,i,u,d,c,m,f,h;t(1,arguments);var g=r(e),v=g.getUTCFullYear(),w=l(),y=a(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==i?i:null===(f=w.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==o?o:1);if(!(y>=1&&y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setUTCFullYear(v+1,0,y),b.setUTCHours(0,0,0,0);var p=s(b,n),S=new Date(0);S.setUTCFullYear(v,0,y),S.setUTCHours(0,0,0,0);var T=s(S,n);return g.getTime()>=p.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}function c(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const m=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return c("yy"===e?r%100:r,e.length)},f=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):c(n+1,2)},h=function(t,e){return c(t.getUTCDate(),e.length)},g=function(t,e){return c(t.getUTCHours()%12||12,e.length)},v=function(t,e){return c(t.getUTCHours(),e.length)},w=function(t,e){return c(t.getUTCMinutes(),e.length)},y=function(t,e){return c(t.getUTCSeconds(),e.length)},b=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return c(Math.floor(r*Math.pow(10,n-3)),e.length)};var p={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m(t,e)},Y:function(t,e,n,r){var a=d(t,r),o=a>0?a:1-a;return"YY"===e?c(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):c(o,e.length)},R:function(t,e){return c(i(t),e.length)},u:function(t,e){return c(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return c(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return c(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return f(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return c(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,n,o,i){var u=function(e,n){t(1,arguments);var o=r(e),i=s(o,n).getTime()-function(e,n){var r,o,i,u,c,m,f,h;t(1,arguments);var g=l(),v=a(null!==(r=null!==(o=null!==(i=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(c=n.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(f=g.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1),w=d(e,n),y=new Date(0);return y.setUTCFullYear(w,0,v),y.setUTCHours(0,0,0,0),s(y,n)}(o,n).getTime();return Math.round(i/6048e5)+1}(e,i);return"wo"===n?o.ordinalNumber(u,{unit:"week"}):c(u,n.length)},I:function(e,n,a){var u=function(e){t(1,arguments);var n=r(e),a=o(n).getTime()-function(e){t(1,arguments);var n=i(e),r=new Date(0);return r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0),o(r)}(n).getTime();return Math.round(a/6048e5)+1}(e);return"Io"===n?a.ordinalNumber(u,{unit:"week"}):c(u,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):h(t,e)},D:function(e,n,a){var o=function(e){t(1,arguments);var n=r(e),a=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=a-n.getTime();return Math.floor(o/864e5)+1}(e);return"Do"===n?a.ordinalNumber(o,{unit:"dayOfYear"}):c(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return c(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var a=t.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return c(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return c(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,a=t.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,a=t.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):v(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):c(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):w(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):y(t,e)},S:function(t,e){return b(t,e)},X:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();if(0===a)return"Z";switch(e){case"X":return T(a);case"XXXX":case"XX":return C(a);default:return C(a,":")}},x:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return T(a);case"xxxx":case"xx":return C(a);default:return C(a,":")}},O:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(a,":");default:return"GMT"+C(a,":")}},z:function(t,e,n,r){var a=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(a,":");default:return"GMT"+C(a,":")}},t:function(t,e,n,r){var a=r._originalDate||t;return c(Math.floor(a.getTime()/1e3),e.length)},T:function(t,e,n,r){return c((r._originalDate||t).getTime(),e.length)}};function S(t,e){var n=t>0?"-":"+",r=Math.abs(t),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=e||"";return n+String(a)+i+c(o,2)}function T(t,e){return t%60==0?(t>0?"-":"+")+c(Math.abs(t)/60,2):C(t,e)}function C(t,e){var n=e||"",r=t>0?"-":"+",a=Math.abs(t);return r+c(Math.floor(a/60),2)+n+c(a%60,2)}const M=p;var k=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},D=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},x={p:D,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return k(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",k(a,e)).replace("{{time}}",D(o,e))}};const P=x;var U=["D","DD"],E=["YY","YYYY"];function L(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var W,O={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function j(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var a=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=t.formattingValues[o]||t.formattingValues[a]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[u]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function H(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;var i,u=o[0],l=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(l)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(l):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(l);return i=t.valueCallback?t.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const F={code:"en-US",formatDistance:function(t,e,n){var r,a=q[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:O,formatRelative:function(t,e,n,r){return Y[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:j({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:j({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:j({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:j({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:j({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(W={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(W.matchPattern);if(!n)return null;var r=n[0],a=t.match(W.parsePattern);if(!a)return null;var o=W.valueCallback?W.valueCallback(a[0]):a[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(r.length)}}),era:H({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:H({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:H({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:H({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:H({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var I=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,z=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,Q=/''/g,A=/[a-zA-Z]/;function G(n,o,i){var u,s,d,c,m,f,h,g,v,w,y,b,p,S,T,C,k,D;t(2,arguments);var x=String(o),q=l(),N=null!==(u=null!==(s=null==i?void 0:i.locale)&&void 0!==s?s:q.locale)&&void 0!==u?u:F,W=a(null!==(d=null!==(c=null!==(m=null!==(f=null==i?void 0:i.firstWeekContainsDate)&&void 0!==f?f:null==i||null===(h=i.locale)||void 0===h||null===(g=h.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:q.firstWeekContainsDate)&&void 0!==c?c:null===(v=q.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==d?d:1);if(!(W>=1&&W<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=a(null!==(y=null!==(b=null!==(p=null!==(S=null==i?void 0:i.weekStartsOn)&&void 0!==S?S:null==i||null===(T=i.locale)||void 0===T||null===(C=T.options)||void 0===C?void 0:C.weekStartsOn)&&void 0!==p?p:q.weekStartsOn)&&void 0!==b?b:null===(k=q.locale)||void 0===k||null===(D=k.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==y?y:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!N.localize)throw new RangeError("locale must contain localize property");if(!N.formatLong)throw new RangeError("locale must contain formatLong property");var Y=r(n);if(!function(n){if(t(1,arguments),!function(n){return t(1,arguments),n instanceof Date||"object"===e(n)&&"[object Date]"===Object.prototype.toString.call(n)}(n)&&"number"!=typeof n)return!1;var a=r(n);return!isNaN(Number(a))}(Y))throw new RangeError("Invalid time value");var j=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(Y),H=function(e,n){return t(2,arguments),function(e,n){t(2,arguments);var o=r(e).getTime(),i=a(n);return new Date(o+i)}(e,-a(n))}(Y,j),G={firstWeekContainsDate:W,weekStartsOn:O,locale:N,_originalDate:Y};return x.match(z).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,P[e])(t,N.formatLong):t})).join("").match(I).map((function(t){if("''"===t)return"'";var e,r,a=t[0];if("'"===a)return(r=(e=t).match(J))?r[1].replace(Q,"'"):e;var u,l=M[a];if(l)return null!=i&&i.useAdditionalWeekYearTokens||(u=t,-1===E.indexOf(u))||L(t,o,String(n)),null!=i&&i.useAdditionalDayOfYearTokens||!function(t){return-1!==U.indexOf(t)}(t)||L(t,o,String(n)),l(H,t,N.localize,G);if(a.match(A))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}const X=function(t,e){let n=document.querySelector(".projects"),r=document.createElement("div");r.classList.add("projediv"),r.classList.add(`${e}`),r.innerHTML=e,n.appendChild(r)},B=function(t,e){let n=t.length;for(let r=0;r<n;r++){const n=document.querySelector(".jobs");let a=document.createElement("div");a.classList.add("job"),a.classList.add(e),a.classList.add(r);let o=document.createElement("div"),i=document.createElement("div"),u=document.createElement("div"),l=document.createElement("div"),s=document.createElement("button"),d=document.createElement("button");s.innerHTML="Delete",s.classList.add(e),s.classList.add(r),s.classList.add("deltask"),s.addEventListener("click",(function(t){let n=t.target.classList[0],r=t.target.classList[1];rt(n,r),V();let a=nt(e);B(a,e)})),d.innerHTML="Edit",d.classList.add(e),d.classList.add(r),d.classList.add("editask"),d.addEventListener("click",(function(t){console.log("jhkd"),t.target.classList[0],t.target.classList[1],document.querySelector(".editt").classList.toggle("formviss"),document.querySelector(".edittsub").addEventListener("click",(function(t){let n,a,o;n=document.querySelector(".a");let i=n.value;a=document.querySelector(".b");let u=a.value;o=document.querySelector(".c");let l=o.value,s=G(new Date(l),"yyyy-MM-dd");n=document.querySelector(".a");let d=n.value;at({title:i,details:u,dat:s,priority:d},e,r),V();let c=nt(e);B(c,e)}))})),o.innerHTML=t[r].title,i.innerHTML=t[r].details,u.innerHTML=t[r].dat,l.innerHTML=t[r].priority,a.appendChild(o),a.appendChild(i),a.appendChild(u),a.appendChild(l),a.append(s),a.append(d),n.appendChild(a)}},R=function(t,e){document.querySelector(`.${e}`).addEventListener("click",(function(t){console.log("hi"),V();let n=nt(e);B(n,e)}))},V=function(){document.querySelector(".jobs").replaceChildren();var t=document.createElement("div");t.className="editt";var e=document.createElement("input");e.type="text",e.placeholder="Title",e.className="a",t.appendChild(e);var n=document.createElement("input");n.type="text",n.placeholder="Description",n.className="b",t.appendChild(n);var r=document.createElement("input");r.type="date",r.className="c",t.appendChild(r);var a=document.createElement("input");a.type="text",a.placeholder="Priority",a.className="d",t.appendChild(a);var o=document.createElement("button");o.innerHTML="Submit",o.className="edittsub",t.appendChild(o),document.querySelector(".jobs").appendChild(t)};let _={},$=[],K="main";const Z=function(t,e,n,r){return{title:t,details:e,dat:G(new Date(n),"yyyy-MM-dd"),priority:r}},tt=function(t){let e=!1;for(let n=0;n<$.length;n++)$[n]==t&&(e=!0);return 0==e&&$.push(t),_[t]=[],localStorage.setItem("mlist",JSON.stringify($)),[]},et=function(t,e,n){t.push(e),_[n].push(e),localStorage.getItem("master")?(localStorage.removeItem("master"),localStorage.setItem("master",JSON.stringify(_))):localStorage.setItem("master",JSON.stringify(_))},nt=function(t){let e=_[t];return console.log(_),K=t,ot(),e},rt=function(t,e){console.log(_[t]),_[t].splice(e,1),localStorage.removeItem("master"),localStorage.setItem("master",JSON.stringify(_))},at=function(t,e,n){_[e][n]=t,localStorage.removeItem("master"),localStorage.setItem("master",JSON.stringify(_))},ot=function(){localStorage.setItem("currentProj",K),localStorage.setItem("mlist",JSON.stringify($))};!function(){!function(){localStorage.getItem("master")&&(_=JSON.parse(localStorage.getItem("master")),K=localStorage.getItem("currentProj")),localStorage.getItem("mlist")?$=JSON.parse(localStorage.getItem("mlist")):localStorage.setItem("mlist",JSON.stringify($));for(let t=0;t<$.length;t++){let e;e=_[$[t]],X(0,$[t]),B(e,$[t]),R(0,$[t])}}(),ot();let t=tt("main"),e=Z("job","to code","2023-09-09","high");et(t,e,"main");let n=Z("job","to not code","2023-09-09","high");et(t,n,"main");let r=Z("job","to not code","2023-09-09","high");et(t,r,"main"),X(0,"main"),B(t,"main"),R(0,"main"),document.querySelector(".add").addEventListener("click",(function(){document.querySelector("form.to").classList.add("formVis")})),document.querySelector(".close").addEventListener("click",(function(){let t=function(t){return et([],t,K),localStorage.removeItem("master"),localStorage.setItem("master",JSON.stringify(_)),_[K]}(function(){let t,e,n,r;t=document.querySelector(".n");let a=t.value;e=document.querySelector(".d");let o=e.value;n=document.querySelector(".da");let i=n.value,u=G(new Date(i),"yyyy-MM-dd");return r=document.querySelector(".p"),{title:a,details:o,dat:u,priority:r.value}}());V(),B(t,K),document.querySelector("form.to").classList.remove("formVis")})),document.querySelector(".adpr").addEventListener("click",(function(){document.querySelector(".pr").classList.add("formVis")})),document.querySelector(".closepr").addEventListener("click",(function(){let t=document.querySelector("#tnam").value,e=tt(t);X(0,t),B(e,t),R(0,t),document.querySelector(".pr").classList.remove("formVis")}))}()})();