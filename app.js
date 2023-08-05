let arr = [
  {
    brand: "samsung",
    model: "A30",
    price: "80000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "samsung",
    model: "A10",
    price: "10000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "samsung",
    model: "A20",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "vivo",
    model: "Y20",
    price: "60000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "vivo",
    model: "Y11",
    price: "70000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "vivo",
    model: "Y15",
    price: "60000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "motorola",
    model: "123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "iphone",
    model: "12",
    price: "9800000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "iphone",
    model: "13",
    price: "9000000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "iphone",    model: "X",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];
const brand = document.getElementById("BrandInput");
const model = document.getElementById("MobileModel");
let render = document.getElementById("renderdata");
var brandlowercase = brand.value.toLowerCase();
function SendMe(){
  var arr2 = arr.filter((data) =>
    data.brand.toLowerCase().includes(brand.value.toLowerCase())
  );
  model.innerHTML = "";
  for (var i = 0; i < arr2.length; i++) {
    model.innerHTML += `<option id='option'   value="${arr2[i].model}">${arr2[i].model}</option>`;
  }
}
function datasend(e) {
  var arr2 = arr.filter(
    (data) =>
      data.brand.toLowerCase().includes(brand.value.toLowerCase()) &&
      data.model === e.value
  );
  render.innerHTML = "";
  arr2.map((a, i) => {
    render.innerHTML += `<h1>${e.value}</h1>
    <p> price : ${arr2[i].price}</p>
    <p>Camera : ${arr2[i].camera}</p>
    <p>ram : ${arr2[i].ram}</p>
    <p> rom  : ${arr2[i].rom}</p>`;
  });
}
