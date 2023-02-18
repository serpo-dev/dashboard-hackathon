import axios from "axios"

export const fetchHeatmap = async  (params_list) => {
    const res = await axios.post(params_list);
    console.log(res)
}