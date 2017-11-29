/* Ini adalah program untuk cek nilai siswa, dengan menggunakan JavaScript.
Hanya berupa program sederhana...Mohon dimaklum!!  :D
*/

var siswa = [{Nama : "Agung",Matematika : "95",BhsIndo : "70",BhsIng : "85",Ipa : "90",},
{Nama : "Budi",Matematika : "80",BhsIndo : "70",BhsIng : "75",Ipa : "90"},
{Nama : "Sakti",Matematika : "70",BhsIndo : "65",BhsIng : "75",Ipa : "80"},
{Nama : "Panji",Matematika : "50",BhsIndo : "55",BhsIng : "45",Ipa : "60"}];

var input = prompt("Masukkan Nama!");
var nilaiSiswa = siswa.length;
var isi = "";

function cekNilai(){
  for(var i=0; i<nilaiSiswa; i++){
    if(siswa[i].Nama===input){
      isi += "Nama : "+siswa[i].Nama+"\n"+
        "Nilai Matematika : "+siswa[i].Matematika+"\n"+
        "Nilai B.Indonesia : "+siswa[i].BhsIndo+"\n"+
        "Nilai B.Inggris : "+siswa[i].BhsIng+"\n"+
        "Nilai IPA : "+siswa[i].Ipa+"\n";
        
    }
	else{
		alert("Data Tidak Ditemukan..!! Atau Salah Input..")
	}
  }
  return isi;
}

console.log(cekNilai(input));