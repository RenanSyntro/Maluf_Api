                     require("../modbus/modbusServer");
const modbusClient = require("../modbus/modbusClient");
let clpData = {};

module.exports = () => {
    const initReadCLP = () => {
        setInterval(function () {
            clpData = modbusClient.getDados();
            clpData.dateTime = new Date().toLocaleString("pt-br");  
        }, 500);  
      
    };

    const getData = () => clpData;

    return { initReadCLP, getData };
  };





