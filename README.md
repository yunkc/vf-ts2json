# Typescript-to-JSON
Use Typescript build JSON files

## Release Note

### 01.05.2020
1. add Loader module
2. refactor t2j build module
3. remove ```t2j.build.js``` to build folder
4. change ```t2j.config.json``` API
5. and other details improve

## How to use

1. First clone or download this project
2. ```npm install``` all dependence
3. Check you ```t2j.config.json``` file, make sure it's what you want! 
4. ```npm run start``` run you project


Here is ```t2j.config.json``` config 
  ```js
  {
      // config you entry file
      "entry": "./src/index.js",
         
      // dist output path
      "output": "./vf-json/",
      
      // dist json files spacing
      "spaces": 2,
       
      // enable or disable debug mode
      "debug": false 
  }
```
