var namaWanda = ["wanda", "Wanda", "anda", "Anda", "Nyiayu", "nyiayu", "Nyiayu Hafizah Ibrisamah", "nyiayu Hafizah Ibtisamah"
    , "Nyiayu hafizah Ibtisamah", "Nyiayu Hafizah ibtisamah", "nyiayu hafizah ibtisamah"];

var namaKita = prompt("Siapa nama kamu?");


if (namaWanda.includes(namaKita)) {
    alert("woiii " + namaKita + " dah 10000% sama ferdi maaa, main ini pulaaa, muaachhh❤");
} else {
    var namaCrush = prompt("Siapa nama crush kamu?");

    var cocok = Math.random() * 100;
    cocok = Math.floor(cocok) + 1;

    alert("Kecocokan " + namaKita + " dan " + namaCrush + " adalah " + cocok + "%")

    if (cocok <= 80) {
        alert("ahahahahah ga cocokkkk")
    } else {
        alert("cieeeee cocokkkk kiw kiw")
    }
}






