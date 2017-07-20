
// Increase money
var money = 0;
function incMoney(number){
  money = money + number;
  document.getElementById("money").innerHTML = money;
};

// JOBS

// First Job
const jobOneTime = 11;
var jobOneState = 0;
var timesRun = 0;
function jobOne(){
  jobOneBtn.disabled = true;
  var jobOneState = 1;
  setTimeout(function(jobOne){
    money = money + 100;
    document.getElementById('money').innerHTML = money;
    jobOneBtn.disabled = false;
  }, 10000);
};

//Countdown timer for when jobOneBtn is pressed.
//window.setInterval(function(){
//  jobOneTime = jobOneTime - 1;
//  document.getElementById('jobOneBtn').innerHTML = jobOneTime;
//}, 1000);


// WORKERS
var workerNum = 0;
var maxWorkerNum = 4;

// Web Designer
var webDesignerNumber = 0;
const webDesignerCost = 100;
const webDesignerMoney = 5
document.getElementById('webDesignerCost').innerHTML = "£" + webDesignerCost;
function buyWebDesigner(){
  if(money >= webDesignerCost){
    money = money - webDesignerCost;
    webDesignerNumber = webDesignerNumber + 1;
    workerNum = workerNum + 1;
    document.getElementById('webDesignerNumber').innerHTML = webDesignerNumber;
    document.getElementById('workerNum').innerHTML = workerNum;
    if(workerNum === maxWorkerNum){
      var btn = document.getElementsByClassName("worker-btn");
      for(var i = 0; i < btn.length; i++){
      btn[i].disabled = true;
      btn[i].innerHTML = "Upgrade Building";
      };
    };
  } else {
    console.log("You do not have enough money, earn some more and try again.")
  };
};

// Web Developer
var webDeveloperNumber = 0;
const webDeveloperCost = 150;
const webDeveloperMoney = 7
document.getElementById('webDeveloperCost').innerHTML = "£" + webDeveloperCost;
function buyWebDeveloper(){
  if(money >= webDeveloperCost){
    money = money - webDeveloperCost;
    webDeveloperNumber = webDeveloperNumber + 1;
    workerNum = workerNum + 1;
    document.getElementById('webDeveloperNumber').innerHTML = webDeveloperNumber;
    document.getElementById('workerNum').innerHTML = workerNum;
    if(workerNum === maxWorkerNum){
      var btn = document.getElementsByClassName("worker-btn");
      for(var i = 0; i < btn.length; i++){
      btn[i].disabled = true;
      btn[i].innerHTML = "Upgrade Building";
      };
    };
  } else {
    console.log("You do not have enough money, earn some more and try again.");
  };
};


// BUILDING UPGRADES

// Building upgrade one

function buildingUpgradeOne(){
const buildingOneCost = 100;
  if(money >= buildingOneCost){
      money = money - buildingOneCost;
      maxWorkerNum = maxWorkerNum + 10;
      document.getElementById('money').innerHTML = money;
      document.getElementById('maxWorkerNum').innerHTML = maxWorkerNum;
      document.getElementById('buildingUpgradeOneBtn').disabled = true;
      document.getElementById('buildingUpgradeOneBtn').innerHTML = "Owned";
      if(workerNum < maxWorkerNum){
        var btn = document.getElementsByClassName("worker-btn");
        for(var i = 0; i < btn.length; i++){
        btn[i].disabled = false;
        btn[i].innerHTML = "Hire";
        };
      };
  } else {
    console.log("You do not have enough money, earn some more and try again.");
  };
};

// Building upgrade two

function buildingUpgradeTwo(){
  const buildingTwoCost = 100;
    if(money >= buildingTwoCost){
        money = money - buildingTwoCost;
        maxWorkerNum = maxWorkerNum + 10;
        document.getElementById('money').innerHTML = money;
        document.getElementById('maxWorkerNum').innerHTML = maxWorkerNum;
        document.getElementById('buildingUpgradeTwoBtn').disabled = true;
        document.getElementById('buildingUpgradeTwoBtn').innerHTML = "Owned";
        if(workerNum < maxWorkerNum){
          var btn = document.getElementsByClassName("worker-btn");
          for(var i = 0; i < btn.length; i++){
          btn[i].disabled = false;
          btn[i].innerHTML = "Hire";
          };
        };
    } else {
      console.log("You do not have enough money, earn some more and try again.");
    };
  };

// Display worker number and max worker number
document.getElementById('maxWorkerNum').innerHTML = maxWorkerNum;
document.getElementById('workerNum').innerHTML = workerNum;


// CONTRACTS

// Contract One
var contractOne = " ";
var contractOneState = 0;

function buyContractOne(){
  const contractOneCost = 250;
  if(money >= contractOneCost){
    contractOne = "Contract Owned";
    contractOneState = 1;
    money = money - contractOneCost;
    document.getElementById('contractOne').innerHTML = contractOne;
    document.getElementById('money').innerHTML = money;
  };
  if(contractOneState >= 1){
    document.getElementById('contractOneBtn').disabled = true;
    document.getElementById('contractOneBtn').innerHTML = contractOne;
  };
};


