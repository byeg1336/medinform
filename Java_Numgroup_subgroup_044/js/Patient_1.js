class Patient {
constructor(f, i, o, d, s, sh) {
this.F = f;
this.I = i;
this.O = o;
this.D = new Date(d);
this.S = s;
this.SH = sh;
}
setById() {
document.getElementById("F").textContent = this.F;
document.getElementById("I").textContent = this.I;
document.getElementById("O").textContent = this.O;
document.getElementById("Y").textContent = this.D.getFullYear();
document.getElementById("S").textContent = this.S;
document.getElementById("SH").textContent = this.SH;
}
}
let Petrov = new Patient('Петров', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Назначено");
Petrov.setById();
/*let Ivanov = new Patient('Иванов', 'Сергей', 'Сергеевич', new Date(2005, 10, 12), "м", "Назначено");
Ivanov.setById();*/
/*let Divin = new Patient('Дивин', 'Артем', 'Викторович', new Date(2005, 9, 4), "м", "Назначено");
Divin.setById();*/