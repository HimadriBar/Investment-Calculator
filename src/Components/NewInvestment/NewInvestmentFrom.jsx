import React, { useState } from "react";
import styles from "./NewInvestmentFrom.module.css";
const NewInvestmentFrom = (props) => {
  const [userInput, setUserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const onChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: +event.target.value };
    });
  };
  const resetHandler = () => {
    setUserInput({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveInvestmentData(userInput);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="current-savings"
            onChange={onChangeHandler}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearly-contribution"
            onChange={onChangeHandler}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className={styles['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expected-return"
            onChange={onChangeHandler}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            onChange={onChangeHandler}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default NewInvestmentFrom;
