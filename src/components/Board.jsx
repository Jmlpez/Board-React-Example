import React from "react";
import PropTypes from "prop-types";
// import { PropTypes } from "prop-types;";
// import { checkPropTypes } from "prop-types";
import { BoardCell } from "./BoardCell";

import "./board.css";

export const Board = ({ row, col, size }) => {
    const fullArr = new Array(row * col).fill(0);

    // fixed-calculations for the board
    const boardStyle = {
        width: `${size.value * col + size.margin * col * 2}px`,
        height: `${size.value * row + size.margin * row * 2}px`,
    };

    return (
        <section className="board-app">
            <div className="board-container" style={boardStyle}>
                <section className="board" style={boardStyle}>
                    {fullArr.map((el, idx) => (
                        <BoardCell key={idx} size={size} />
                    ))}
                </section>
            </div>
        </section>
    );
};

// Board.defaultProps = {
//     row: 3,
//     col: 3,
//     size: {
//         value: 50,
//         margin: 2,
//     },
// };
// Board.propTypes = {
//     row: PropTypes.number,
//     col: PropTypes.number,
//     size: PropTypes.object,
// };
