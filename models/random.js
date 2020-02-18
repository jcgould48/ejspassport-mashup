const express = require('express');
const app = express();
let url = `https://randomuser.me/api/?results=20`;

let getData = (url) => {
  app.get(url)
    .then(res => res.json())
    .then(data =>{
        data.hits.map(({
                results: { name: {
                  first,
                  last
                },
                picture :{
                  thumbnail
                }

            }}) =>{

            return console.log(
                `${search.toUpperCase(0)}
                Name:           ${first}\n
                Picture:         ${thumbnail}\n
                \n----------------------`
        );
    });
}).catch(err => console.log(err));
};

console.log(getData(url));