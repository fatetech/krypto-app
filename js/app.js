let btc = document.getElementById("bitcoin")
let eth = document.getElementById("ethereum")
let doge = document.getElementById("dogecoin")


const runData =  async ()=>{
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd", {
      method:"GET",
      headers:{}
  })
const data = await response.json()
console.log(data);
btc.innerHTML = data.bitcoin.usd;
eth.innerHTML = data.ethereum.usd;
doge.innerHTML = data.dogecoin.usd;

}

runData();