# Typescript-to-JSON
Use Typescript build JSON files

## Release Note

### 05.11.2020
- fix deep require `.ts` files trigger browser reload, but not latest `vf` json data
- improve build reload experience

### 05.09.2020
- Add `Circle` component type check
- Add `Anime` component type check
- Add `TextInput` component type check
- Add `Slider` component type check
- Add `ConnectLine` component type check
- Add `FollowLine` component type check
- Add `SpriteAnimated` component type check
- Add `LinePosition` enum
- Change components `type` lowercase
- Change `guiType` property capitalize
- Change `AssetType` use way
- Change `Style` property to lowercase
- Change `StyleSheet` interface  
- Remove old help link
- Remove `bgcolor` in `index.html` vf init config
- Other detail improve

### 04.27.2020
add `EVA` component ts types check

### 01.05.2020
1. Add Loader module
2. Refactor t2j build module
3. Remove ```t2j.build.js``` to build folder
4. Change ```t2j.config.json``` API
5. And other details improve

## How to use

1. First clone or download this project
2. ```npm install``` all dependence
3. Check you ```t2j.config.json``` file, make sure it's what you want! 
4. ```npm run start``` run you project


Here is ```t2j.config.json``` config 
  ```json5
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
