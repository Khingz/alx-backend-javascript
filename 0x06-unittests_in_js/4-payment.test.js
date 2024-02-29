const sinon = require('sinon');
var { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Stubs', function () {
  it('Math is the same', () => {
    const stubsUtils = sinon.stub(Utils, 'calculateNumber');
    stubsUtils.returns(10);
    const stubsConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubsUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(stubsConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubsUtils.restore();
    stubsConsole.restore();
  });
});
