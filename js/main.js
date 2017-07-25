
// Increase/Decrease money
var money = 0;
function incMoney(number){
  money = money + number;
  document.getElementById("money").innerHTML = money;
};
function decMoney(number){
  money = money - number;
  document.getElementById("money").innerHTML = money;
};

// JOBS

// First Job
function jobOne(){
  jobOneBtn.disabled = true;
  setTimeout(function(jobOne){
    money = money + 100;
    document.getElementById('money').innerHTML = money;
    jobOneBtn.disabled = false;
  }, 10000);
};

// Second Job
function jobTwo(){
  jobTwoBtn.disabled = true;
  setTimeout(function(jobTwo){
    money = money + 500;
    document.getElementById('money').innerHTML = money;
    jobTwoBtn.disabled = false;
  }, 30000);
};

// Third Job
function jobThree(){
  jobThreeBtn.disabled = true;
  setTimeout(function(jobThree){
    money = money + 1200;
    document.getElementById('money').innerHTML = money;
    jobThreeBtn.disabled = false;
  }, 60000);
};

// Fourth Job
function jobFour(){
  jobFourBtn.disabled = true;
  setTimeout(function(jobFour){
    money = money + 2500;
    document.getElementById('money').innerHTML = money;
    jobFourBtn.disabled = false;
  }, 120000);
};




// WORKERS
var workerNum = 0;
var maxWorkerNum = 4;

// Web Designer
var webDesignerNumber = 0;
const webDesignerCost = 100;
const webDesignerMoney = 10;
const webDesignerWage = 200;
document.getElementById('webdesWage').innerHTML = "£" + webDesignerWage;
document.getElementById('webdesEarns').innerHTML = "£" + webDesignerMoney;
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
    alert("You do not have enough money, earn some more and try again.")
  };
};

// Web Developer
var webDeveloperNumber = 0;
const webDeveloperCost = 200;
const webDeveloperMoney = 15;
const webDeveloperWage = 300;
document.getElementById('webdevWage').innerHTML = "£" + webDeveloperWage;
document.getElementById('webdevEarns').innerHTML = "£" + webDeveloperMoney;
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
    alert("You do not have enough money, earn some more and try again.");
  };
};

// SEO Specialist
var seoSpecNumber = 0;
const seoSpecCost = 400;
const seoSpecMoney = 20;
const seoSpecWage = 400;
document.getElementById('seoWage').innerHTML = "£" + seoSpecWage;
document.getElementById('seoEarns').innerHTML = "£" + seoSpecMoney;
document.getElementById('seoSpecCost').innerHTML = "£" + seoSpecCost;
function buySeoSpec(){
  if(money >= seoSpecCost){
    money = money - seoSpecCost;
    seoSpecNumber = seoSpecNumber + 1;
    workerNum = workerNum + 1;
    document.getElementById('seoSpecNumber').innerHTML = seoSpecNumber;
    document.getElementById('workerNum').innerHTML = workerNum;
    if(workerNum === maxWorkerNum){
      var btn = document.getElementsByClassName("worker-btn");
      for(var i = 0; i < btn.length; i++){
      btn[i].disabled = true;
      btn[i].innerHTML = "Upgrade Building";
      };
    };
  } else {
    alert("You do not have enough money, earn some more and try again.");
  };
};

// UI/UX Designer
var uiuxDesNumber = 0;
const uiuxDesCost = 600;
const uiuxDesMoney = 25;
const uiuxDesWage = 500;
document.getElementById('uiuxWage').innerHTML = "£" + uiuxDesWage;
document.getElementById('uiuxEarns').innerHTML = "£" + uiuxDesMoney;
document.getElementById('uiuxDesCost').innerHTML = "£" + uiuxDesCost;
function buyUiuxDes(){
  if(money >= uiuxDesCost){
    money = money - uiuxDesCost;
    uiuxDesNumber = uiuxDesNumber + 1;
    workerNum = workerNum + 1;
    document.getElementById('uiuxDesNumber').innerHTML = uiuxDesNumber;
    document.getElementById('workerNum').innerHTML = workerNum;
    if(workerNum === maxWorkerNum){
      var btn = document.getElementsByClassName("worker-btn");
      for(var i = 0; i < btn.length; i++){
      btn[i].disabled = true;
      btn[i].innerHTML = "Upgrade Building";
      };
    };
  } else {
    alert("You do not have enough money, earn some more and try again.");
  };
};

