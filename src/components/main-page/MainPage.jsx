import React from 'react'
import theme from '../theme'
import { makeStyles } from "@mui/styles";
import { connect } from 'react-redux';
import { Heading } from '../Heading'
import Resturentimage from '../../Assets/resturentimage.jpg'
import { CardCom } from '../cards'

const useStyles = makeStyles((theme) => {

    return {
        main: {
            width: '98%',
            margin: 'auto',
        },
        cardStyle: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& .MuiPaper-elevation': {
                margin: '30px',
            }
        }

    }
})

const MainPage = ({ data }) => {
    const { main, cardStyle } = useStyles(theme);

    return <div className={main}>
        <Heading text={'Restaurents'} />
        <div className={cardStyle}>{
            data && data.length > 0 && data.map((item, i) => {
                item.image = Resturentimage;
                return <div key={i} ><CardCom item={item} /></div>
            })
        }</div>
    </div>
}

const mapStateToProps = (state) => ({
    data: state.dataReducer.data
});

export default connect(mapStateToProps, null)(MainPage)