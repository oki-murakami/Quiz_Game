const quiz = [
  {
    question: '葛木ミサトがいつも飲んでいるビールのメーカーは次の内どれ？',
    answers: [
      'エビス',
      'サッポロ',
　    'アサヒ',
　    'キリン' 
    ],
    correct: 'エビス'
  }, {
    question: 'エヴァンゲリオンDEATH(TRUE)2で『カノン』パッヘルバルの演奏の際に、シンジが弾いていた楽器は次の内どれ？',
    answers: [
      'ギター',
      'チェロ',
　    'ヴィオラ',
　    'ヴァイオリン' 
    ],
    correct: 'チェロ'
  }, {
    question: 'シンジ、レイ、アスカ達が通っている学校のセーラー服のリボンの色は次の内どれ',
    answers: [
      '緑',
      '赤',
　    'オレンジ',
　    '黄色' 
    ],
    correct: '赤'
  } 
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題、洗濯時の定義
const setupQuiz = () => {
  document.getElementById('js-qestion').textContent = quiz[quizIndex].question;  
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }

  quizIndex++;

  if(quizIndex < quizLength){
//問題数がまだあればこちらを実行
    setupQuiz();
  } else {
//問題数がもうなければこちらを実行
　　window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }

};


let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}




