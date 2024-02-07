const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function makenumber() {
  let base = [];
  for (let i = 0; base.length < 3; i++) {
    let num = Math.floor(Math.random() * 10);
    if (!base.includes(num)) {
      base.push(num);
    }
  }
  let number = base.join("");
  console.log("컴퓨터가 숫자를 생성하였습니다 답을 맞춰보세요");
  return number;
}

let count = 1;
function check(resultString, input) {
  let strike = 0;
  let ball = 0;
  

  if (input.length == 3) {
    for (let i = 0; i < 3; i++) {
      if (resultString.includes(input[i])) {
        if (input[i] === resultString[i]) {
          strike += 1;
        } else { 
          ball += 1;
        }
    }
    }
     // 각 입력마다 맞춘 횟수를 증가
    console.log(`${ball}B ${strike}S`);
    if(strike!==3){
    count++;
    }
    
    
  } else {
    console.log("3자리 숫자만 입력해주세요");
  }

  return { strike};
}

let number = makenumber();
console.log(number);


function getUserInput() {
  rl.question(`${count}번째시도`, (userInput) => {
    
    console.log(userInput);
    let { strike } = check(number, userInput);
    
    if (strike === 3) {
      console.log(`축하합니다! ${count}번의 시도 끝에 숫자를 맞추셨습니다.`);
      console.log(`게임을 종료합니다.`);
      rl.close();
    } else {
      getUserInput();
    }
  
})
}

getUserInput();
