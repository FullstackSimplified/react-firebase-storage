import { useState } from "react";
import { storage } from "./firebase";

function App() {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState([
    "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698019200&semt=sph",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWg6cEGOkqkDOldajm1-JBfA4p7d34qALSNpdCrBfDqg&s",
  ]);
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
            setImages((prevState) => [...prevState, url]);
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
      {/* an image grid */}
      <div className="image-container">
        {images.map((img, index) => (
          <section key={index} className="image-wrapper">
            <img src={img} alt="" width="100%" height="100%" />
          </section>
        ))}
      </div>
    </div>
  );
}

export default App;
