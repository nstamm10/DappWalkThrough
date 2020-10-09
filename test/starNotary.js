import 'babel-polyfill';

const StarNotary = artifacts.require('./starNotary.sol')

let accounts;
let owner;

contract('StarNotary', async (accs) => {
    accounts = accs;
    owner = accounts[0];
})

it('has correct name', async () => {
    let instance = await StarNotary.deployed();
    let starName = await instance.starName.call();
    assert.equal(starName, 'Steal by Bird!');
})
