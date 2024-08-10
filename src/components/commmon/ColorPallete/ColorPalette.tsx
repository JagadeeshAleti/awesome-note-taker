import './styles.css'
import React from "react";

type styles = {
    [key: string]: string | number;
};

interface Props {
    styles: styles
    handleColorSelect: (color: string) => void;
}

const colors = ['#ADD8E6', '#90EE90', '#D3D3D3', '#FFB6C1', '#A3C9AA', '#FFE4E1', '#D8BFD8', '#FFFFFF'];
const ColorPalette: React.FC<Props> = ({ handleColorSelect, styles }) => {
    return (
        <div className="color-palette" style={styles}>
            {colors.map((color: string) => (
                <div
                    key={color}
                    className="color-swatch"
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorSelect(color)}
                />
            ))}
        </div>
    )
}

export default ColorPalette
