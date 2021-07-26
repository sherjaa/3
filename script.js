alert('Kvadrat tenglamani kirgizing')
let a = parseInt(prompt('a ' + 'son'));
let b = parseInt(prompt('b ' + 'son'));
let c = parseInt(prompt('c ' + 'son'));
let D = (b*b) - (4 * a * c);
let W = Math.sqrt(D);
let x1 = (-b + W) / (2*a);
let x2 = (-b - W) / (2*a);
let yechim1 = 'Yechimda 2 ta ildiz bor';
let yechim2 = 'Yechimda 1 ta ildiz bor';
let yechim3 = 'Tenglama yechimga ega emas';
let misol = document.querySelector('.misol');
misol.innerHTML = a +('x<sup>2</sup>+') + b +('x+') + c + '=0'
let masala = document.querySelector('.masala');
let yechimi = document.querySelector('.yechimi');
let x1h1 = document.querySelector('.x1');
let x2h1 = document.querySelector('.x2');
let Discremenant = document.querySelector('.Discremenant');

if (D > 0){
    yechimi.textContent = yechim1
    Discremenant.innerHTML = ('D=b<sup>2</sup>-4•a•c=' + b + '<sup>2</sup>-4•'+ a  + '•' + c + '=' + D)
    x1h1.innerHTML = ('x<sub>1</sub>= ')+ x1;
    x2h1.innerHTML = ('x<sub>2</sub>= ')+ x2;
    alert(x1);
    alert(x2);
} else if (0 === D){
    yechimi.textContent = yechim2;
    Discremenant.innerHTML = ('D=b<sup>2</sup>-4•a•c=' + b + '<sup>2</sup>-4•'+ a  + '•' + c + '=' + D)


    x1h1.innerHTML = ('x<sub>1</sub>= ')+ x1;
    alert(x1);
} else {
    yechimi.textContent = yechim3;
    Discremenant.innerHTML = ('D=b<sup>2</sup>-4•a•c=' + b + '<sup>2</sup>-4•'+ a  + '•' + c + '=' + D)
    x1h1.innerHTML = ('<b>ø</b>');
}
let murojat = document.querySelector('.murojat');
murojat.innerHTML = '<a href="https://t.me/sherja_0417"><i class="bx bxl-telegram"></i></a>';
