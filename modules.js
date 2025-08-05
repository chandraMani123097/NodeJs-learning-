//  Modules- modules are the block of  code that used to acheive specific functionality. such as- create  module to connect database, for email functionality we can create diff.. module.

//three types of modules... 1- core module(already available or pre built module), 2- third party module(install externally), 3- custom module(created by self)

//let take example of core module
const fs = require("fs"); //fs stands for file system is a core module of node used to create read write and in file
fs.writeFileSync(
  "dummy.txt",
  "hii! i'm example of fs example of core module in node"
);
console.log("hii file created successfully");

const os = require("os"); //os is a core module of node used to get information about operating system
console.log(os.arch()); //to get architecture of operating system
console.log(os.platform()); //to get platform of operating system
console.log(os.hostname()); //to get hostname of operating system.
console.log(os.cpus()); //to get information about cpu of operating system
console.log(os.networkInterfaces()); //to get information about network interfaces of operating system
