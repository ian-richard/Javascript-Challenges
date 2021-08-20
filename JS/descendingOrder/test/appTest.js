const assert = require('chai').assert;
const descendingOrder = require('../app').descendingOrder;
// const app = require('../app')

describe('App', function(){
  it('Testing for fixed tests', function(){
    assert.equal(descendingOrder(0), 0)
  });

  it('should return 1', function(){
    assert.equal(descendingOrder(1), 1)
  });

  it('Should return the numbers in reverse order', function(){
      assert.equal(descendingOrder(15), 51)
  });
  it('should return the numbers in reverse order', function(){
      assert.equal(descendingOrder(1021), 2110)
  });
  it('should return the numbers in reverse order', function(){
      assert.equal(descendingOrder(123456789), 987654321)
  });
    
})
