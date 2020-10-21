const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
// cross origin resource sharing.
// front end being deployed in one service, back end being deployed with a different service, they need to communicate.
// cors allows requests to this api from other places, other origins.
const PORT = process.env.PORT || 3000;
// this environment variable will exist on whatever server we deploy to.
// it will default to 3000 when we aren't deployed.

const app = express();

app.use(cors());
// middleware. add-ons or plugins to express. express is a minimal framework, so the way we add features is through middlewares.
// first plugin we are adding is the cors middleare.
app.use(bodyParser.json());

app.use(logger("dev"));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

const products =
  // know its json from the quotations around the keys!
  // the products variable is stored in memory!
  [
    {
      _id: "5ee3e0e6f79c840004559e92",
      name: "Product 001",
      imgURL:
        "https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.084Z",
      updatedAt: "2020-06-12T20:09:10.084Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e93",
      name: "Product 002",
      imgURL:
        "https://images.unsplash.com/photo-1576594496020-534bf2437b21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "100",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.086Z",
      updatedAt: "2020-06-12T20:09:10.086Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e94",
      name: "Product 003",
      imgURL:
        "https://i.ibb.co/XkKm1pM/assorted-color-paint-brush-stroke-1672850.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "140",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.086Z",
      updatedAt: "2020-06-12T20:09:10.086Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e95",
      name: "Product 004",
      imgURL:
        "https://images.unsplash.com/photo-1580380853934-834251ec0e95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "168",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.086Z",
      updatedAt: "2020-06-12T20:09:10.086Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e96",
      name: "Product 005",
      imgURL:
        "https://images.unsplash.com/photo-1531826338556-162edb086560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.087Z",
      updatedAt: "2020-06-12T20:09:10.087Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e97",
      name: "Product 006",
      imgURL:
        "https://i.ibb.co/bJrPBSQ/steve-johnson-n-WYz-Sj-Ac0e-E-unsplash-Cropped.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.087Z",
      updatedAt: "2020-06-12T20:09:10.087Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e98",
      name: "Product 007",
      imgURL:
        "https://i.ibb.co/QnZWFXJ/blue-green-and-brown-abstract-painting-3582425.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "130",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.088Z",
      updatedAt: "2020-06-12T20:09:10.088Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e99",
      name: "Product 008",
      imgURL:
        "https://images.unsplash.com/photo-1577915509669-e8daeb28b498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "128",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.088Z",
      updatedAt: "2020-06-12T20:09:10.088Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e9a",
      name: "Product 009",
      imgURL:
        "https://images.unsplash.com/photo-1575986711002-b1e7452c8b17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.088Z",
      updatedAt: "2020-06-12T20:09:10.088Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e9b",
      name: "Product 010",
      imgURL: "https://i.ibb.co/jJntzzb/painting-wallpaper-1070527.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "140",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.089Z",
      updatedAt: "2020-06-12T20:09:10.089Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e9c",
      name: "Product 011",
      imgURL:
        "https://i.ibb.co/qy7f9cb/orange-and-multicolored-abstract-painting-2784948.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "128",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.089Z",
      updatedAt: "2020-06-12T20:09:10.089Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e9d",
      name: "Product 012",
      imgURL:
        "https://i.ibb.co/kh7C2M5/steve-johnson-RLy-Ez-Lmh-R98-unsplash-1-Cropped.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.089Z",
      updatedAt: "2020-06-12T20:09:10.089Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e9e",
      name: "Product 013",
      imgURL:
        "https://i.ibb.co/NtkxmdN/blue-white-red-and-yellow-abstract-painting-1143758.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.090Z",
      updatedAt: "2020-06-12T20:09:10.090Z",
    },
    {
      _id: "5ee3e0e6f79c840004559e9f",
      name: "Product 014",
      imgURL: "https://i.ibb.co/zF1Y6LV/abstract-painting-1293125.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.090Z",
      updatedAt: "2020-06-12T20:09:10.090Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea0",
      name: "Product 015",
      imgURL:
        "https://i.ibb.co/TwkVCj5/steve-johnson-Ann-Q-TOu-Bxc-unsplash-Cropped.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "90",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.090Z",
      updatedAt: "2020-06-12T20:09:10.090Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea1",
      name: "Product 016",
      imgURL: "https://i.ibb.co/FWRsGJy/photo-of-abstract-painting-1451567.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "140",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.091Z",
      updatedAt: "2020-06-12T20:09:10.091Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea2",
      name: "Product 017",
      imgURL:
        "https://i.ibb.co/tbDwCmL/red-yellow-and-blue-abstract-painting-1286632.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "170",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.091Z",
      updatedAt: "2020-06-12T20:09:10.091Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea3",
      name: "Product 018",
      imgURL:
        "https://i.ibb.co/kmV31B1/yellow-and-red-abstract-painting-1789968.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "110",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.091Z",
      updatedAt: "2020-06-12T20:09:10.091Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea4",
      name: "Product 019",
      imgURL:
        "https://i.ibb.co/bvJpK6d/photo-of-abstract-painting-on-canvas-1812960.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "80",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.091Z",
      updatedAt: "2020-06-12T20:09:10.091Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea5",
      name: "Product 020",
      imgURL:
        "https://i.ibb.co/jf7fJkj/multicolored-abstract-painting-1570779.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "180",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.092Z",
      updatedAt: "2020-06-12T20:09:10.092Z",
    },
    {
      _id: "5ee3e0e6f79c840004559ea6",
      name: "Product 021",
      imgURL:
        "https://i.ibb.co/30GbHgf/blue-orange-and-white-abstract-painting-1183992.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      price: "70",
      __v: 0,
      createdAt: "2020-06-12T20:09:10.092Z",
      updatedAt: "2020-06-12T20:09:10.092Z",
    },
  ];

