class NQueen {
  constructor (queenSize) {
    this.queenSize = queenSize
    this.queenPositions = new Array(queenSize)
    this.totalCount = 0
    this.result = []
  }

  isCanPut (queensCount) {
    let postions = this.queenPositions
    for (let row = 0; row < queensCount; row++) {
      //已放置皇后的x,y坐标图(postions[row],row)
      //当前准备放置的皇后x,y坐标图(postions[queensCount],queensCount)
      if (postions[row] == postions[queensCount] || queensCount - row == postions[queensCount] - postions[row] || queensCount - row == (postions[queensCount] - postions[row]) * -1) {
        return false
      }
    }
    return true
  }

  searchQueen (queensCount = 0) {
    if (queensCount == this.queenSize) {
      //结束后条件，找到的皇后数量等于设定的目标数量
      this.result.push([].concat(this.queenPositions))
      this.totalCount += 1
      return
    } else {
      //queensCount代表第几个皇后，每个皇后只能放在一行，那么皇后数即代表行数
      for (let column = 0; column < this.queenSize; column++) {
        this.queenPositions[queensCount] = column
        if (this.isCanPut(queensCount)) {
          //可放置，则寻找下一个queen，否则水平更换当前queen的位置
          this.searchQueen(queensCount + 1)
        }
      }
    }
  }

  start () {
    this.searchQueen()
  }
}