class Patient {
    constructor (second_name, first_name, patronymic, d, sex, status) {
this.second_name = second_name;
this.first_name = first_name;
this.patronymic = patronymic;
this.Date = new Date(d);
this.sex = sex;
this.status = status;
    }
    setById () {
        document.getElementById("F").textContent =this.first_name;
        document.getElementById("I").textContent =this.second_name;
        document.getElementById("O").textContent =this.patronymic;
        document.getElementById("Y").textContent =this.Date.getFullYear();
        document.getElementById("S").textContent =this.sex;
        document.getElementById("SH").textContent =this.status;
    }
}
let Ivanov = new Patient('Иванов', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Назначено");
Ivanov.setById();
let Petrov = new Patient('Петров', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Исполнено");
Ivanov.setById();
let Sydorov = new Patient('Сидоров', 'Иван', 'Иванович', new Date(1980, 6, 10), "м", "Медотвод");
Ivanov.setById();