import * as rxjs from 'rxjs';

let x = rxjs.of(1, 2, 3);
x.subscribe(data => console.log(data))