import constants from "../../enviroment/config";
const get_medical_records = {
    url: `${constants.api_url}/nutritionist/medical_records/questions/`,
    typeRequest: "get",
};
const get_medical = {
    url: `${constants.api_url}/nutritionist/medical_records/#/`,
    typeRequest: "get",
};
const get_gyneco = {
    url: `${constants.api_url}/nutritionist/medical_records/#/gynecology/`,
    typeRequest: "get",
};
const get_diet = {
    url: `${constants.api_url}/nutritionist/medical_records/#/diet/`,
    typeRequest: "get",
};
const get_question_ans = {
    url: `${constants.api_url}/nutritionist/medical_records/#/answers/`,
    typeRequest: "get",
};
const get_medication = {
    url: `${constants.api_url}/nutritionist/medical_records/#/medications/`,
    typeRequest: "get",
};
const get_suplement = {
    url: `${constants.api_url}/nutritionist/medical_records/#/supplements/`,
    typeRequest: "get",
};
const get_meal = {
    url: `${constants.api_url}/nutritionist/medical_records/#/meals/`,
    typeRequest: "get",
};

const post_new_medical = {
    url: `${constants.api_url}/nutritionist/medical_records/#/`,
    typeRequest: "post",
};
const post_new_medication = {
    url: `${constants.api_url}/nutritionist/medical_records/#/medications/`,
    typeRequest: "post",
};
const post_new_suplement = {
    url: `${constants.api_url}/nutritionist/medical_records/#/supplements/`,
    typeRequest: "post",
};
const post_new_gyneco = {
    url: `${constants.api_url}/nutritionist/medical_records/#/gynecology/`,
    typeRequest: "post",
};
const post_new_diet = {
    url: `${constants.api_url}/nutritionist/medical_records/#/diet/`,
    typeRequest: "post",
};
const post_new_meal = {
    url: `${constants.api_url}/nutritionist/medical_records/#/meals/`,
    typeRequest: "post",
};
const post_new_question_ans = {
    url: `${constants.api_url}/nutritionist/medical_records/#/answers/`,
    typeRequest: "post",
};

const post_new_question = {
    url: `${constants.api_url}/nutritionist/medical_records/questions/`,
    typeRequest: "post",
};
const patch_edit_question = {
    url: `${constants.api_url}/nutritionist/medical_records/question/#/`,
    typeRequest: "patch",
};
const delete_question = {
    url: `${constants.api_url}/nutritionist/medical_records/question/#/`,
    typeRequest: "delete",
};

const patch_medical = {
    url: `${constants.api_url}/nutritionist/medical_records/#/`,
    typeRequest: "patch",
};
const put_medication = {
    url: `${constants.api_url}/nutritionist/medical_records/#/medications/`,
    typeRequest: "put",
};
const put_suplement = {
    url: `${constants.api_url}/nutritionist/medical_records/#/supplements/`,
    typeRequest: "put",
};
const patch_gyneco = {
    url: `${constants.api_url}/nutritionist/medical_records/#/gynecology/`,
    typeRequest: "patch",
};
const patch_diet = {
    url: `${constants.api_url}/nutritionist/medical_records/#/diet/`,
    typeRequest: "patch",
};
const put_meal = {
    url: `${constants.api_url}/nutritionist/medical_records/#/meals/`,
    typeRequest: "put",
};
const patch_new_question_ans = {
    url: `${constants.api_url}/nutritionist/medical_records/#/answers/#/`,
    typeRequest: "patch",
};

const get_settings_medical = {
    url: `${constants.api_url}/nutritionist/medical_records/settings/`,
    typeRequest: "get",
};
const post_settings_medical = {
    url: `${constants.api_url}/nutritionist/medical_records/settings/`,
    typeRequest: "post",
};
const patch_settings_medical = {
    url: `${constants.api_url}/nutritionist/medical_records/settings/`,
    typeRequest: "patch",
};

export default {
    post_new_medical,
    post_new_medication,
    post_new_suplement,
    post_new_gyneco,
    post_new_diet,
    post_new_meal,
    post_new_question_ans,
    get_medical_records,
    post_new_question,
    delete_question,
    patch_edit_question,
    get_medical,
    get_gyneco,
    get_diet,
    get_question_ans,
    get_medication,
    get_suplement,
    get_meal,
    patch_medical,
    put_medication,
    put_suplement,
    patch_gyneco,
    patch_diet,
    put_meal,
    patch_new_question_ans,
    get_settings_medical,
    post_settings_medical,
    patch_settings_medical,
};
