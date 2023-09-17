// game.js
// import data from "./data.json"
class Game {
  constructor() {
    this.questions = []; // 存储题库的数组
    this.currentQuestionIndex = 0; // 当前题目索引
    this.score = 0; // 得分
    this.correctStreak = 0; // 连续答对的次数
    this.maxCorrectStreak = 3; // 三连对成功
  }

  // 初始化游戏，加载题库
   init() {
    this.loadQuestions();
    this.shuffleQuestions();
    this.startGame();
  }

  // 加载题库
  loadQuestions() {
    // 从题库中获取题目，可以根据实际情况实现
    // 将题目添加到 this.questions 数组中
    this.questions= [
     
      {
        "puzzleQuestion": "皮黄肉白红褐彩，鲜美异常妙不可言，煮、炸、炖，样样好，是谁制作最拿手？",
        "puzzleAnswers": "妈妈",
        "isCorrect": false
      },
      {
        "puzzleQuestion": "中秋之夜，天上的星星格外多，猜一成语。",
        "puzzleAnswers": "满天星斗",
        "isCorrect": false
      },
      {
        "puzzleQuestion": "中秋佳节，爸爸妈妈带着你去哪里？",
        "puzzleAnswers": "公园",
        "isCorrect": false
      },
      {
        "puzzleQuestion": "中秋之夜，吃的是什么食物，外皮金黄，馅料丰富多样？",
        "puzzleAnswers": "月饼",
        "isCorrect": false
      },
      {
        "puzzleQuestion": "夜晚的中秋，你可以去户外放一种玩具，看谁的飞得最高？",
        "puzzleAnswers": "风筝",
        "isCorrect": false
      }]
    
    // this.questions = JSON.parse(data).allPuzzles
    
  }

  // 打乱题目顺序
  shuffleQuestions() {
    // 打乱题目顺序，可以使用洗牌算法等方法
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }

  }


  // 开始游戏
  startGame() {
    this.displayQuestion();
  }

  // 显示当前题目
  displayQuestion() {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    const page = getCurrentPages()[1]; // 获取当前页面实例
        // 在页面中显示题目，并监听用户输入
      page.setData({
        puzzleQuestion: currentQuestion.puzzleQuestion,
        userAnswer: "", // 清空用户答案
      });
      
  }

  // 检查用户答案
  checkAnswer(userAnswer) {
    const currentQuestion = this.questions[this.currentQuestionIndex];
    if (userAnswer === currentQuestion.puzzleAnswers) {
      this.correctAnswer();
    } else {
      this.wrongAnswer();
    }
  }

  // 回答正确
  correctAnswer() {
   
    this.score++;
    this.correctStreak++;
    wx.showToast({
      title: "回答正确！",
      icon: "success",
    });
    if (this.correctStreak === this.maxCorrectStreak) {
      this.gameSuccess();
    } else {
      this.nextQuestion();
    }
  }

  // 回答错误
  wrongAnswer() {
    wx.showToast({
      title: "回答错误，游戏结束。",
      icon: "none",
    });
    this.gameOver();
  }

  // 进入下一题
  nextQuestion() {
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex < this.questions.length) {
      this.displayQuestion();
    } else {
      this.gameOver();
    }
  }

  // 游戏结束
  gameOver() {
    // 处理游戏结束逻辑，显示分数等信息
    wx.redirectTo({
      url: `/pages/gameResults/index?target=0&num=${this.score}`, // 跳转到游戏页面的路径
    });
  }

  // 游戏成功
  gameSuccess() {
    // 处理游戏成功逻辑，显示胜利信息
    wx.redirectTo({
      url: `/pages/gameResults/index?target=1&num=${this.score}`, // 跳转到游戏页面的路径
    });
  }
}

module.exports = Game;
