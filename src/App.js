import { useState } from "react";
import Investment from "./Components/Investment/Investment";
import NewInvestment from "./Components/NewInvestment/NewInvestment";
import logo from "./assets/investment-calculator-logo.png";
import Header from "./Components/Header/Header";

function App() {
  const [userInput, setUserInput] = useState(null);
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo} />

      <NewInvestment calculateHandler={calculateHandler} />
      <Investment
        items={yearlyData}
        initialInvestment={userInput != null && userInput["current-savings"]}
      />
    </div>
  );
}

export default App;
