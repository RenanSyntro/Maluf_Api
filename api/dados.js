const modbusServer = require("../modbus/modbusServer");
const modbusClient = require("../modbus/modbusClient");

module.exports = (app) => {
  const getRealTime = (req, res) => {
    const dados = modbusClient.getDados();
    res.send(dados || {});
  };

  return { getRealTime };
};
