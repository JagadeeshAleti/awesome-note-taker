import "./styles.css";
import { Note } from "../../store";
import { useSelector } from "react-redux";
import { RootState } from "../../store/redux-store";
import Header from "../Header/Header";
import CreateNote from "../CreateNote/CreateNote";
import NotesDisplayer from "../NoteDisplayer/NotesDisplayer";

const NoteTaker: React.FC = () => {
    const notes = useSelector((state: RootState) => state.notes.notes);
    const pinnedNotes = notes.filter((note: Note) => note.pinned);
    const otherNotes = notes.filter((note: Note) => !note.pinned);

    return (
        <>
            <div className="container">
                <Header />
                <CreateNote />
                <div className="all-notes">
                    {pinnedNotes.length === 0 && <NotesDisplayer notes={notes} notesType={""} />}
                </div>
                <div className="pinned-notes">
                    {pinnedNotes.length > 0 && <NotesDisplayer notes={pinnedNotes} notesType={"PINNED"} />}
                </div>
                <div className="unpinned-notes">
                    {pinnedNotes.length > 0 && <NotesDisplayer notes={otherNotes} notesType={"OTHERS"} />}
                </div>
            </div>
        </>
    );
};

export default NoteTaker;
