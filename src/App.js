import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = ({ setNavigate }) => {
  return (
    <div>
      <h1>Test</h1>
      <button onClick={() => setNavigate(true)}>Click Me!</button>
    </div>
  );
};

const data = [
  "https://i.picsum.photos/id/23/200/300.jpg?hmac=NFze_vylqSEkX21kuRKSe8pp6Em-4ETfOE-oyLVCvJo",
  "https://i.picsum.photos/id/249/200/300.jpg?hmac=HXJz3fKmXquFNHrfyd1yRHUYx9SheA_j2gbbya_4mlA",
  "https://i.picsum.photos/id/903/200/300.jpg?hmac=bT2dTWTFYT3TyM7cBatAwmhTtJuzlHBXtqn_kH-z3lU",
  "https://i.picsum.photos/id/871/200/300.jpg?hmac=wXN1u0NeBnK8vCkjkJXzoTfZn6F0JBzgOpCdmRGXsw0",
  "https://i.picsum.photos/id/112/200/300.jpg?hmac=2Y23MnaG65tK7HHRGB9XvjPcMETuBqK4fiu8t5rbBdg",
  "https://i.picsum.photos/id/522/200/300.jpg?hmac=6-KFAVAX70eulRbHj_faT1bRFPGrXhPiDHXe6zPaH-4",
  "https://i.picsum.photos/id/809/200/300.jpg?hmac=jC-cQrqqx-NPPfMItPjmHx8XKCKi5WRG46ds3qYReKI",
  "https://i.picsum.photos/id/984/200/300.jpg?hmac=mLBN3lSvSl08Vh8Kw96TLY7v239gr1idtxVXvYFDkSc",
  "https://i.picsum.photos/id/363/200/300.jpg?hmac=LvonEMeE2QnwxULuBZW5xHtdjkz844GnAPpEhDwGvMY",
  "https://i.picsum.photos/id/209/200/300.jpg?hmac=O_heTT23fut3YnBKcsYxjoH_MCl9YGPcxXx-ZHOjBgc",
];

export const App2 = () => {
  const [count, setCount] = useState(1);
  const refBox = useRef();

  function incrementDiv() {
    let tempCount = count;
    document.getElementById(`test` + count).style.visibility = "hidden";
    if (count != 10) {
      setCount(count + 1);
      tempCount++;
    } else {
      setCount(1);
      tempCount = 1;
    }

    document.getElementById(`test` + tempCount).style.visibility = "visible";
  }

  useEffect(() => {
    refBox.current = incrementDiv;
  });

  useEffect(() => {
    document.getElementById(`test` + count).style.visibility = "visible";
    let intervalObject = setInterval(() => {
      refBox.current();
    }, 5000);
    return () => {
      clearInterval(intervalObject);
    };
  }, []);
  return (
    <div>
      <h1>Main Componenet</h1>
      {data.map((datum, i) => (
        <img
          src={datum}
          key={i}
          alt={datum}
          id={`test` + (i + 1)}
          style={{ visibility: "hidden", position: "absolute" }}
        />
      ))}
    </div>
  );
};

export default App;
