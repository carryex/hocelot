import React, { useEffect, useState } from "react";
import classes from "../../App9.module.css";
import dotsImg from "../../images/dots.svg";
import arrow from "../../images/Chevron Right 1.png";
import checkImg from "../../images/check.svg";

const Block = ({ changeSelectedOption, data, onButtonClick }) => {
  return (
    <div className={classes.block_wrapper}>
      <div className={classes.block}>
        <div className={classes.block_header}>
          <img src={dotsImg} alt="dots" />
          <span>automathed</span>
        </div>
        <div className={classes.block_input}>
          <Input changeSelectedOption={changeSelectedOption} data={data} />
        </div>
        <div className={classes.block_content}>
          <div>
            <span>{data.originalColumnName}</span>
          </div>
        </div>
        <div>
          {data.sampleValues.map((sampleValue) => (
            <div>{sampleValue}</div>
          ))}
        </div>
        <div className={classes.missing_data}>
          <span>Missing Data:</span>
          <span>134/2000</span>
        </div>
      </div>
      {data.isConfirmed ? (
        <button className={classes.column_confirmed_button}>
          {" "}
          <img src={checkImg} alt="" /> Column Confirmed
        </button>
      ) : (
        <button
          className={classes.select_column_button}
          disabled={true}
          // onClick={() =>
          //   onButtonClick(
          //     data.numberColumn,
          //     true,
          //     data.originalColumnName,
          //     data.selectedOption.variableName,
          //     data.selectedOption.dataType,
          //   )
          // }
        >
          Select Column
        </button>
      )}
    </div>
  );
};

const Input = ({ changeSelectedOption, data }) => {
  const [isOptionsOpen, setOptionsOpen] = useState(false);
  // useEffect(() => {
  //   if (!data.selectedOption) {
  //     changeSelectedOption(data.options[0]);
  //   }
  // }, [changeSelectedOption, data.options, data.selectedOption]);

  const handleSubmit = (newOption, data) => {
    changeSelectedOption(newOption, data);
    setOptionsOpen(false);
  };

  return (
    <div>
      <div
        className={`${classes.block_input_current_value}
          ${isOptionsOpen ? classes.block_input_current_value_opened : ""}`}
        onClick={() => setOptionsOpen(!isOptionsOpen)}
      >
        <div>
          <img src={data.icon} alt="" />
          <span>{data.selectedOption.variableName}</span>
        </div>
        <img
          className={
            isOptionsOpen ? classes.options_opened : classes.options_closed
          }
          src={arrow}
          alt=""
        />
      </div>
      {isOptionsOpen && (
        <div className={classes.block_input_options}>
          {data.options.map((option) => (
            <div
              onClick={() => {
                handleSubmit(option, data);
              }}
              className={classes.input_option}
            >
              {option.variableName}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Block;
