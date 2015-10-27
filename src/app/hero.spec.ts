  // Demo only!
  import {Hero} from './hero';
  
describe('Hero', function() {
  it('has name given in the constructor', function() {
    var hero = new Hero(1, 'Super Cat');
    expect(hero.name).toEqual('Super Cat');
  });
  it('has the id given in the constructor', function() {
    var hero = new Hero(1, 'Super Cat');
    expect(hero.id).toEqual(1);
  });
});
  
it('true is true', () => expect(true).toEqual(true));

describe('1st tests', () => {
  it('true is true', () => expect(true).toEqual(true));
  it('null is not the same thing as undefined',  () => expect(null).not.toEqual(undefined));
});