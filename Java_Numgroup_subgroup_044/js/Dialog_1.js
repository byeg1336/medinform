
    var person = {
        "SNILS 1": ["Иванов", "Иван","Иванович", 15, "мая", 1974, 'м',"исполнено"],
        "SNILS 2": ["Сидоров", "Сидор","Сидорович", 20, "мая", 1980, "м","медотвод"],
        "SNILS 3": ["Петрова","Мария","Ивановна", 1,"июня", 1975, "ж","назначено"],
    }
    console.log(person);

    let SNILS;
    var FirstFunction = function (person, SNILS) {
        SNILS = prompt("Введите SNILS пациента", SNILS);
        infoname = person[SNILS];
        // console.log(infoname);
        alert("Информация о пациенте" + infoname);
        statusPriv = person[SNILS][7];
        console.log(statusPriv);
    }


   
var SecondFunction = function (statusPriv, infoname) {

   //statusPriv = person[SNILS][7];
   
   
   if (statusPriv === "исполнено") {
    alert("Отказано в прививке пациенту"+infoname);
   } else if (statusPriv === "медотвод") {
    alert("Отказано в прививке пациенту" + infoname);
   } else {
    alert("Исполнить прививку пациенту" + infoname);
   } }
   ForSecond = FirstFunction(person, SNILS);
   SecondFunction(statusPriv, infoname); 

   
   while (confirm("Продолжить проверку прививочного статуса?")) {
    ForSecond = FirstFunction(person, SNILS);
    SecondFunction(statusPriv, infoname);
   } 
   
   console.log("Сеанс проверки прививочного статуса закончен");
