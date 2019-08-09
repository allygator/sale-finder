import React, {useEffect, useState} from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import axios from 'axios';


function Add() {
    const [values, setValues] = useState({
        url: 'https://www.uniqlo.com/us/en/women-u-crew-neck-short-sleeve-t-shirt-421301.html?dwvar_421301_color=COL02#teesAnchor=&start=2&cgid=women-uniqlo-u',
        price: null,
        submitted: false,
        itemData: {},
        itemOptions: null
    });
    const [checkboxes, setCheck] = useState({});
    const [all, setAll] = useState(false);

    const [fetchReturn, setFetchData] = useState();

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const checkHandleChange = name => event => {
        setCheck({ ...checkboxes, [name]: event.target.checked });
    };

    function getItemData(e) {
        e.preventDefault();
        let checkStatusArray = [];
        axios.post('/.netlify/functions/getItem', {url: values.url})
            .then(function(response){
                setFetchData(response.data);
                // let colorsCreater = Object.keys(response.data.options).map(function(key) {
                //     let itemColor = response.data.options[key].color;
                //     itemColor = itemColor.replace(/\s/g, '');
                //     checkStatusArray.push({[itemColor]: false});
                // });
                createCheckboxes(checkStatusArray);
                let colors = Object.keys(response.data.options).map(function(key) {
                    let itemColor = response.data.options[key].color;
                    itemColor = itemColor.replace(/\s/g, '');
                    return (<FormControlLabel control={<Checkbox value={response.data.options[key].color} onChange={checkHandleChange(itemColor)} checked={checkboxes[itemColor]} />} label={response.data.options[key].color} key={response.data.options[key].color}/>);
                })

                setValues({ ...values, itemData: response.data, submitted: true, itemOptions: colors });
            })
            // .then(function(response){
    }

    function createCheckboxes(checkStatusArray) {
        var checks = {};
        for (var i=0; i<checkStatusArray.length; i++) {
            let key = (Object.keys(checkStatusArray[i])[0]);
            let value = (Object.values(checkStatusArray[i])[0]);
            checks[key] = value;
        };
        setCheck(checks);
    }

    function setCheckboxes(bool) {
        setAll(bool);
        let keys = Object.keys(checkboxes);
        let checks = {};
        for (var i=0; i<keys.length; i++) {
            checks[keys[i]] = bool;
        }
        setCheck(checks);
    }


    let urlBox = (
        <form>
            <TextField
              required
              id="url"
              label="URL"
              onChange={handleChange('url')}
              value="https://www.uniqlo.com/us/en/women-u-crew-neck-short-sleeve-t-shirt-421301.html?dwvar_421301_color=COL02#teesAnchor=&start=2&cgid=women-uniqlo-u"
            />
        <Button id="submit" variant="contained" onClick={(e)=> getItemData(e)}>
            Submit
          </Button>
        </form>
    );

    let colorOptions = (
        <div id="colorOptionsGroup">
            <h3>Select Colors</h3>
            <div id="colorOptions">
                {values.itemOptions}
            </div>
        {all ?
            (<Button variant="contained" onClick={()=> setCheckboxes(false)}>Select none</Button>)
            : (<Button variant="contained" onClick={()=> setCheckboxes(true)}>Select all </Button>)
        }
        </div>
    )

    return (
        <Card className="addPanel">
            <h2>Add An Item</h2>
            {values.submitted ? "" : urlBox}
            {values.submitted && colorOptions}
        </Card>
    );
}

export default Add;
