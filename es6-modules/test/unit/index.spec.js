import { expect } from 'chai';
import Example from '../../src';

describe('broccoli-babel-boilerplate exports a default class', () => {

  it('Example#isExampleClass is true', () => {
    var example = new Example();
    expect(example.isExampleClass).to.equal(true);
  });
  
});
