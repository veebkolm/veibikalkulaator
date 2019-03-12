function arvutaBooster() {
var baasi_tugevus = document.getElementById('baasi_tugevus').value.replace(",", ".");
var boosteri_tugevus = document.getElementById('boosteri_tugevus').value.replace(",", ".");
var soovitud_tugevus = document.getElementById('soovitud_tugevus').value.replace(",", ".");
var pudel = document.getElementById('pudel').value.replace(",", ".");
var vastusekast = document.getElementById('boosterit');
  
  

if (baasi_tugevus == "0") {
var koguniko = pudel * soovitud_tugevus;
var boosterit = (koguniko / boosteri_tugevus);
var baas = pudel - boosterit;
  arvutusValjund();
}
  else if (baasi_tugevus > boosteri_tugevus) {
    var nullvedelik = pudel*(soovitud_tugevus/baasi_tugevus);
    var baas = pudel - nullvedelik;
   lahjendaValjund();

  }
else {
var boosterit = pudel*(baasi_tugevus / boosteri_tugevus);
var baas = pudel - boosterit; 
  arvutusValjund();
}
  
  function lahjendaValjund(){
       vastusekast.innerHTML = "Baas ei saa olla suurema nikotiinitulemusega kui soovitud tulemus. <br>" + soovitud_tugevus + "mg  vedeliku saamiseks sega " + baas + "ml alusvedelikku " + nullvedelik + "ml nullvedelikuga."
  }
  function arvutusValjund(){
    vastusekast.innerHTML = pudel + "ml vedeliku saamiseks sega " + baas + "ml baasvedelikku ja " + boosterit + "ml boosterit.";
  }


}