
import express from "express";
import axios from 'axios';

const app = express(); console.log(typeof app);
const port: number = 8080;

// Helper middleware for wrapping async functions in a try catch block
const asyncHandler: Function = (cb: Function) => {
  return async (req: Request, res: Response, next: Function) => {
    try {
      await cb(req, res, next);
    } catch(err) {
      console.log('ERR LOG: ', err);
      next(err);
    }
  }
};

// URL for GET request
const url = 'https://teamtreehouse.com/robertpm.json';



const makeGetReq: Function = async (url: string) => {

  const getReq = await axios.get(url);

  const result = {
    name: getReq.data.name,
    badges: getReq.data.badges.length,
    points: getReq.data.points.total
  }

  return result;
};


interface IRes {
  send: Function
}


app.get("/", asyncHandler(async (req: Request, res: IRes, next: Function) => {

  const getRes: {name: string, badges: number, points: string} = await makeGetReq(url);
  const resStr: string = `<h1>Hello world!</h1> <p>Name: ${getRes.name}</p><p>Badge Count: ${getRes.badges}</p><p>Total Points: ${getRes.points}</p>`;
  res.send(resStr);
}));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});