import Piece from "./piece";
import Square from "../square";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let newMoves = [];
    //vertical move
    for (let i = 0; i <= 7; i++) {
      if (i !== location.row) {
        newMoves.push(Square.at(i, location.col));
      }
    }
    //horizontal move
    for (let i = 0; i <= 7; i++) {
      if (i !== location.col) {
        newMoves.push(Square.at(location.row, i));
      }
    }

    return newMoves;
  }
}
