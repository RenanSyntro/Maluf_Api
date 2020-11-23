const {getData} = require("../services/requestDataCLP")();

module.exports = (app) => {
  const getRealTime = (req, response) => {
    let dados = getData();
    
    response.send(dados || {});
  };

  return { getRealTime };
};
