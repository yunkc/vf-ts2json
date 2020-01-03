# Typescript-to-JSON
Use Typescript build JSON files

1. First clone or download this project
2. ```npm install``` all dependence 
3. ```npm run start``` run you project
4. Check you ```t2j.config.json``` file, make sure it's what you want!

Here is ```t2j.config.json``` config 
  ```js
  {
      // config you entry file
      "entry": "./src/index.js",
         
      // dist output path 
      "outDir": "../Web/vf-json/",
      
      // dist json files spacing
      "spacing": 2,
       
      // enable or disable debug mode
      "debug": false 
  }
```