// Fullstack Developer
var fullstackDevNumber = 0;
const fullstackDevCost = 750;
const fullstackDevMoney = 30;
const fullstackDevWage = 600;
document.getElementById('fullstackWage').innerHTML = "£" + fullstackDevWage;
document.getElementById('fullstackEarns').innerHTML = "£" + fullstackDevMoney;
document.getElementById('fullstackDevCost').innerHTML = "£" + fullstackDevCost;
function buyFullstackDev(){
  if(money >= uiuxDesCost){
    money = money - fullstackDevCost;
    fullstackDevNumber = fullstackDevNumber + 1;
    workerNum = workerNum + 1;
    document.getElementById('fullstackDevNumber').innerHTML = fullstackDevNumber;
    document.getElementById('workerNum').innerHTML = workerNum;
    if(workerNum === maxWorkerNum){
      var btn = document.getElementsByClassName("worker-btn");
      for(var i = 0; i < btn.length; i++){
      btn[i].disabled = true;
      btn[i].innerHTML = "Upgrade Building";
      };
    };
  } else {
    alert("You do not have enough money, earn some more and try again.");
  };
};

// BUILDING UPGRADES

// Building upgrade one

const buildingOneRent = 500;
const buildingOneCost = 250;
var buildingOneState = false;
document.getElementById('buildingOnePrice').innerHTML = buildingOneCost;
document.getElementById('buildingOneRental').innerHTML = buildingOneRent;
function buildingUpgradeOne(){
  if(money >= buildingOneCost){
      money = money - buildingOneCost;
      maxWorkerNum = maxWorkerNum + 10;
      buildingOneState = true;
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
    alert("You do not have enough money, earn some more and try again.");
  };
};

// Building upgrade two
  const buildingTwoRent = 3000;
  const buildingTwoCost = 1500;
  var buildingTwoState = false;
  document.getElementById('buildingTwoPrice').innerHTML = buildingTwoCost;
  document.getElementById('buildingTwoRental').innerHTML = buildingTwoRent;
function buildingUpgradeTwo(){
    if(money >= buildingTwoCost){
        money = money - buildingTwoCost;
        maxWorkerNum = maxWorkerNum + 10;
        var buildingTwoState = true;
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
      alert("You do not have enough money, earn some more and try again.");
    };
  };

  // Building upgrade three
  const buildingThreeRent = 8000;
  const buildingThreeCost = 4000;
  var buildingThreeState = false;
  document.getElementById('buildingThreePrice').innerHTML = buildingThreeCost;
  document.getElementById('buildingThreeRental').innerHTML = buildingThreeRent;
  function buildingUpgradeThree(){
      if(money >= buildingThreeCost){
          money = money - buildingThreeCost;
          maxWorkerNum = maxWorkerNum + 10;
          var buildingThreeState = true;
          document.getElementById('money').innerHTML = money;
          document.getElementById('maxWorkerNum').innerHTML = maxWorkerNum;
          document.getElementById('buildingUpgradeThreeBtn').disabled = true;
          document.getElementById('buildingUpgradeThreeBtn').innerHTML = "Owned";
          if(workerNum < maxWorkerNum){
            var btn = document.getElementsByClassName("worker-btn");
            for(var i = 0; i < btn.length; i++){
            btn[i].disabled = false;
            btn[i].innerHTML = "Hire";
            };
          };
      } else {
        alert("You do not have enough money, earn some more and try again.");
      };
    };

    // Building upgrade four
    const buildingFourRent = 17000;
    const buildingFourCost = 8500;
    var buildingFourState = false;
    document.getElementById('buildingFourPrice').innerHTML = buildingFourCost;
    document.getElementById('buildingFourRental').innerHTML = buildingFourRent;
    function buildingUpgradeFour(){
        if(money >= buildingFourCost){
            money = money - buildingFourCost;
            maxWorkerNum = maxWorkerNum + 10;
            var buildingFourState = false;
            document.getElementById('money').innerHTML = money;
            document.getElementById('maxWorkerNum').innerHTML = maxWorkerNum;
            document.getElementById('buildingUpgradeFourBtn').disabled = true;
            document.getElementById('buildingUpgradeFourBtn').innerHTML = "Owned";
            if(workerNum < maxWorkerNum){
              var btn = document.getElementsByClassName("worker-btn");
              for(var i = 0; i < btn.length; i++){
              btn[i].disabled = false;
              btn[i].innerHTML = "Hire";
              };
            };
        } else {
          alert("You do not have enough money, earn some more and try again.");
        };
      };

