import Web3 from 'web3'

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

let getWeb3 = new Promise(function (resolve, reject) {
  // Check for injected web3 (mist/metamask)
  var web3js = window.web3
  if (window.ethereum) {
    window.web3 = new Web3(ethereum)
    resolve({
      injectedWeb3: ethereum.enable(),
      web3 () {
        console.log("metamask detected");
        return window.web3;
      }
    })
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    reject(new Error('Unable to connect to Metamask'))
  }
})
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve network ID
      result.web3().version.getNetwork((err, networkId) => {
        if (err) {
          // If we can't find a networkId keep result the same and reject the promise
          reject(new Error('Unable to retrieve network ID'))
        } else {
          // Assign the networkId property to our result and resolve promise
          result = Object.assign({}, result, {networkId})
          console.log("got network id",networkId);
          resolve(result);
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve coinbase
      result.web3().eth.getAccounts((err, accounts) => {
        if (err) {
          reject(new Error('Unable to retrieve accounts'))
        } else {
          var account=accounts[0]
          result = Object.assign({}, result, { account })
          console.log(accounts);
          resolve(result)
        }
      })
    })
  })
  .then(result => {
    return new Promise(function (resolve, reject) {
      // Retrieve balance for coinbase
      result.web3().eth.getBalance(result.account, (err, balance) => {
        if (err) {
          reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
        } else {
          result = Object.assign({}, result, { balance })
          resolve(result)
        }
      })
    })
  })

export default getWeb3