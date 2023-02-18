import { TableCell } from "./TableCell";

export const TableRow = (props) => {
    const { row, name } = props;

    const values = row.map(cell => <TableCell value={cell.value} />);

    return (<div className="flex flex-row">
        <div className="flex justify-center items-center font-bold w-[100px]">
            {name}
        </div>
        <div className="flex flex-row">
            {values}
        </div>
    </div>)
}