var display = document.getElementById('display');
var current = '0',
memory = '0',
operator = "",
maxLength = 20;



function onDisplay(n){

  if (current.length > maxLength) {
    current = 'oops, too long';
  } else {
    if (eval(current) == 0 && current.indexOf('.') == -1) {
      current = n;
    } else {
      current += n;
    }
  }
  display.value = current;
}

function dot(){
  if (current.length == 0) {
    current = "0.";
  }else {
    if (current.indexOf('.') == -1) {
      current += '.';
    }
  }
  display.value = current;
}

function clearAll(){
  current = "0";
  display.value = current;
}

function clearByOne(){
  var symbol = display.value;
  var newNum = symbol.substring(0, symbol.length-1);
  display.value = newNum;
  current = newNum;
}
function operate(oper){
  if (oper.indexOf('+') > -1) operator = '+';
  if (oper.indexOf('-') > -1) operator = '-';
  if (oper.indexOf('*') > -1) operator = '*';
  if (oper.indexOf('/') > -1) operator = '/';

  memory = current;
  current = "";
  display.value = current;
  console.log(memory);
}
function calculate(){
  if(operator == '+'){ current = eval(memory) + eval(current); }
  if(operator == '-'){ current = eval(memory) - eval(current); }
  if(operator == '*'){ current = eval(memory) * eval(current); }
  if(operator == '/'){
    if(eval(current) != 0){
      current = eval(memory) / eval(current);
    } else {
      current = 'oops, divide by zero';
    }
  }
  operator = "";
  memory = "0";
  display.value = current;
}

function getLocalTime() {
  var d = new Date();
  var hours = ('0'+d.getHours()).slice(-2);
  var mins = ('0'+d.getMinutes()).slice(-2);

  document.getElementById('localTime').innerHTML =
  hours + ":"+ mins;

  setTimeout(getLocalTime, 60000);
}
getLocalTime();

let batteries = [
  '<i class="fas fa-battery-empty"></i>',
  '<i class="fas fa-battery-quarter"></i>',
  '<i class="fas fa-battery-half"></i>',
  '<i class="fas fa-battery-three-quarters"></i>',
  '<i class="fas fa-battery-full"></i>'
];
function getBatteryStatus(arr,ind){
  document.getElementById('newBattery').innerHTML = arr[ind % 5];
  setTimeout(function(){ getBatteryStatus(arr, ind+1); }, 1000);
}
setTimeout(function(){getBatteryStatus(batteries, 0); }, 2000);
//setTimeout(getBatteryStatus, 2000);

// function getBatteryStatus(){
//   var random = Math.floor(Math.random() * batteries.length);;
//   document.getElementById('newBattery').innerHTML = status[random] + batteries[random];
// }
// var batterInterval = setInterval(getBatteryStatus, 1000);
