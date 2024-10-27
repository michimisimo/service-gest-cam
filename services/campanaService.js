const campanaRepository = require('../repositories/campanaRepository');

exports.getCampanas = async () => {
    const data = await campanaRepository.getAllCampanas();
    return data;
};

exports.updateCampana = async (id, body) => {
    const data = await campanaRepository.UpdateCampanas(id, body);
    return data;
};

exports.deletecampana = async (id) => {
    const data = await campanaRepository.deleteCampana(id);
    return data;
}
