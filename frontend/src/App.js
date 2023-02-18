import { fetchHeatmap } from "./async/fetchHeatmap";
import { Table } from "./components/Table";


function App() {

    const list = ["budget_mo", "budget_srf", 'grant_budget', 'number_grant', 'number_public_associations']

    const click = () => {
        fetchHeatmap(list)
    }

    return (
        <div className="App">
            <Table />
            <button onClick={click} className="bg-white rounded-full p-2">Get data</button>
        </div>
    );
}

export default App;
