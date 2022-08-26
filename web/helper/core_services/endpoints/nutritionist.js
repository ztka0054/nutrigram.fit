import constants from '../../enviroment/config'

const post_login = {
    'url': `${constants.api_url}/nutritionist/nutritionists/login/`,
    'typeRequest': 'post',
}
const post_signin = {
    'url': `${constants.api_url}/nutritionist/nutritionists/signup/`,
    'typeRequest': 'post-form',
}
const get_nutritionist = {
    'url': `${constants.api_url}/nutritionist/nutritionists/`,
    'typeRequest': 'get',
}
const put_nutritionist = {
    'url': `${constants.api_url}/nutritionist/nutritionists/`,
    'typeRequest': 'patch-form',
}
const get_specialities = {
    'url': `${constants.api_url}/nutritionist/nutritionists/specialties/`,
    'typeRequest': 'get',
}

export default {
    post_login,
    post_signin,
    get_nutritionist,
    put_nutritionist,
    get_specialities
}