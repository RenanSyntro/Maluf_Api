const { response } = require("express");
const knexDb = require("../config/bd")
const {getData} = require("../services/requestDataCLP")();
const {} = require("../config/bd")

const saveData = () => {
    setInterval(function () {
        clpData = getData();
        //console.log(clpData);
        knexDb('registros').insert(clpData);
        knexDb('registros').then((response) => console.log("registro", response));

    }, 5000); 
}

module.exports = {saveData};
