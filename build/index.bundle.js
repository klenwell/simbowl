'use strict';

var _Sumobo = require('./Sumobo');

var _Sumobo2 = _interopRequireDefault(_Sumobo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = document.getElementById('sumobo');
var sumobo = new _Sumobo2.default(container);
sumobo.run();
