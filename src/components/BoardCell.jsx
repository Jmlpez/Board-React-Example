import React from "react";

export const BoardCell = ({ size }) => {
    const boardCellStyle = {
        width: `${size.value}px`,
        heigth: `${size.value}px`,
        margin: `${size.margin}px`,
    };
    return (
        <div className="board-cell" style={boardCellStyle}>
            <span></span>
        </div>
    );
};
