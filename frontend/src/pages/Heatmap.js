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
        <div className="flex flex-col">
            <div className="flex flex-row items-center">
                <HeatmapCheckbox setParams={setParams} params={params} />
                <button onClick={submit} className="bg-[#D6E54B] rounded-full pr-2 pl-2 h-[40px]">Сформировать карту</button>
            </div>
            <div className="grow ml-[150px]">
                <Table data={tableData}/>
            </div>
        </div>
    )
}