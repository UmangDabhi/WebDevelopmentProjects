const addBtn = document.querySelector("#addbtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", addNote);

function addNote() {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
    <span class="material-symbols-outlined save">
        save
    </span>
    <span class="material-symbols-outlined trash">
        delete
    </span>
</div>
<textarea></textarea>
    `;

  const trash = note.querySelector(".trash");
  const save = note.querySelector(".save");
  const textarea = note.querySelector("textarea");

  trash.addEventListener("click", () => {
    note.remove();
    saveNote();
  });
  save.addEventListener("click", saveNote);
  textarea.addEventListener("input", saveNote);

  main.appendChild(note);
}

function saveNote() {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];
  for(let i=0;i<notes.length;i++){
    data.push(notes[i].value);
  }
  if(data.length === 0){
    localStorage.removeItem("notes");
  }else{
    localStorage.setItem("notes",JSON.stringify(data));
  }
}

function loadNote() {
    const isNotes = JSON.parse(localStorage.getItem("notes"));
    if(isNotes !== null){
        isNotes.forEach(noteText => {
            addNote();
            const notes = document.querySelectorAll(".note textarea");
            const lastnote = notes[notes.length-1];
            lastnote.value = noteText;
            
        });
    }else{
        addNote();
    }
}

loadNote();