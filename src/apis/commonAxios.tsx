import axios from "axios";
const commonAxios = async(url :string , parameters : any) => {
    const result = await axios.get(url+parameters.genre);
    return result;
}

export { commonAxios };