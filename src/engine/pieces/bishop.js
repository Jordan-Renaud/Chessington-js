import Piece from "./piece";
import Square from "../square";

export default class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let newMoves = [];

    //northwest
    for (let i = 0; i <= location.col; i++) {
      const nextSpace = Square.at(location.row + i, location.col - i);
      if (nextSpace.equals(location)) continue;
      //if (nextSpace.col >= 0 && nextSpace.row <= 7)
      newMoves.push(nextSpace);
    }

    //northeast
    for (let i = 0; i <= 7 - location.col; i++) {
      const nextSpace = Square.at(location.row + i, location.col + i);
      if (nextSpace.equals(location)) continue;
      //if (nextSpace.col <= 7 && nextSpace.row <= 7)
      newMoves.push(nextSpace);
    }

    //southeast
    for (let i = 0; i <= location.row; i++) {
      const nextSpace = Square.at(location.row - i, location.col + i);
      if (nextSpace.equals(location)) continue;
      //if (nextSpace.col <= 7 && nextSpace.row >= 0)
      newMoves.push(nextSpace);
    }

    //southwest
    for (let i = 0; i <= location.row; i++) {
      const nextSpace = Square.at(location.row - i, location.col - i);
      if (nextSpace.equals(location)) continue;
      //if (nextSpace.col >= 0 && nextSpace.row >= 0)
      newMoves.push(nextSpace);
    }

    return newMoves;
  }
}
