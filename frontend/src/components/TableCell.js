export const TableCell = (props) => {
    const { value } = props

    const setBgColor = () => {
        if (value < 0.1) {
            return `bg-red-400`
        } else if (value < 0.3) {
            return `bg-red-600`
        } else if (value < 0.5) {
            return `bg-red-700`
        } else if (value < 0.7) {
            return `bg-violet-500`
        } else if (value < 0.9) {
            return `bg-violet-700`
        } else if (value < 1) {
            return `bg-indigo-900`
        } else if (value === 1) {
            return `bg-white`
        }

    }

    const setTextColor = () => {
        if (value === 1) {
            return `text-black`
        } else return `text-white`
    }

    const bgColor = setBgColor();
    const textColor = setTextColor();

    return <div className={`${bgColor} ${textColor} hover:brightness-90 flex flex-row justify-center items-center w-[70px] h-[70px] font-bold cursor-pointer unselectable`}>{value === 1 ? Math.round(value) : value}</div>
}