// require : CommonJS 스펙의 모듈 가져오기
//var _ = require('lodash');
import  _ from 'lodash';
// named import : {} 안에 동일한 이름을 명시
import {area, circumference} from './js/circle';

// default import : {}없고 이름을 바꿀 수 있다.
import cube1 from './js/cube';

import './style.css';
import './hello.scss';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

	return element;
}

console.log(">>>>>> area - ", area(5), circumference(5));
console.log(">>>>>> cube - ", cube1.volume(5));

document.body.appendChild(component());
