//npm - global command,comes with node
//npm --version

//local dependemcy - use it only in this particular project
//npm i<packageName>

//gloabl dependecy - use it in any project
//npm install -g<packageName>  or npm i -g<packageName>
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
//console.log((items));

