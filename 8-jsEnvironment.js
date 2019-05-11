/*
 --- STARTER KIT ---
Javascript Development Enviroment ile asagidaki
terimler ayni manada kullanilacaktir.
Boilerplate - Starter Kit - Seed - Starter project

Seceneklerden bahsedip onerileni implemente edecegiz.

--- EDITORS ---
Atom
Webstorm - Free Degil - Ama Iyi
Brackets
VSCode - Bu da iyi
Asagidakiler backend icin secilebilir.
Visual Studio, Eclipse, Netbeans de kullanilabilir.

--- PACKAGE MANAGER ---
bower --eskiden meshurdu
npm --simdi bu populer ve onerilen
jspm --useful for bundler
jam ve volo da daha az populer

--- Package Security
retire.js
Node Security Platform (bu tercih edilen)
  node i -g nsp //komutu ile yukleyebilirsin
  'nsp check' komutu ile kontrol edebilirsin yuklu paketleri
  ARTIK bu komut kullanilmiyor, npm security checklerine kendi built in sahip.

--- DEVELOPMENT WEB SERVERS ---
http-server -> ultra simple ama kullanissiz
live-server -> live-reloading
*express -> tavsiye edilen

  koa ve hapi express rakipleridir.
budo -> bundlers, integrates with browserify, hot reloading
Webpack dev server -> Built in to Webpack, serves from memory, hot reloading
browsersync ->
  Iki farkli browserdan birinde islem yaparken digerinde de goruluyor
  Farkli platformlarda ayni anda test icin harika
  Dedicated IP, remain in sync, cross device testing

--- SHARING WORK-IN PROGRESS ---
*localtunnel --> 'npm     localtunnel -g' ile yukle
  server programini calistir
  'lt --port 3000' komutu ile dis dunyaya ac
  easily share

ngrok --> SECURE tunnel
  Sign up, install, authtoken, start your app

surge --> Quickly host static files to public URL
  npm install -g surge
  surge

  No firewall hole, hosting persists

now --> Quick deploy Node.js to the cloud
  npm install -g now
  create start script
  now

  No firewall hole, hosting persists

--- AUTOMATION ---
Grunt - configuration over code, large plugin ecosystem
*Gulp - In-memory streams (pipes), fast, code over configuration, large plugin ecosystem
  Bunun kurslarina bak
**npm Scripts - declared in package.json, leverage your OS' command line
  convention-based pre/post hooks
  Gulp pluginlere ihtiyac yok, bagimlilik yok
  Simple debugging, better docs

--- Asagidaki komutu npm start ile cagirabilirsin
"scripts":{
  "start":"node buildScripts/srcServer.js"
},
start ve test haricindeki komutlari npm run ile cagirmalisin.

    "start": "npm-run-all --parallel secheck open:src",
    "secheck": "nsp check",
    "open:src" : "node ./buildScripts/srcServer.js",



--- TRANSPILING ---
2017 - ES8

*Babel - Modern, today. ES5'a cevirir
  Standart JS
  No type defs, annotations required
  ES6 imports are statically analyzable
  Test, Lint, Babel, Great Libs, IDE = Safety

TypeScript - Superset of JS.
  Enhanced autocompletion, readability
  Safer refactoring, clearer intent.
  TypeScript > ES6 > ES5. TypeScript JS'i gelistirmistir
  Additional non-standard features -> Interfaces, Type call

Elm - Farkli bir dil gibi JS Compile ediyor.
  Clean Syntax
  Immutable data structures
  Friendly errors
  All errors are compile-time errors
  Interops with JS

--- Setup Babel
.babelrc
  not npm specific
  easier to read since isolated
package.json
  one less file in your project

babel-node ./buildScripts/startMessage.js komutu ile babel la calisir.

--- GIT ---
git add . //stage everything
git commit -m "myComment" //commit
git push

--- MODULES AND BUNDLING ---

5 MODULE FORMATS
- GECMIS YONTEMLER
  myGlobal;       //Global Degisken
  - IIFE
    (function() {
     //my code here
    })();
  - AMD (Asynchronous Module Definition)
    define(['jq'],function(jq) {});
-* Common JS (CJS)
    var jquery = require('jquery');
- UMD (Universal Module Definition)
-*** ES6 Modules
    import jQuery from 'jquery'
  Standardized, Statically Analyzable
  Easy to read

  --- BUNDLER
  Require.JS
    First popular bundler, AMD Pattern
  * Browserify - SIMPLE
    npm packages for the web
    large plugin ecosystem
  ** Webpack - COMPREHENSIVE
    Much more than just JS
    Import css, images, fonts, html etc like JS
    Bundle splitting
    Hot module reloading
  Rollup - PERFORMANCE
    Tree shaking - Eliminate unused code
    Faster loading production code
    Usttekilere gore yeni, kutuphane yazanlar icin iyi
  JSPM
    Uses SystemJS, a universal module loader
    Can load modules at runtime
    Has its own package manager
    Can install from npm

--- BUNDLE ettikten sonra debug icin SOURCE MAP e ihtiyac var.

---- LINTING ------ Kod Düzenleyince
JSLint
JSHint
**ESLint
    eslint-watch ile izler dosyaları.
    1- Config Format - package.json içinde ya da 5 farklı uzantıya (.eslintrc, .eslintrc.js,.eslintrc.yaml,.eslintrc.yml,.eslintrc.json)
     sahip config dosyalarına yazılabilir. package.json içinde "eslintConfig": { } içine yazılıyor.

        "rules": {
      "no-console": 1 //0 off, 1 warning, 2 error
        }
TSLint - TypeScript kullanıyorsan en güncel.
Babel-eslint - Stage 0 - 4
    */
