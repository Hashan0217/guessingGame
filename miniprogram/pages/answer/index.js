// game.js

import Game from "../../game/playGame";
Page({

  data: {
    puzzleQuestion: "",
    timer: 180, // 计时器，根据具体需求设置初始值
    userAnswer: "", // 用户输入的答案
  },

  onLoad() {
    const games = new Game();
    this.__proto__.games = games
    games.init()
  },

  // 输入框输入事件处理函数
  onInput: function (event) {
    this.setData({
      userAnswer: event.detail.value,
    });
    
  },
  //回答完毕后
  finishAnswer() {
    const userAnswer = this.data.userAnswer;
    this.games.checkAnswer(userAnswer)
  },

  //卸载页面时关闭游戏
  onunload: function () {
    this.__proto__.games = null
  }

});