// Display worker number and max worker number
document.getElementById('maxWorkerNum').innerHTML = maxWorkerNum;
document.getElementById('workerNum').innerHTML = workerNum;


// CONTRACTS

// Contract One
var contractOne = " ";
var contractOneState = false;
const contractOneIncome = 500;
const contractOneCost = 250;
document.getElementById('contractOneCost').innerHTML = "£" + contractOneCost;
function buyContractOne(){
  if(money >= contractOneCost){
    contractOne = "Contract Owned";
    contractOneState = true;
    money = money - contractOneCost;
    document.getElementById('contractOne').innerHTML = contractOne;
    document.getElementById('money').innerHTML = money;
  };
  if(contractOneState === true){
    document.getElementById('contractOneBtn').disabled = true;
    document.getElementById('contractOneBtn').innerHTML = contractOne;
  };
};

// Contract Two
var contractTwo = " ";
var contractTwoState = false;
const contractTwoIncome = 1000;
const contractTwoCost = 250;
document.getElementById('contractTwoCost').innerHTML = "£" + contractTwoCost;
function buyContractTwo(){
  if(money >= contractTwoCost && webDesignerNumber >= 1 && webDeveloperNumber >= 1){
    contractTwo = "Contract Owned";
    contractTwoState = true;
    money = money - contractTwoCost;
    document.getElementById('contractTwo').innerHTML = contractTwo;
    document.getElementById('money').innerHTML = money;
  } else if (webDesignerNumber < 1) {
    alert("Hire More Designers and Try Again");
  } else if (webDeveloperNumber < 1){
    alert("Hire More Developers and Try Again");
  };
  if(contractTwoState === true){
    document.getElementById('contractTwoBtn').disabled = true;
    document.getElementById('contractTwoBtn').innerHTML = contractTwo;
  };
};

// Contract Three
var contractThree = " ";
var contractThreeState = false;
const contractThreeIncome = 2000;
const contractThreeCost = 250;
document.getElementById('contractThreeCost').innerHTML = "£" + contractThreeCost;

function buyContractThree(){
  if(money >= contractThreeCost && webDesignerNumber >= 2 && webDeveloperNumber >= 2 && seoSpecNumber >= 1){
    contractThree = "Contract Owned";
    contractThreeState = true;
    money = money - contractThreeCost;
    document.getElementById('contractThree').innerHTML = contractThree;
    document.getElementById('money').innerHTML = money;
  } else if (webDesignerNumber < 2) {
    alert("Hire More Designers and Try Again");
  } else if (webDeveloperNumber < 2){
    alert("Hire More Developers and Try Again");
  } else if (seoSpecNumber < 1){
    alert("Hire More SEO Specialists and Try Again")
  }
  if(contractThreeState === true){
    document.getElementById('contractThreeBtn').disabled = true;
    document.getElementById('contractThreeBtn').innerHTML = contractThree;
  };
};

// Contract Four
var contractFour = " ";
var contractFourState = 0;
const contractFourIncome = 3500;
const contractFourCost = 250;
document.getElementById('contractFourCost').innerHTML = "£" + contractFourCost;

