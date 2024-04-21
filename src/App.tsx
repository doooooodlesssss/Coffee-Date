import { useState } from "react";
import "./App.css";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, my pookie?",
      "Pakka sure?",
      "But I'm your Buba",
      "I'm your Sally",
      "Pleaseeeeeeee",
      "You might regret this!",
      "Aren't you my Tara?",
      "Are you 1000000% certain?",
      "Sochle Ranjab",
      "Have a heart!",
      "MY BATMANNNN",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "I'm just a girl!!",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">YAYAYYYYY!!!</div>
            <div className="textt">
              I'll pick you up after the DLD Exam, my pookie. We going Blue
              Tokai!!{" "}
            </div>
          </>
        ) : (
          <>
            <img
              className="h-[200px]"
              style={{ width: "400x", height: "240px" }}
              src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            />
            <h1 className="text-container">
              Will you go on a coffee date with me on 29th April?
            </h1>
            <div>
              <button
                className={"yes-button"}
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
