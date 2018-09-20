import _ from 'lodash';
import './style.css' ;

let a = 1;
alert(a);

function component() {
    let element = document.createElement('div');
  
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());

