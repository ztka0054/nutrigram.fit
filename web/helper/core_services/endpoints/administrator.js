import constants from '../../enviroment/config'

const post_recovery = {
    'url': `${constants.api_url}/nutritionist/nutritionists/password_recovery/`,
    'typeRequest': 'post',
}

export default {
    post_recovery,
}