const mtk = 100;
const bahasaIndonesia = 95;
const bahasaInggris = 90;
const ipa =  1000;


if(typeof(mtk)=='number' && typeof(bahasaIndonesia)=='number' && typeof(bahasaInggris)=='number' && typeof(ipa)=='number'){
  
  if(mtk>=0 && mtk<=100 && bahasaIndonesia>=0 && bahasaIndonesia<=100 && bahasaInggris>=0 && bahasaInggris<=100 && ipa>=0 && ipa<=100){
    let jumlah = mtk+bahasaIndonesia+bahasaInggris+ipa;
    let rata = Math.ceil(jumlah/4);
    if(rata>=90){
      console.log(`Rata-rata = ${rata}
    Grade = A`);
     }else if(rata>=80){
      console.log(`Rata-rata = ${rata}
    Grade = B`);
     }else if(rata>=70){
      console.log(`Rata-rata = ${rata}
    Grade = C`);
     }else if(rata>=60){
      console.log(`Rata-rata = ${rata}
     Grade = D`);
     }else{
      console.log(`Rata-rata = ${rata}
    Grade = E`);
     }
  }else{
    console.log("hanya menerima nilai dari 0 sampai 100");
  }

}else{
    console.log("Data harus number");
}

