import './styles.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../store/reducer";
import { FaBell, FaThumbtack } from "react-icons/fa";
import { MdColorLens, MdDelete, MdPictureInPicture } from "react-icons/md";
import ColorPalette from '../commmon/ColorPallete/ColorPalette';

const CreateNote: React.FC = () => {
  const dispatch = useDispatch();

  const defaultNote = {
    title: "",
    content: "",
    color: "",
    image: "",
    pinned: false
  }

  const [expand, setExpand] = useState(false);
  const [currentData, setCurrentData] = useState(defaultNote);
  const [showColorPalette, setShowColorPalette] = useState(false);


  const handleInputs = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setCurrentData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const addEvent = (e: any) => {
    e.preventDefault();
    if (currentData.title || currentData.content) {
      dispatch(addNote({ id: Date.now(), ...currentData }));
    }
    setCurrentData(defaultNote);

    setExpand(false);
  };

  const handleColorSelect = (color: string) => {
    setCurrentData((prev) => ({
      ...prev,
      color,
    }));
    setShowColorPalette(false);
  };

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCurrentData((prev) => ({
          ...prev,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePin = () => {
    setCurrentData((prev) => ({
      ...prev,
      pinned: !prev.pinned,
    }));
  };

  const styles = expand ?
    { height: "3rem", marginTop: "0.75rem", marginBottom: "0.75rem" } :
    { height: "1.5rem", marginTop: 0 }

  return (
    <div className="create-note-container" style={{ backgroundColor: currentData.color }}>
      <form className="create-note-form" >
        {
          expand &&
          <FaThumbtack className={`pin-icon ${currentData.pinned ? 'pinned' : ''}`} onClick={togglePin} />
        }
        {
          expand &&
          <input type="text" value={currentData.title} name="title" onChange={handleInputs} placeholder="Title" className="create-note-title" autoComplete="false" />
        }

        <textarea name="content" value={currentData.content} onChange={handleInputs} onClick={() => setExpand(true)} className="create-note-content" style={styles} placeholder="Take a note...">
        </textarea>

        {
          currentData?.image.trim() &&
          <img className='attached-image' src={currentData?.image} />
        }

        {
          expand &&
          <div className="create-note-actions">
            <div className="create-note-icons">
              <FaBell className="create-note-icon" />

              <MdColorLens className="create-note-icon colors" onClick={() => setShowColorPalette(prev => !prev)} />
              {showColorPalette && <ColorPalette styles={{ "left": 0 }} handleColorSelect={handleColorSelect} />}

              <MdPictureInPicture className="create-note-icon" onClick={() => document.getElementById('file-input')?.click()} />
              <input type="file" id="file-input" style={{ display: 'none' }} onChange={handleImageUpload} accept="image/*" />

              <MdDelete onClick={() => setCurrentData(defaultNote)} className="create-note-icon" />
            </div>

            <button onClick={addEvent} className="create-note-close">Save</button>
          </div>
        }
      </form>
    </div>
  );
}

export default CreateNote;
