// challenge:1

function ageInDays() {
  let birthyear = prompt("What year do you born......?");
  let ageInDayss = (2021-birthyear)*365;
  let h2 = document.createElement("h2")
  var textAnswer = document.createTextNode('You are '+ ageInDayss+' days in age.')
  h2.setAttribute('id', 'age-In-Days')
  h2.appendChild(textAnswer)
  document.getElementById('flex-box-result').appendChild(h2)
  console.log(ageInDayss)
}

function reset(){
    document.getElementById('age-In-Days').remove()
}