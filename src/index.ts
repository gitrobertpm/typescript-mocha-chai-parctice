
import express from "express";
import axios from 'axios';

const app = express();
const port: number = 8080;


// const asyncHandler = async (cb) => {
//   return async (req, res, next) => {
//     try {
//       await cb(req, res, next);
//     } catch(err) {
//       console.log('err test: ', err);
//       next(err);
//     }
//   }
// }


// const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
const url = 'https://www.netflix.com/';

// const makeGetReq = async (url: string) => {

//   const getReq = await axios.get(url);

//   console.log();

//   // .then(res => {
//   //     console.log(res.data.url);
//   //     console.log(res.data.explanation);
//   // })
//   // .catch(err => {
//   //     console.log(err);
//   // });
// }





app.get("/", async (req, res) => {
  const getRes = await axios.get(url);
  // const formattedRes = JSON.stringify(getRes, null, 2)

  console.log(getRes);
  // console.log(formattedRes);
  res.send(`Hello world! \n ${getRes}`);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});