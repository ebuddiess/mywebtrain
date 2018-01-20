var student = {
  name: "puneet",
  age: 19,
  city: "delhi",
  phone: [9818913527, 8700259028],
  print: function() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.city);
    this.phone.forEach(function(el) {
      console.log(el);
    })
  }
}
