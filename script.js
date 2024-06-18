class TicTacToe {
  constructor() {
    this.board = array(9).fill(null); //initialize the board with 9 null values
    this.currentPlayer = "X"; //x always goes first
  }
}

makeMove(index){
    if (!this.board[index] && !this.checklWinner()){
        this.board[index] = this.currentPlayer;
        if (!this.checklWinner()){
            this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        }
    }
}
