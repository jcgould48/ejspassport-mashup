// let fetch = require("node-fetch");
// let appId = "4f101b50";
// let appKey = "fcef97cef9d623955748664de73b98cd";
// let search = 'chicken'
// let url = `http://api.edamam.com/search?q=${search}&app_id=${appId}&app_key=${appKey}&from=0&to=3`;

// let getData = (url) => {
//   fetch(url)
//     .then(res => res.json())
//     .then(data =>{
//         data.hits.map(({
//                 recipe: {label,
//                  source,
//                  url,
//                  yield,
//                  calories,
//                  totalTime,
//                  ingredientLines,

//             }}) =>{

//             return console.log(
//                 `${search.toUpperCase(0)} Recipe Ideas:\n
//                 Name:           ${label}\n
//                 Source:         ${source}\n
//                 Website:        ${url}\n
//                 Servings:       ${yield}\n
//                 Calories:       ${Math.round(calories/yield)}\n
//                 Prep Time:      ${totalTime} minutes\n 
//                 Shopping List:  ${ingredientLines}\n
//                 \n----------------------`
//         );
//     });
// }).catch(err => console.log(err));
// };

// getData(url);