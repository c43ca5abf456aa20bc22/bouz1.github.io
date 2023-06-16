
var hash2_pw_stor='3ff77aedbd06d036e80e346d1809cc5b114431ef';
/*
  ======================
  hash(hash(PW))
  ========================
  Hash you PW oi=nline by :
  https://emn178.github.io/online-tools/sha1.html 
  */

var message='Please enter the password \nIn the first time, you must enter a password, please contact Abdelaziz BOUZIANI to get the password.'
function enter_pw(){
  var hash_pw=localStorage.getItem('Hash_pw_Xws757H1Gls');
  if (hash_pw != null){
    var hash2_pw= Sha1.hash(hash_pw);
    if (hash2_pw == hash2_pw_stor){
      localStorage.setItem('Hash_pw_Xws757H1Gls', hash_pw);
      return hash_pw
    }
  }
  var n=1;
  while (1){
    if (n==1){
      var pw=prompt(message);}
    else{
      var pw=prompt("WRONG PASSWORD:\n"+message);
    }
    n++;
    if (pw == null) return null;
    var hash_pw= Sha1.hash(pw);
    var hash2_pw= Sha1.hash(hash_pw);

    if (hash2_pw == hash2_pw_stor){
      localStorage.setItem('Hash_pw_Xws757H1Gls', hash_pw);
      return hash_pw
    }
  }
}

function Open_File(html_name1,html_name2){

  var hash_pw=enter_pw();
  if (hash_pw!=null){
    href=html_name1+hash_pw.substring(0, 20)+html_name2;
    window.location.href=href;
  }
}
