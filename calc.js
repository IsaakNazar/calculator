var display = document.getElementById('display');
var current = '0',
memory = '0',
operator = "", //for holding operators (+*-/)
maxLength = 20; // you cant exceed 20 symbols



function onDisplay(n){
//check the length of inserted digits
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
  //put zero before dot if user skipped typing zero
  if (current.length == 0) {
    current = "0.";
  }else {
    if (current.indexOf('.') == -1) {
      current += '.';
    }
  }
  display.value = current;
}
// clear display and put 0 on it
function clearAll(){
  current = "0";
  display.value = current;
}
//removes last symbol
function clearByOne(){
  let symbol = display.value;
  let newNum = symbol.substring(0, symbol.length-1);
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

//show current time and update every 1 minute
function getLocalTime() {
  let d = new Date();
  let hours = ('0'+d.getHours()).slice(-2);
  let mins = ('0'+d.getMinutes()).slice(-2);

  document.getElementById('localTime').innerHTML =
  hours + ":"+ mins;

  setTimeout(getLocalTime, 60000);
}
getLocalTime();

//array holds fontawesome battery icons
const batteries = [
  '<i class="fas fa-battery-empty"></i>',
  '<i class="fas fa-battery-quarter"></i>',
  '<i class="fas fa-battery-half"></i>',
  '<i class="fas fa-battery-three-quarters"></i>',
  '<i class="fas fa-battery-full"></i>'
];

//get battery icons and update status every 1 second
function getBatteryStatus(arr,ind){
  document.getElementById('newBattery').innerHTML = arr[ind % 5];
  setTimeout(function(){ getBatteryStatus(arr, ind+1) }, 1000);
}

setTimeout(function(){getBatteryStatus(batteries, 0) }, 2000);
