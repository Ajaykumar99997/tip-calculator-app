// Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount /
// person Total / person Reset

function tipPercent(num) {
  let amount = document.getElementById('bill-amount');
  let bill = amount.value;
  bill = Number(bill);

  let people = document.getElementById('people');
  let numOfPeople = people.value;
  numOfPeople = Number(numOfPeople);
  if (bill != '' && bill != 0 && numOfPeople != 0 && numOfPeople != '') {
    let perPerson = bill / numOfPeople;
    let tipAmount = perPerson * num;
    let total = tipAmount + perPerson;
    // console.log(tipAmount);
    // console.log(total);

    let tip = document.getElementById('tip');
    tip.innerText = '$' + tipAmount;
    let perTotal = document.getElementById('perTotal');
    perTotal.innerText = '$' + total;
  }
}
function reset() {
  document.getElementById('bill-amount').value = '';
  document.getElementById('people').value = '';
  document.getElementById('tip').innerText = '$0.00';
  document.getElementById('perTotal').innerText = '$0.00';
  document.getElementById('custom-id').value = '';
}

function customTip() {
  let custom = document.getElementById('custom-id');
  let customValue = custom.value / 100;
  tipPercent(customValue);
}
