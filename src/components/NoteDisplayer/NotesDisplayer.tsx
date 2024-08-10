import "./styles.css";
import { useState } from "react";
import { FaThumbtack } from "react-icons/fa";
import { MdColorLens, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { colorChange, deleteNote, Note, togglePin } from "../../store";
import ColorPalette from "../commmon/ColorPallete/ColorPalette";

const Notes: React.FC<Note> = ({ id, title, content, pinned, image, color = "" }) => {
    const dispatch = useDispatch();

    const [background, setBackground] = useState(color);
    const [showColorPalette, setShowColorPalette] = useState(false);

    const handleColorSelect = (color: string) => {
        dispatch(colorChange({ id, color }))
        setBackground(color);
        setShowColorPalette(false);
    };

    return (
        <div className="note-container" style={{ background: background }}>
            <FaThumbtack className={`pin-icon ${pinned ? 'pinned' : ''}`} onClick={() => dispatch(togglePin({ id, pinValue: !pinned }))} />
            
            <div className="note-title">{title}</div>
            <div className="note-content">{content}</div>
            {
                image &&
                <img src={image} alt="" />
            }

            <div className="note-actions">
                <div className="note-icons">
                    <MdColorLens className="note-icon" onClick={() => setShowColorPalette(pre => !pre)}/>
                    {showColorPalette && <ColorPalette styles={{ "right": 0 }} handleColorSelect={handleColorSelect} />}

                    <MdDelete onClick={() => dispatch(deleteNote(id))} className="note-icon" />
                </div>
            </div>
        </div>
    );
};

export default Notes;
