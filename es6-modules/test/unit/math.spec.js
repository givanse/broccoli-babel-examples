import { expect } from 'chai';
import { average } from '../../src/math';

describe('math exports average', () => {

  it('average is a function', () => {
    expect(typeof average).to.equal('function');
  });
  
  it('average works', () => {
    let numbers = [1, 2, 3];
    expect(average(numbers)).to.equal(2);

    numbers = [500, 1000, 500, 1000];
    expect(average(numbers)).to.equal(750);
  });
});
