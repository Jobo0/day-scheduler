import React from "react";
import { TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

const MUITimePicker = (props) => {
    //const [timeState, setTimeState] = useState<Date | null>(null);
    //console.log(moment(timeState).format("hh:mm"));
    
    return <TimePicker 
    label='Time'
    renderInput={(params) => <TextField {...params}/>}
    value={props.time}
    onChange={(newValue) => {props.onChange(newValue)}}
    />;
}

export default MUITimePicker;