app.get("/", (req, res) => {
  res.send("This is root!");
});
// express route. base route.
// first part = path, second argument (cb function) = controller.

app.get("/products", async (req, res) => {
  res.json(products);
});
//products route will respond with json.

app.get("/products/:id", async (req, res) => {
  const id = req.params.id;
  const product = products.filter((product) => product._id === id)[0];
  res.json(product);
});
// slug id.
// use destructuring const {id} = req.params. pulling id out of the params object!
// filter returns an array! whether empty or has items, always an array! [0] is asking for first item in array.
// which means the whole thing will return an object.
// better method out be products.find because you don't need the [0]
// async!

app.post("/products", (req, res) => {
  const product = req.body;
  products.push(product);
  res.json(products);
});
// post is for creating a new product.
// you cannot post through browser. The browser only supports get, you can only read in the browser!
// need postman or axios to post or delete. need a CLIENT to post.
// postman: put in url (localhost3000), set to post. goto body tab. click raw option. change dropdown from Text to JSON.
// now we can craft JSON for the body to send to the server.
// {
//   "name": "Good Product",
//   "description": "Buy this!",
//   "price": "20",
//   "imgURL": "test.com/image.png"
// }
// now in our api we need to be able to capture that body!
// thats where our body middleware plug in comes into play!
// above.... const product = req.body
// grab the body from the request, take that body and push it into the array of objects that is product
// BUT this all relies on memory, stopping the server it wiped out the memory! so your new product was wiped!
// we need something to store our JSON on a harddrive!
// we need a database!

app.put("/products/:id", async (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((product) => product._id === id);
  const product = { ...products[productIndex], ...req.body };
  products.splice(productIndex, 1, product);
  res.json(product);
});
// logging with morgan!
// HTTP request logger middleware for node.js
// called an audit trail
// HTTP Cats is a great resource for understanding what http status codes are.
// when you are getting millions of lines of logs you offset it to a third party to parse the data so you can search it.

// PUT! Update!
// use :id because we are updating a specfic product.
// find the Index of where the IDs match. finding the product in the products array.
// use a spread operator to open products array, and the body, and merge it with the existing product.
// product is newly updated product. then splice!
// two ways to work with splice, 1 to replace stuff in array, 2 is to delete stuff in an array.
// first arg is the Index we are using (the productIndex is the index of whatever matching id we found with our findIndex method. products.splice(the index of the match)) , second arg is how many we want to delete, third arg (optional) what we are replacing it with
// *** practice this more later ***
// in postman, you only have to put what you actually want to update. "price": 200
// morgan logs the put!
// but if we restart the server.... all changes are gonna get wiped!!
app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  const productIndex = products.findIndex((product) => product._id === id);
  products.splice(productIndex, 1);
  res.json(products);
});
// works the same as above, except we dont have the third arg in splice. So instead of replacing, it just removes it.

// heroku is a great place to "start"
// move towards amazon AWS after graduation. Microsoft Azure. Google cloud. All these are cheaper than heroku if it has a lot of users.

// DEPLOYMENT***------------------------------------------------------------------
// make sure it is a git repo! make sure you are on the master branch (can't deploy from feature branch)! use git status to check.
// command is heroku create appName
// heroku create products-phoenix-api

// made a git repository on heroku's git
// https://products-phoenix-api.herokuapp.com/

// git remote -v
// shows that running create command added another heroku git repo.
// can push to that instead!

// git push heroku master
// push master branch to heroku endpoint (heroku git).
// how does it know to npm i and all that?
// heroku is smart enough to know that it is a JS application so if package.json is in the ROOT of the repo it will recognize it.
// it also knows that if there is a GEM file it will be a ruby application.
// useful command for debugging!
// heroku logs --tail
