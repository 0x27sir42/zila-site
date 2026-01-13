let web3, account;

async function connectWallet(){
 if(!window.ethereum) return alert("Install MetaMask");
 web3 = new Web3(window.ethereum);
 const acc = await ethereum.request({method:"eth_requestAccounts"});
 account = acc[0];
 document.getElementById("walletBtn").innerText =
  account.slice(0,6)+"..."+account.slice(-4);
}

/* ===== PRESALE ===== */
async function buyPresale(){
 if(!account) return alert("Connect wallet");
 document.getElementById("presaleInfo").innerText="Transaction sent...";
}

/* ===== STAKING ===== */
let staked=0;
function stake(){
 staked+=Number(document.getElementById("stakeAmount").value);
 document.getElementById("stakeInfo").innerText="Staked: "+staked;
}
function unstake(){
 staked=0;
 document.getElementById("stakeInfo").innerText="Staked: 0";
}

/* ===== TOKENOMICS ===== */
window.onload=()=>{
 const ctx=document.getElementById("tokenChart");
 if(ctx){
 new Chart(ctx,{type:"pie",data:{
  labels:["Staking","Presale","Team","Liquidity"],
  datasets:[{data:[40,20,20,20],backgroundColor:["#00ffd5","#fff","#999","#555"]}]
 }});
 }
};
