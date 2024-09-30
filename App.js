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

      <StepMessage step={step}>
        {messages[ step-1]}
      </StepMessage>
      <div className="buttons">
        <Button bgColor='#7950f2' textColor='#fff' 
          onClick={handlePrevoius}>
          <span>👈</span>Previous
        </Button> 

        <Button bgColor='#7950f2' textColor='#fff' 
          onClick={handleNext} >
          <span>👉</span>Next
        </Button>
      </div>
    </div>)}
    </div>
    
  );
}

function StepMessage({step, children}){
  return(
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({textColor, bgColor, onClick, children}){
  return(
    <button style={{backgroundColor: bgColor, color: textColor}}
    onClick={onClick}>
      {/* empty hole adnd fill with whatever we pass in */}
    {children} 
    </button>
  );
}