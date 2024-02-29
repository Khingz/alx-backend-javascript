const sinon = require('sinon');
var { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Stubs', function () {
  it('', () => {
    const stubsUtils = sinon.stubs(Utils, 'calculateNumber');
    stubsUtils.returns(10)
    const stubsConsole = sinon.stub(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubsUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.equal(10);
    expect(stubsConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubsUtils.restore();
    stubsConsole.restore();
  });
});