import React from "react";
import Notes from "./Notes";
export default function stickyNote() {

  const notesData = [
    { title: "Title #1", content: "Text Content #1" },
    { title: "Title #2", content: "Text Content #2" },
    { title: "Title #3", content: "Text Content #3" },
  ];
  const note = notesData.map(note => 
    <Notes title={note.title} content={note.content} />);

  return <ul>
    {note}
  </ul>;
}
