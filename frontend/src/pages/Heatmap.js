import { useState } from "react";
import { Table } from "../components/Table";
import { fetchHeatmap } from "../async/fetchHeatmap";
import { HeatmapCheckbox } from "../components/HeatmapCheckbox";

export const Heatmap = () => {

    const [params, setParams] = useState(["budget_mo", "budget_srf", 'grant_budget', 'number_grant', 'number_public_associations']);
    const [tableData, setTableData] = useState([])

    const convertRes = (serverData) => {
        const { index, data } = serverData;

        const result = [];

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[i].length; j++) {
                const obj = {
                    y: index[i],
                    x: index[j],
                    value: data[i][j].toFixed(2)
                }

                result.push(obj);
            }
        }

        return result;
    }

    const submit = async (e) => {
        const { data } = await fetchHeatmap(params)
        const res = convertRes(data)
        setTableData(res)
    }

    return (
        <div>
            <div className="flex flex-row">
                <HeatmapCheckbox setParams={setParams} params={params} />
                <button onClick={submit} className="bg-white rounded-full p-2">Get data</button>
            </div>

            <Table data={tableData} />
        </div>
    )
}