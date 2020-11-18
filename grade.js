const mtk = 100;
const bahasaIndonesia = 100;
const bahasaInggris = 100;
const ipa =  101;


if(typeof(mtk)=='number' && typeof(bahasaIndonesia)=='number' && typeof(bahasaInggris)=='number' && typeof(ipa)=='number'){
  let jumlah = mtk+bahasaIndonesia+bahasaInggris+ipa;
  let rata = Math.ceil(jumlah/4);
  console.log(rata);

  if(rata>100){
   console.log('Nilai diluar batas');
  }else if(rata>=90){
    console.log('A');
  }else if(rata>=80){
   console.log('B');
  }else if(rata>=70){
    console.log('C');
  }else if(rata>=60){
    console.log('D');
  }else{
    console.log('E');
  }
}else{
    console.log("Data harus number");
}

