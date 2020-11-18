let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  }
  /*let myData ={...data,...{name:"Firman Azhar Riyadi",email:"firmanazharr@gmail.com",hobby:"bermain game"}}
  console.log(myData);
  */
  let myData ={...data,name:"Firman Azhar Riyadi",email:"firmanazharr@gmail.com",hobby:"bermain game"}
  console.log(myData);
  
  const{street,city}=data.address;
  
  console.log(street);
  console.log(city);
  
  