function buyContractFour(){
  if(money >= contractFourCost && webDesignerNumber >= 2 && webDeveloperNumber >= 2 && seoSpecNumber >= 1 && uiuxDesNumber >= 1){
    contractFour = "Contract Owned";
    contractFourState = 1;
    money = money - contractFourCost;
    document.getElementById('contractFour').innerHTML = contractFour;
    document.getElementById('money').innerHTML = money;
  } else if (webDesignerNumber < 2) {
    alert("Hire More Designers and Try Again");
  } else if (webDeveloperNumber < 2){
    alert("Hire More Developers and Try Again");
  } else if (seoSpecNumber < 1){
    alert("Hire More SEO Specialists and Try Again")
  } else if (uiuxDesNumber < 1){
    alert("Hire More UI/UX Designers and Try Again")
  }
  if(contractFourState === true){
    document.getElementById('contractFourBtn').disabled = true;
    document.getElementById('contractFourBtn').innerHTML = contractFour;
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
    alert("Hire some developers then try training them");
  }
  else if(money < trainDevelopersCost){
    alert("You dont have enough money, earn some more and try again.");
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
    alert("Hire some designers then try training them");
  }
  else if(money < trainDesignersCost){
    alert("You dont have enough money, earn some more and try again.");
  };
};

// Train SEO
var seoSpecNumber = seoSpecNumber;
var upgradeIncr = 20;
var trainSeoIncr = 0;
var trainSeoActive = false;
const trainSeoCost = 500;
document.getElementById('trainSeoCost').innerHTML = "£" + trainSeoCost;
document.getElementById('trainSeoMoneyIncr').innerHTML = "£" + upgradeIncr + " Per Month Per Specialist";
function trainSeo(){
  if(seoSpecNumber >= 1 && money >= trainSeoCost){
    money = money - trainSeoCost;
    trainSeoIncr = upgradeIncr * seoSpecNumber;
    trainSeoActive = true;
    document.getElementById('trainSeoBtn').disabled = true;
    document.getElementById('trainSeoBtn').innerHTML = "Upgraded";
  }
  else if(seoSpecNumber < 1) {
    alert("Hire some SEO Specialists then try training them");
  }
  else if(money < trainSeoCost){
    alert("You dont have enough money, earn some more and try again.");
  };
};

// Train UIUX
var uiuxDesNumber = uiuxDesNumber;
var upgradeIncr = 20;
var trainUiuxIncr = 0;
var trainUiuxActive = false;
const trainUiuxCost = 500;
document.getElementById('trainUiuxCost').innerHTML = "£" + trainUiuxCost;
document.getElementById('trainUiuxMoneyIncr').innerHTML = "£" + upgradeIncr + " Per Month Per Designer";
function trainUiux(){
  if(uiuxDesNumber >= 1 && money >= trainUiuxCost){
    money = money - trainUiuxCost;
    trainUiuxIncr = upgradeIncr * uiuxDesNumber;
    trainUiuxActive = true;
    document.getElementById('trainUiuxBtn').disabled = true;
    document.getElementById('trainUiuxBtn').innerHTML = "Upgraded";
  }
  else if(uiuxDesNumber < 1) {
    alert("Hire some SEO Specialists then try training them");
  }
  else if(money < trainUiuxCost){
    alert("You dont have enough money, earn some more and try again.");
  };
};



// INCREASE / DECREASE MONEY
var day = 0;
var month = 0;
var year = 0;
// Per Day
window.setInterval(function(){
  day = day + 1;
  document.getElementById("day").innerHTML = day;

  var webDesignerAmount = webDesignerMoney * webDesignerNumber;
  var webDeveloperAmount = webDeveloperMoney * webDeveloperNumber;
  var seoSpecAmount = seoSpecMoney * seoSpecNumber;
  var uiuxDesAmount = uiuxDesMoney * uiuxDesNumber;
  var fullstackDevAmount = fullstackDevMoney * fullstackDevNumber;

  if(webDesignerNumber >= 1){
    incMoney(webDesignerAmount);
  };
  if(webDeveloperNumber >= 1){
    incMoney(webDeveloperAmount);
  };
  if(seoSpecNumber >= 1){
    incMoney(seoSpecAmount);
  };
  if(uiuxDesNumber >= 1){
    incMoney(uiuxDesAmount);
  };
  if(fullstackDevNumber >= 1){
    incMoney(fullstackDevAmount);
  };
  if(trainDeveloperActive === true){
    incMoney(trainDevelopersIncr);
  };

  var income = fullstackDevAmount * 31 + uiuxDesAmount * 31 + seoSpecAmount * 31 + webDeveloperAmount * 31 + webDesignerAmount * 31;
  document.getElementById("income").innerHTML = "Monthly Income: &pound" + income;
}, 1000);

