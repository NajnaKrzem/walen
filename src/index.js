import React, { useState } from 'react';
import ReactDom from "react-dom/client";
import './styles.css';
import ButtonComponent from "./ButtonComponent";
import Button2 from "./ButtonComponent2";


// stwoorzenie zmiennej root
const el = document.getElementById('root');

//chcemy pokazac zawartosc strony w rootcie
const root = ReactDom.createRoot(el);

//komponetnt
function App() {
    const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(true);
  };
    return (
    <div>
        <h1 className='tytul'>Czy zostaniesz moją walentynką?</h1>
        <div className="container">
        {!showContent ? (
        <ButtonComponent />
      ) : (
        <div>
        </div>
      )}
        <Button2 buttonclicked={setShowContent}/>
        </div>
    </div>
        );
}

// pokazanie komponentu aplikacji
root.render(<App />);

