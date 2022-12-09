 // 1 Задание:
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(arr)
    arr.push(10)

 // 2 Задание:
 for(var i = 20; i >= 0; i--){
     console.log(i)
 }

 // 3 Задание "Светофор". Switch Case:
 var color = prompt("Введите цвет светофора\nкрасный\nжелтый\nзеленый").trim().toLowerCase()

 switch (color) {
     case "красный":
         console.log("СТОЙ")
         break;
     case "желтый":
         console.log("ЖДИ")
         break;
     case "зеленый":
         console.log("ИДИ")
         break
     default:
         console.log("TRY AGAIN")
 }

