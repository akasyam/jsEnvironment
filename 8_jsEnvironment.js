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
*localtunnel --> 'npm install localtunnel -g' ile yukle
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

--- GIT ---
git add . //stage everything
git commit -m "myComment" //commit
git push




*/
