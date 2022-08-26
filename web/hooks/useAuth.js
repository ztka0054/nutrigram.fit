import { useContext } from "react";
import { AppContext } from "../contexts/AppAuth";

const auth = () => useContext(AppContext);
export default auth;
