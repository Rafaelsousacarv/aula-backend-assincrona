const { getCityFromZipcode } = require("utils-playground");

// console.log("inicio");

// getCityFromZipcode("26015060").then((cidade) => {
//   console.log(cidade);
// }).catch((err)=> {
//     console.log(err)
// })

// console.log("fim");

const cidade = getCityFromZipcode("26015060");

cidade.then((cidade) => {
  console.log(cidade);
});
// console.log(cidade);
