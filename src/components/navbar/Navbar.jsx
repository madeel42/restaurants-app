import React from 'react'
import theme from '../theme'
import { makeStyles } from "@mui/styles";
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => {

    return {
        main: {
            width: '94%',
            margin: 'auto',
            background: 'lightgray',
            padding: '28px 28px',
            [theme.breakpoints.down('md')]: {
                padding: '28px 2px',
            }
        },
        logo: {
            cursor: 'pointer',
            textDecoration:'none'
        }

    }
})

export const Navbar = () => {

    const { main, logo } = useStyles(theme);

    return <div className={main}>
        <Link className={logo} to="/"> <div >Logo</div></Link>
    </div>
}
