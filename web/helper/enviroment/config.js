import variables from "./variables";

/*
dev - development
prod - production
*/
const environment = "dev";

/*
1 - true
false - false
*/
const debug = 0;

export default { ...variables[environment], debug };
