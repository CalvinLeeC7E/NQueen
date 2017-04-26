"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NQueen = function () {
  function NQueen(queenSize) {
    _classCallCheck(this, NQueen);

    this.queenSize = queenSize;
    this.queenPositions = new Array(queenSize);
    this.totalCount = 0;
    this.result = [];
  }

  _createClass(NQueen, [{
    key: "isCanPut",
    value: function isCanPut(queensCount) {
      var postions = this.queenPositions;
      for (var row = 0; row < queensCount; row++) {
        //已放置皇后的x,y坐标图(postions[row],row)
        //当前准备放置的皇后x,y坐标图(postions[queensCount],queensCount)
        if (postions[row] == postions[queensCount] || queensCount - row == postions[queensCount] - postions[row] || queensCount - row == (postions[queensCount] - postions[row]) * -1) {
          return false;
        }
      }
      return true;
    }
  }, {
    key: "searchQueen",
    value: function searchQueen() {
      var queensCount = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

      if (queensCount == this.queenSize) {
        //结束条件，找到的皇后数量等于设定的目标数量
        this.result.push([].concat(this.queenPositions));
        this.totalCount += 1;
        return;
      } else {
        //queensCount代表第几个皇后，每个皇后只能放在一行，那么皇后数即代表所在行数
        for (var column = 0; column < this.queenSize; column++) {
          this.queenPositions[queensCount] = column;
          if (this.isCanPut(queensCount)) {
            //可放置，则寻找下一个queen，否则水平更换当前queen的位置
            this.searchQueen(queensCount + 1);
          }
        }
      }
    }
  }, {
    key: "start",
    value: function start() {
      this.searchQueen();
    }
  }]);

  return NQueen;
}();

//# sourceMappingURL=NQueen-compiled.js.map