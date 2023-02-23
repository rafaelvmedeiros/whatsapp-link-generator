import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="whatsapp-img">
          <img
            src="data:image/png;base64,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"
            alt="whatsapp"
          />
        </div>
        <div className="form">
          <div className="group">
            <label>Phone Number: </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value="1234567890"
            />
          </div>
          <div className="group">
            <label>Message: </label>
            <input type="text" name="text" value="Hello, how are you?" />
          </div>
          <div className="group">
            <label>Final URL: </label>
            <input type="text" name="finalUrl" />
          </div>
          <div className="button-group">
            <button type="submit" name="messageGenerate">
              Generate
            </button>
            <button type="button" name="generatedLink">
              Copiar Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
