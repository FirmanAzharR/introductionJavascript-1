const printSegitiga = 5;

if (typeof (printSegitiga) == 'number') {
    for (let i = printSegitiga; i >= 1; i--) {
      let hasil = '';
      for (let j = 1; j <= i; j++) {
        hasil = hasil + j
      }
      console.log(hasil);
    }
  }else{
    console.log('Data harus number');
  }