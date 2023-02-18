import axios from "axios"

export const fetchHeatmap = async (params_list) => {
    const res = await axios.post("http://localhost:5000/", { params_list });
    console.log(res)
}