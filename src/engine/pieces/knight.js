import Piece from "./piece";
import Square from "../square";

export default class Knight extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let newMoves = [];
    const checkIfInBoard = (num) => num <= 7 && num >= 0;

    const newCoordsForPiece = [
      //northwest
      [location.row + 2, location.col + 1],
      [location.row + 1, location.col + 2],
      //southwest
      [location.row - 1, location.col + 2],
      [location.row - 2, location.col + 1],
      //southeast
      [location.row - 2, location.col - 1],
      [location.row - 1, location.col - 2],
      //northeast
      [location.row + 1, location.col - 2],
      [location.row + 2, location.col - 1],
    ];

    newCoordsForPiece.forEach((coord) => {
      if (checkIfInBoard(coord[0]) && checkIfInBoard(coord[1])) {
        newMoves.push(Square.at(coord[0], coord[1]));
      }
    });

    return newMoves;
  }
}
