import { useState } from "react";
import { storage } from "./firebase";

function App() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
    </div>
  );
}

export default App;
