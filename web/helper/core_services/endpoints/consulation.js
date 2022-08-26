import constants from "../../enviroment/config";

const get_consulations = {
    url: `${constants.api_url}/nutritionist/consultations/#/`,
    typeRequest: "get",
};

const get_questions = {
    url: `${constants.api_url}/nutritionist/consultations/questions/`,
    typeRequest: "get",
};
const post_questions = {
    url: `${constants.api_url}/nutritionist/consultations/questions/`,
    typeRequest: "post",
};
const patch_questions = {
    url: `${constants.api_url}/nutritionist/consultations/questions/#/`,
    typeRequest: "patch",
};
const delete_questions = {
    url: `${constants.api_url}/nutritionist/consultations/questions/#/`,
    typeRequest: "delete",
};
const get_questions_settings = {
    url: `${constants.api_url}/nutritionist/consultations/questions/settings/`,
    typeRequest: "get",
};
const put_questions_settings = {
    url: `${constants.api_url}/nutritionist/consultations/questions/#/settings/`,
    typeRequest: "put",
};

const get_traits = {
    url: `${constants.api_url}/nutritionist/consultations/traits/`,
    typeRequest: "get",
};
const get_traits_settings = {
    url: `${constants.api_url}/nutritionist/consultations/traits/settings/`,
    typeRequest: "get",
};
const get_traits_patient = {
    url: `${constants.api_url}/nutritionist/consultations/#/trait_goals/`,
    typeRequest: "get",
};
const post_trait_patient = {
    url: `${constants.api_url}/nutritionist/consultations/#/trait_goals/`,
    typeRequest: "post",
};
const patch_trait_patient = {
    url: `${constants.api_url}/nutritionist/consultations/#/trait_goals/#/`,
    typeRequest: "patch",
};
const delete_trait_patient = {
    url: `${constants.api_url}/nutritionist/consultations/#/trait_goals/#/`,
    typeRequest: "delete",
};

const get_anthropometry = {
    url: `${constants.api_url}/nutritionist/consultations/#/anthropometry/`,
    typeRequest: "get",
};
const post_anthropometry = {
    url: `${constants.api_url}/nutritionist/consultations/#/anthropometry/`,
    typeRequest: "post",
};
const patch_anthropometry = {
    url: `${constants.api_url}/nutritionist/consultations/#/anthropometry/#/`,
    typeRequest: "patch",
};

const get_consulation = {
    url: `${constants.api_url}/nutritionist/consultations/#/consultations/#/`,
    typeRequest: "get",
};
const post_consulation = {
    url: `${constants.api_url}/nutritionist/consultations/#/`,
    typeRequest: "post",
};
const patch_consulation = {
    url: `${constants.api_url}/nutritionist/consultations/#/consultations/#/`,
    typeRequest: "patch",
};

const get_analisys = {
    url: `${constants.api_url}/nutritionist/consultations/#/analysis/`,
    typeRequest: "get",
};
const post_analisys = {
    url: `${constants.api_url}/nutritionist/consultations/#/analysis/`,
    typeRequest: "post-form",
};

const delete_single_analysis = {
    url: `${constants.api_url}/nutritionist/consultations/#/analysis/#/`,
    typeRequest: "delete",
};

const get_notes = {
    url: `${constants.api_url}/nutritionist/consultations/#/notes/`,
    typeRequest: "get",
};

const get_settings = {
    url: `${constants.api_url}/nutritionist/consultations/settings/`,
    typeRequest: "get",
};
const put_settings = {
    url: `${constants.api_url}/nutritionist/consultations/settings/`,
    typeRequest: "put",
};

const get_trait_setting = {
    url: `${constants.api_url}/nutritionist/consultations/traits/#/settings/`,
    typeRequest: "get",
};
const put_trait_setting = {
    url: `${constants.api_url}/nutritionist/consultations/traits/#/settings/`,
    typeRequest: "put",
};

export default {
    get_consulations,
    get_questions,
    post_questions,
    patch_questions,
    delete_questions,
    get_questions_settings,
    put_questions_settings,
    get_traits,
    get_traits_settings,
    get_traits_patient,
    post_trait_patient,
    patch_trait_patient,
    delete_trait_patient,
    get_anthropometry,
    post_anthropometry,
    patch_anthropometry,
    get_consulation,
    post_consulation,
    patch_consulation,
    get_analisys,
    post_analisys,
    delete_single_analysis,
    get_notes,
    get_settings,
    put_settings,
    get_trait_setting,
    put_trait_setting,
};
