
import express from "express";
import axios from 'axios';
import path from 'path';

const app = express();
const port: number = 8080;

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname.slice(0, -3), 'public')));
console.log('DIRNAME: ', __dirname.slice(0, -3));

// Title-ize a string
export const titleCase: Function = (str: string) => {

  if (str === '' || str === null) {
    console.error('ERROR: Invalid input');
    return 'Please enter a string';
  }

  const titled = str.split(' ').map((word, indy, arry) => {

    // words that generally shouldn't be caps according to the CHicago manual of style
    const uncaps = ['a', 'an', 'the', 'for', 'and', 'nor', 'but', 'or', 'yet', 'so', 'at', 'around', 'by', 'after', 'along', 'from', 'of', 'on', 'to', 'with', 'without' ];

    // Uppercase i
    if (word === 'i') {
      return 'I';
    }

    if (indy === 0 || indy === arry.length - 1) {
      return word[0].toUpperCase() + word.slice(1);
    }

    // Don't cap if word is in the uncaps array above or includes apostrophe
    if (uncaps.includes(word) ||  word.includes("'")) {
      return word;
    } 
    
    // Uppercase any other word and return
    return word[0].toUpperCase() + word.slice(1);

    // join word array
  }).join(' ');

  console.log(titled);
  return titled;
};


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
  render: Function
}


app.get("/", asyncHandler(async (req: Request, res: IRes, next: Function) => {

  const getRes: {name: string, badges: number, points: string} = await makeGetReq(url);
  // const resStr: string = `<h1>Hello world!</h1> <p>Name: ${getRes.name}</p><p>Badge Count: ${getRes.badges}</p><p>Total Points: ${getRes.points}</p>`;

  const resData: {} = {
    name: getRes.name,
    badgeCount: getRes.badges,
    totalPoints: getRes.points
  }

  res.render('index', {'thData': resData});
}));

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

