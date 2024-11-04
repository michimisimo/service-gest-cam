const campanaRepository = require('../repositories/campanaRepository');

exports.getCampanas = async () => {
    const data = await campanaRepository.getAllCampanas();
    return data;
};

exports.updateCampana = async (id, body) => {
    const data = await campanaRepository.UpdateCampana(id, body);
    return data;
};

exports.updateEstadoCampana = async (id, id_estado) => {
    const data = await campanaRepository.UpdateEstadoCampana(id, id_estado);  // Pasar id_estado al repositorio
    return data;
};

exports.deletecampana = async (id) => {
    const data = await campanaRepository.deleteCampana(id);
    return data;
}

exports.crearCampana = async (campana) => {
    const data = await campanaRepository.insertCampana(campana)
    return data;
};

exports.crearEmailCampana = async (email) => {
    const data = await campanaRepository.insertEmailCampana(email)
    return data;
};

exports.getEmailCampana = async (id_campana) => {
    const data = await campanaRepository.getEmailCampana(id_campana);
    return data;
};