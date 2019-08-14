import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";

function Add(props) {
  const [url, setURL] = useState(
    "https://www.uniqlo.com/us/en/women-u-crew-neck-short-sleeve-t-shirt-421301.html?dwvar_421301_color=COL02#teesAnchor=&start=2&cgid=women-uniqlo-u"
  );
  const [priceOptions, setPriceOptions] = useState([]);
  const [priceValues, setPriceValues] = useState({});
  const [submitted, setSubmitted] = useState({
    url: false,
    colors: false,
    price: false
  });
  const [itemData, setItem] = useState(null);
  const [checkboxOptions, setCheckboxOptions] = useState(null);
  const [checkboxValue, setCheckValue] = useState({});
  const [all, setAll] = useState(true);

  function getItemData(e) {
    axios.post("/.netlify/functions/getItem", { url }).then(function(response) {
      const colorsInitialMap = Object.values(response.data.options)
        // Map over received options to get a list of colors
        .map(function extractColor(value) {
          let itemColor = value.color.replace(/\s/g, "");
          return itemColor;
        })
        // Create the initial map of colors given the list of colors provided
        // Every value is `true` by default because every color is selected at first
        .reduce(function createCheckboxMapEntry(acc, currentItemColor) {
          return {
            ...acc,
            [currentItemColor]: true
          };
        }, {});

      // TODO look into making a state machine to manage multiple state at the same time
      setCheckValue(colorsInitialMap);
      setItem(response.data);
    });
  }

  useEffect(() => {
    let checkboxeslen = Object.keys(checkboxValue).length;
    if (itemData && checkboxeslen > 0) {
      let options = Object.values(itemData.options).map(function(option) {
        const value = option.color.replace(/\s/g, "");
        // These checkboxes are incredibly slow to update, need to figure out how to make it faster
        return (
          <FormControlLabel
            control={
              <Checkbox
                value={checkboxValue[value]}
                onChange={e =>
                  setCheckValue((currentCheckboxValue) => ({ ...currentCheckboxValue, [value]: e.target.checked }))
                }
                checked={checkboxValue[value]}
              />
            }
            label={option.color}
            key={value}
          />
        );

        // Attempted vanillla input, did not speed up interaction
        //<div key={itemData.options[key].color}>
        //<input type="checkbox" name={itemData.options[key].color} id={value} value={checkboxValue[value]} onChange={e => setCheckValue({...checkboxValue, [value]: e.target.checked})} checked={checkboxValue[value]}/>
        //<label htmlFor={value}>{itemData.options[key].color}</label>
        //</div>
      });
      setCheckboxOptions(options);
      setSubmitted( (submitted) => ({ ...submitted, url: true }));
    }
  }, [itemData, checkboxValue]);

  useEffect(() => {
    if(priceOptions.length !== 0) {
      return;
    }
    
    if (submitted.colors) {
      let selectedOptions = Object.values(checkboxValue).filter(function(option) {
        return Boolean(option);
      });
      console.log(selectedOptions);
      let priceObj = Object.values(selectedOptions).map(function(colorOption) {
        // console.log(<TextField key={tempprices[key]} id={tempprices[key]} label={tempprices[key]} type="number"/>);
        return (
          <TextField
            key={colorOption}
            id={colorOption}
            label={colorOption}
            // type="number"
            value={colorOption}
          />
        );
      });
      console.log(priceObj);
      setPriceOptions(priceObj);
      console.log(checkboxOptions);
    }
  }, [checkboxValue, submitted, checkboxOptions, priceOptions]);

  useEffect(() => {
      console.log("this has rendered");

  }, []);

  function setCheckboxes(bool) {
    setAll(bool);
    let keys = Object.keys(checkboxValue);
    let checks = {};
    // There is 100% a better way to do this but I havent found it yet
    let thing = keys.map(function(item) {
      checks[item] = bool;
      return 1;
    });
    setCheckValue(checks);
  }

  let urlBox = (
    <form>
      <TextField
        required
        id="url"
        label="URL"
        onChange={e => setURL(e.target.value)}
        value="https://www.uniqlo.com/us/en/women-u-crew-neck-short-sleeve-t-shirt-421301.html?dwvar_421301_color=COL02#teesAnchor=&start=2&cgid=women-uniqlo-u"
      />
      <Button
        className="nextButton"
        id="urlsubmit"
        variant="contained"
        disableFocusRipple
        disableRipple
        onClick={e => getItemData(e)}
      >
        Next
      </Button>
    </form>
  );

  function resetAll() {
    setSubmitted({ ...submitted, url: false, colors: false });
    setItem(null);
    setCheckValue({});
    setCheckboxOptions(null);
    // setPrices({});
    props.closePanel();
  }

  function resetURL() {
    setSubmitted({ ...submitted, url: false });
    setItem(null);
    setCheckValue({});
    setCheckboxOptions(null);
  }

  function resetColors() {
    setSubmitted({ ...submitted, colors: false });
  }

  function submit() {
    props.closePanel();
  }

  let colorOptions = (
    <div id="colorOptionsGroup">
      <h4>Select Colors</h4>
      <div id="colorOptions">{checkboxOptions}</div>
      <div>
        {all ? (
          <Button variant="outlined" onClick={() => setCheckboxes(false)}>
            Select none
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => setCheckboxes(true)}>
            Select all{" "}
          </Button>
        )}
      </div>
      <div id="navButtons">
        <Button
          className="backButton"
          id="colorback"
          variant="contained"
          disableRipple
          onClick={() => resetURL()}
        >
          Back
        </Button>
        <Button
          className="nextButton"
          id="colorssubmit"
          variant="contained"
          disableRipple
          onClick={() => setSubmitted({ ...submitted, colors: true })}
        >
          Next
        </Button>
      </div>
    </div>
  );

  let priceInput = (
    <div id="price">
      {priceOptions}
      <div id="navButtons">
        <Button
          className="backButton"
          id="colorback"
          variant="contained"
          disableRipple
          onClick={() => resetColors()}
        >
          Back
        </Button>
        <Button
          className="nextButton"
          id="colorssubmit"
          variant="contained"
          disableRipple
          onClick={() => submit()}
        >
          Add
        </Button>
      </div>
    </div>
  );

  return (
    <Card className="addPanel">
      <header>
        <h2>Add An Item</h2>
        <IconButton aria-label="Settings" onClick={() => resetAll()}>
          <CloseIcon />
        </IconButton>
      </header>
      {submitted.url ? "" : urlBox}
      {submitted.url && <h3>{itemData.itemName}</h3>}
      {submitted.url && !submitted.colors && colorOptions}
      {submitted.colors && priceInput}
    </Card>
  );
}

export default Add;

//       <TextField
//   id="standard-number"
//   label="Price"
//   value={price}
//   onChange={e => setPrice(e.target.value)}
//   type="number"
//   InputLabelProps={{
//     shrink: true,
//   }}
//   margin="normal"
// />
