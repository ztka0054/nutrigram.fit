import enviroment from "../enviroment/config";

const debugConsole = (tag, value) => {
    if (enviroment.debug) console.log(`${tag} : ${value}`);
};

export default debugConsole;
