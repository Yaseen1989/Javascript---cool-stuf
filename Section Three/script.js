let elem = document.getElementById("res");
let rec = document.getElementById("rec");
let recWidth = document.getElementById("recW");
let recHight = document.getElementById("recH");

  function clickZero() {
    elem.value +='0';
  }

  function clickOne() {
    elem.value +='1';
  }
  function clickTwo() {
    elem.value +='2';
  }
  function clickThree() {
    elem.value +='3';
  }
  function clickFour() {
    elem.value +='4';
  }
  function clickFive() {
    elem.value +='5';
  }
  function clickSix() {
    elem.value +='6';
  }
  function clickSeven() {
    elem.value +='7';
  }
  function clickEight() {
    elem.value +='8';
  }
  function clickNine() {
    elem.value +='9';
  }
  function clickSum() {
        elem.value +='+';
  }
  function clickSub() {
        elem.value +='-';
  }
  function clickMul() {
        elem.value +="*";
  }
  function clickDiv() {
        elem.value +="/";
  }
  function clickMod() {
        elem.value +="%";
  }
  function clickClr() {
    elem.value = '';
  }
  function clickClrRec() {
    rec.value = '';
  }
  function clickEqlRec() {
      var evaloRec = eval(recWidth.value * recHight.value);
      rec.value = evaloRec;
  }
  function clickEql() {
      var evalo = eval(elem.value);
      elem.value = evalo;
  }
