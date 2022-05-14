import Piece from "./piece";
import Square from "../square";

export default class King extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    let location = board.findPiece(this);
    let newMoves = [];
    const checkIfInBoard = (num) => num <= 7 && num >= 0;

    const newCoordsForPiece = [
      //north
      [location.row + 1, location.col],
      //northwest
      [location.row + 1, location.col + 1],
      //west
      [location.row, location.col + 1],
      //southwest
      [location.row - 1, location.col + 1],
      //south
      [location.row - 1, location.col],
      //southeast
      [location.row - 1, location.col - 1],
      //east
      [location.row, location.col - 1],
      //northeast
      [location.row + 1, location.col - 1],
    ];

    newCoordsForPiece.forEach((coord) => {
      if (checkIfInBoard(coord[0]) && checkIfInBoard(coord[1])) {
        newMoves.push(Square.at(coord[0], coord[1]));
      }
    });

    return newMoves;
  }
}
