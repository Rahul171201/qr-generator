import QRCode from "react-qr-code";
import styles from "../styles/Home.module.css";

const QR = (props) => {
  console.log(props.text);
  return (
    <div className={styles.qr}>
      <QRCode
        value={props.text}
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        viewBox={`0 0 256 256`}
      ></QRCode>
    </div>
  );
};

export default QR;
