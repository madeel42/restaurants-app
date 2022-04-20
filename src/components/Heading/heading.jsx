import React from 'react'
import theme from '../theme'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {

    return {
        main: {
            width: '98%',
            margin: 'auto',
        }
    }
})

export const Heading = ({text}) => {
    const { main } = useStyles(theme);
    return (
        <div className={main}><h3>{text}</h3></div>
    )
}
