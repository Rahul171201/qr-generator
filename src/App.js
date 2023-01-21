import { useState } from "react";
import QR from "./components/QR";
import styles from "./styles/Home.module.css";
import Example from "./components/example";

function App(props) {
  const [text, setText] = useState("");
  const [finalText, setFinalText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFinalText(text);
    setText("");
  };

  return (
    <div className={styles.app}>
      <div className={styles.main}>
        <div className={styles.qrSection}>
          <props.Comp text={finalText}></props.Comp>
          <div className={styles.formSecton}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className={styles.inputField}
                value={text}
                onChange={handleChange}
              ></input>
              <button type="submit" className={styles.submitButton}>
                {" "}
                Generate QR
              </button>
            </form>
          </div>
          <div className={styles.description}>
            <span>
              Type in any text and it will automatically convert it to a QR
              Code!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const outsideFunction = () => {
  return (
    <App Comp={QR}>
      <Example></Example>
    </App>
  );
};

export default outsideFunction;
