import constants from "../../enviroment/config";

const get_menus = {
    url: `${constants.api_url}/nutritionist/menus/`,
    typeRequest: "get",
};
const get_menu = {
    url: `${constants.api_url}/nutritionist/menus/#/`,
    typeRequest: "get",
};

const get_meals_type = {
    url: `${constants.api_url}/nutritionist/menus/meal_type/`,
    typeRequest: "get",
};

const post_new_menu = {
    url: `${constants.api_url}/nutritionist/menus/`,
    typeRequest: "post",
};
const put_edit_menu = {
    url: `${constants.api_url}/nutritionist/menus/#/`,
    typeRequest: "put",
};

const delete_menu = {
    url: `${constants.api_url}/nutritionist/menus/#/`,
    typeRequest: "delete",
};

const post_new_menu_patient = {
    url: `${constants.api_url}/nutritionist/menus/patient/`,
    typeRequest: "post",
};
const get_menus_patient = {
    url: `${constants.api_url}/nutritionist/menus/patient/`,
    typeRequest: "get",
};
const get_menu_patient = {
    url: `${constants.api_url}/nutritionist/menus/patient/#/`,
    typeRequest: "get",
};
const patch_menu_patient = {
    url: `${constants.api_url}/nutritionist/menus/patient/#/`,
    typeRequest: "patch",
};

const get_send_menu = {
    url: `${constants.api_url}/nutritionist/menus/patient/#/send_menu/`,
    typeRequest: "get",
};

export default {
    get_menus,
    get_menu,
    get_meals_type,
    post_new_menu,
    put_edit_menu,
    delete_menu,
    post_new_menu_patient,
    get_menus_patient,
    get_menu_patient,
    patch_menu_patient,
    get_send_menu,
};
