import { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";
  const data = [];
  const [notes, setNotes] = useState(data);
  // const [services, setservices] = useState(data);

  // const {showAlert} = props;
  //get a note a note
  const getnote = async () => {
    //api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //add a note
  const addnote = async (name, email, subject, message) => {
    //api call
    const response = await fetch(`${host}/api/notes/contactform`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, email, subject, message }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //booking
  const addbooking = async (
    date,
    time,
    userName,
    address,
    city,
    state,
    zip,
    phone,
    email
  ) => {
    //api call
    const response = await fetch(`${host}/api/notes/booking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        date,
        time,
        userName,
        address,
        city,
        state,
        zip,
        phone,
        email,
      }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //delete a note
  const deletenote = async (id, props) => {
    const response = await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    let newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    console.log(json);
    setNotes(newNotes);
  };

  //edit a note
  const editnote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    //edit in client
    let newnotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title;
        newnotes[index].description = description;
        newnotes[index].tag = tag;
        break;
      }
    }
    setNotes(newnotes);
  };

  return (
    <noteContext.Provider
      value={{
        notes,
        addnote,
        addbooking,
        editnote,
        deletenote,
        getnote,
      }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default NoteState;
