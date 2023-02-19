import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { HeatmapDict } from '../dict/HeatmapDict';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export const HeatmapCheckbox = (props) => {
    const { params, setParams } = props;

    return (
        <Autocomplete
            onChange={(event, value) => {
                const newParams = value.map(elem => elem.name)
                // const id = event.target.id.split("-").pop()
                // console.log(HeatmapDict[id])
                console.log(newParams)
                setParams(newParams)
            }}
            className='m-6'
            multiple
            id="checkboxes-tags-demo"
            options={HeatmapDict}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => {
                return (<li {...props}>
                    <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                    />
                    {option.title}
                </li>)
            }
            }
            style={{ width: 500 }}
            renderInput={(params) => (
                <TextField {...params} label="Выберите параметры" placeholder="Параметры" />
            )}
        />
    );
}