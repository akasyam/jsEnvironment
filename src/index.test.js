//import jsdom from 'jsdom';
//import fs from 'fs';
import {expect} from 'chai';

describe('Our first test',() => {
  it('should pass', () => {
      expect(true).to.equal(true);
  });
} );

/*
describe('index.html', () => {
  it('should say hello',(done) => {
    const index = fs.readFileSync('./src/index.html',"utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      window.close();
    }); //html, ikinci paremetre js files array
  })
});
*/
