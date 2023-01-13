//npm - global command,comes with node
//npm --version

//local dependemcy - use it only in this particular project
//npm i<packageName>

//gloabl dependecy - use it in any project
//npm install -g<packageName>  or npm i -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file(stores important info about package /project )

//Three ways to create package .json:

//manual approach (create package.json in the root ,create properties etc)
//npm init (step by step,press enter to skip)
//npm init -y (everything setup default)

//if you want to publish the package,the name has to be unique


const a = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems = a.flattenDeep(items);
console.log(newItems);
console.log('hello people')
//console.log((items));

//.gitigonre er moddhe jei file rakhbo oita push hobena.
//pore clone  kore npm install likhlei shob dependency install hoye jabe


//To save as Dev dependies  the command is:

// nom i nodemon -D or --save-dev
//automatically restart hoy program and update hotey theake code


//To stop nodemon just type ctrl +c
   // "dev": "nodemon app.js"


   //Npm uninstall packageName


   //why we need package lock.json?
// -> to keep package version protected and unchanged
//because version change can occur some bugs



