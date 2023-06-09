const { subirArchivo } = require("../helpers/subir-archivo");


const cargarArchivo = async (req,res) => {
    if (!req.files.archivo || Object.keys(req.files).length === 0 || !req.files.archivo ) {
        res.status(400).json({msg: 'no hay archivos que subir'});
        return;
      }
      const pathArchivo = await subirArchivo(req.files,txt );
      res.json({
        path: pathArchivo
      })
}

const updateImg = async(req,res) => {
    const { id, coleccion } = req.params;
    res.json({id,coleccion})
}

module.exports = {
    cargarArchivo,
    updateImg
}