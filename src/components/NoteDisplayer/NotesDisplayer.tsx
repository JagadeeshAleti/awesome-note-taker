import './styles.css'
import { Note } from "../../store";
import Notes from "../Notes/Notes";

interface NotesDisplayerProps {
    notes: Note[];
    notesType: string;
}

const NotesDisplayer: React.FC<NotesDisplayerProps> = ({ notes, notesType }) => {
    return <>
        {notesType ? <div className="tagname">{notesType}</div> : null}
        <div className="notes-container">
            {
                notes.map((val: Note) => {
                    return (
                        <Notes
                            key={val.id}
                            id={val.id}
                            color={val.color}
                            title={val.title || ""}
                            image={val.image}
                            content={val.content}
                            pinned={val.pinned}
                        />
                    );
                })
            }
        </div>
    </>
}

export default NotesDisplayer