// Upgrades

// Train Developers
var webDeveloperNumber = webDeveloperNumber;
var upgradeIncr = 20;
var trainDevelopersIncr = 0;
var trainDeveloperActive = false;
const trainDevelopersCost = 500;
document.getElementById('trainDevsCost').innerHTML = "£" + trainDevelopersCost;
document.getElementById('trainDevsMoneyIncr').innerHTML = "£" + upgradeIncr + " Per Month Per Developer";
function trainDevelopers(){
  if(webDeveloperNumber >= 1 && money >= trainDevelopersCost){
    money = money - trainDevelopersCost;
    trainDevelopersIncr = upgradeIncr * webDeveloperNumber;
    trainDeveloperActive = true;
    document.getElementById('trainDevsBtn').disabled = true;
    document.getElementById('trainDevsBtn').innerHTML = "Upgraded";
  }
  else if(webDeveloperNumber < 1) {
    console.log("Hire some developers then try training them");
  }
  else if(money < trainDevelopersCost){
    console.log("You dont have enough money, earn some more and try again.");
  };
};

// Train Designers
var webDesignerNumber = webDesignerNumber;
var upgradeIncr = 20;
var trainDesignersIncr = 0;
var trainDesignersActive = false;
const trainDesignersCost = 500;
document.getElementById('trainDesCost').innerHTML = "£" + trainDesignersCost;
document.getElementById('trainDesMoneyIncr').innerHTML = "£" + upgradeIncr + " Per Month Per Designer";
function trainDesigners(){
  if(webDesignerNumber >= 1 && money >= trainDesignersCost){
    money = money - trainDevelopersCost;
    trainDesignersIncr = upgradeIncr * webDesignerNumber;
    trainDesignersActive = true;
    document.getElementById('trainDesBtn').disabled = true;
    document.getElementById('trainDesBtn').innerHTML = "Upgraded";
  }
  else if(webDesignerNumber < 1) {
    console.log("Hire some designers then try training them");
  }
  else if(money < trainDesignersCost){
    console.log("You dont have enough money, earn some more and try again.");
  };
};



// INCREASE MONEY

// Per Day
window.setInterval(function(){
  if(webDesignerNumber >= 1){
    incMoney(webDesignerMoney * webDesignerNumber);
  };
  if(webDeveloperNumber >= 1){
    incMoney(webDeveloperMoney * webDeveloperNumber);
  };
  if(trainDeveloperActive === true){
    incMoney(trainDevelopersIncr);
  };
}, 1000);

// Per Month
window.setInterval(function(){
  if(contractOneState >= 1){
    var contractOneIncome = 1000;
    incMoney(contractOneIncome);
  };
}, 31000);



// Increase amount of days / months / years

var day = 0;
var month = 0;
var year = 0;

window.setInterval(function() {
  day = day + 1;
  document.getElementById("day").innerHTML = day;
  if(day >= 31){
    day = 0;
    month = month + 1;
    document.getElementById("month").innerHTML = month;
    if(month >= 12 && day >= 31){
      month = 0;
      year = year + 1;
      document.getElementById("year").innerHTML = year;
    };
  };
}, 1000);



// Left-Game Display Functions

  $('#btn0').click(function() {
    $('#content1, #content2, #content3, #content4').fadeOut(200).delay(200);
    $('#content0').delay(200).fadeIn(200);
    $('#btn0').addClass("active");
    $('#btn1, #btn2, #btn3, #btn4').removeClass("active");
     return false;
  });

  $('#btn1').click(function() {
    $('#content0, #content2, #content3, #content4').fadeOut(200).delay(200);
    $('#content1').delay(200).fadeIn(200);
    $('#btn1').addClass("active");
    $('#btn0, #btn2, #btn3, #btn4').removeClass("active");
     return false;
  });

  $('#btn2').click(function() {
    $('#content0, #content1, #content3, #content4').fadeOut(200).delay(200);
    $('#content2').delay(200).fadeIn(200);
    $('#btn2').addClass("active");
    $('#btn0, #btn1, #btn3, #btn4').removeClass("active");
     return false;
  });

  $('#btn3').click(function() {
    $('#content0, #content1, #content2, #content4').fadeOut(200).delay(200);
    $('#content3').delay(200).fadeIn(200);
    $('#btn3').addClass("active");
    $('#btn0, #btn2, #btn1, #btn4').removeClass("active");
     return false;
  });

  $('#btn4').click(function() {
    $('#content0, #content1, #content2, #content3').fadeOut(200).delay(200);
    $('#content4').delay(200).fadeIn(200);
    $('#btn4').addClass("active");
    $('#btn0, #btn2, #btn3, #btn1').removeClass("active");
     return false;
  });