// Per Month
window.setInterval(function(){

  day = 0;
  month = month + 1;
  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;

  if(contractOneState >= 1){
    incMoney(contractOneIncome);
  };
  if(webDesignerNumber >= 1){
    decMoney(webDesignerWage * webDesignerNumber);
  };
  if(webDeveloperNumber >= 1){
    decMoney(webDeveloperWage * webDeveloperNumber);
  };
  if(seoSpecNumber >= 1){
    decMoney(seoSpecWage * seoSpecNumber);
  };
  if(uiuxDesNumber >= 1){
    decMoney(uiuxDesWage * uiuxDesNumber);
  };
  if(fullstackDevNumber >= 1){
    decMoney(fullstackDevWage * fullstackDevNumber);
  };
}, 31000);

// Per Year
window.setInterval(function(){

  month = 0;
  year = year + 1;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;

  if(buildingOneState === true){
    decMoney(buildingOneRent)
  };
  if(buildingTwoState === true){
    decMoney(buildingTwoRent)
  };
  if(buildingThreeState === true){
    decMoney(buildingThreeRent)
  };
  if(buildingFourState === true){
    decMoney(buildingFourRent)
  };
}, 403000);


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

// SAVE GAME

function saveGame(){
  var gameData = {
    day: day,
    month: month,
    year: year,
    money: money,
    workerNum: workerNum,
    maxWorkerNum: maxWorkerNum,
    webDesignerNumber: webDesignerNumber,
    webDeveloperNumber: webDeveloperNumber,
    seoSpecNumber: seoSpecNumber,
    uiuxDesNumber: uiuxDesNumber,
    fullstackDevNumber: fullstackDevNumber,
    buildingOneState: buildingOneState,
    buildingTwoState: buildingTwoState,
    buildingThreeState: buildingThreeState,
    buildingFourState: buildingFourState,
    contractOneState: contractOneState,
    trainDeveloperActive: trainDeveloperActive,
    trainDesignersActive: trainDesignersActive
  };
  console.log(gameData);
  localStorage.setItem("gameData", JSON.stringify(gameData));
};


// LOAD GAME

function loadGame(){
  var loadGameData = JSON.parse(localStorage.getItem('gameData'))
  day = loadGameData.day;
  month = loadGameData.month;
  year = loadGameData.year;
  money = loadGameData.money;
  workerNum = loadGameData.workerNum;
  maxWorkerNum = loadGameData.maxWorkerNum;
  webDesignerNumber = loadGameData.webDesignerNumber;
  webDeveloperNumber = loadGameData.webDeveloperNumber;
  seoSpecNumber = loadGameData.seoSpecNumber;
  uiuxDesNumber = loadGameData.uiuxDesNumber;
  fullstackDevNumber = loadGameData.fullstackDevNumber;
  buildingOneState = loadGameData.buildingOneState;
  buildingTwoState = loadGameData.buildingTwoState;
  buildingThreeState = loadGameData.buildingThreeState;
  buildingFourState = loadGameData.buildingFourState;
  contractOneState = loadGameData.contractOneState;
  trainDeveloperActive = loadGameData.trainDeveloperActive;
  trainDesignersActive = loadGameData.trainDesignersActive;

  document.getElementById("day").innerHTML = day;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  document.getElementById("money").innerHTML = money;
  document.getElementById("workerNum").innerHTML = workerNum;
  document.getElementById("maxWorkerNum").innerHTML = maxWorkerNum;
  document.getElementById("webDesignerNumber").innerHTML = webDesignerNumber;
  document.getElementById("webDeveloperNumber").innerHTML = webDeveloperNumber;
  document.getElementById("seoSpecNumber").innerHTML = seoSpecNumber;
  document.getElementById("uiuxDesNumber").innerHTML = uiuxDesNumber;
  document.getElementById("fullstackDevNumber").innerHTML = fullstackDevNumber;
};
function restart(){
  localStorage.removeItem("gameData");
  location.reload();
}
window.onload = loadGame();
