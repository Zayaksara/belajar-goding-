//cara membuat variabel
var a = 'a';
let b = 'b';
const c = 'c';

// harus di save ketika ingin test di terminal 

//variabel bisa menampung tipe data string (text) number/integet , boolean, array, object 

let nama = 'fatih'; //string
let umur = '18'; // numeber
let apakahBenar = true; //boolean
let uang = 2000.5; //number tapi ada koma 

//operator aritmatrika

let angka1 = 100;
let angka2 = 880;
console.log(angka1 + angka2, 'penambahan');
console.log(angka1 - angka2, 'pengurangan' );
console.log(angka1 / angka2, 'pembagian');
console.log(angka1 * angka2, 'perkalian');
console.log(angka1 % angka2, 'modulus');

//kita belajar mengisi variabel
let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

// string juga dapat ditambah namun string ga bisa dikurangin dengan operator artimatika 
let firstname = 'Muhammad';
let secondname = 'Fatih';
let thirdname = 'Khoiri';
let lastname = 'Asim';
let fullname = firstname + ' ' + secondname + ' ' + thirdname + ' ' + lastname;
console.log(fullname);// jika ingin ada spasi maka dikasih spasi menggunakan ' ' nah di dalam kurung tersebut harus dikasih spasi
console.log(firstname + ' ' + secondname + ' ' + thirdname + ' ' + lastname); 
console.log(firstname - ' ' - secondname - ' ' - thirdname - ' ' - lastname);//NaN

//alur pembacaan code
//dimulai dari kiri ke kanan, kemudian atas kebawah 

let number = 50;
console.log(number + 100);
number = 200;
console.log(number + 80);
number = 99;
console.log(number - 100);
number = true 
console.log(number + 1);
number = false;
console.log(number + 9);
//nilai dari false adalah 0 dan nilai dari true adalah 1

// membaca error
// error itu jangan takut, justru yang takut adalah kalau tidak ada error dalam pemogrmaan karena dalam pekerjaan kalau suatu fitur berjalan
// namun ada bug itu hal yang harus ditakutin karena bakalan susah nemuin dimana bugnyaa

//contoh error
const hewan = singa;
console.log(hewan);
hewan = 'buaya';
// const tidak dapat berubah karena const merupakan constan ya gabakalan berubah lah ngaco

// tipsnya, harus teliti  


