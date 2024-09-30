// handleEvents state
import {useState} from "react";

const messages = [
  "Learn React *",
  "Apply for Jobs *",
  "Invest your new income $"
]

export default function App() {
  const [step, setStep] = useState(1);
  // manually setting state
  // let [step, setStep] = useState(1);

  // const [test, setTest] = useState({name: "Minahal"}); 

  const [isOpen, setIsOpen] = useState(true);

  function handlePrevoius(){
    // if (step > 1) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1);
  }
  
  function handleNext(){
    if (step < 3) setStep((s) => s + 1);
    // manually setting state
    // step = step + 1;

    // bad practice for mutating objects
    // test.name = 'Fatimah'

    // setTest({name: "fatimah"})
  }
  
  return (
    <div >
    <button className="close" onClick={()=> setIsOpen((is) => !is)}>&times;</button>
    { isOpen && (
      
      <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[ step-1]}
        {/* {test.name} */}
      </p>
      <div className="buttons">
        <button 
          style={{backgroundColor: "#7950f2", color: "white"}}
          onClick={handlePrevoius}
        >
          Prevoius
        </button>
        <button style={{backgroundColor: "#7950f2", color: "white"}}
        onClick={handleNext}>
          Next
        </button>
      </div>
    </div>)}
    </div>
    
  );
}
