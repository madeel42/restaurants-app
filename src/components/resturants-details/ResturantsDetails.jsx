import React from 'react'
import { Heading } from '../Heading'
import { makeStyles } from "@mui/styles";
import theme from '../theme'
import { connect } from "react-redux";
import { Review } from '../review'
import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => {

    return {
        sections: {
            width: " 98%",
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-around',
            '& p': {
                width: '200px',

            }
        },

    }
})

const ResturantsDetails = ({ data }) => {
    const { sections } = useStyles(theme);
    const { id } = useParams();
    const detailObj = data && data.length > 0 && data.find((item, i) => {
        return item.id == id
    })

    return detailObj ? <div >
        <Heading text={"Resturent's detail"} />
        <div className={sections}>
            <h5>Neighborhood</h5>
            <p>{detailObj.neighborhood}</p>
        </div>
        <div className={sections}>
            <h5>cuisine_type</h5>
            <p>{detailObj.cuisine_type}</p>
        </div>
        <div>
            <Heading text={"Operating Hours"} />
            <div className={sections}>
                <h5>Monday</h5>
                <p>{detailObj.operating_hours.Monday}</p>
            </div>
            <div className={sections}>
                <h5>Tuesday</h5>
                <p>{detailObj.operating_hours.Tuesday}</p>
            </div>
            <div className={sections}>
                <h5>Wednesday</h5>
                <p>{detailObj.operating_hours.Wednesday}</p>
            </div>
            <div className={sections}>
                <h5>Thursday</h5>
                <p>{detailObj.operating_hours.Thursday}</p>
            </div>
            <div className={sections}>
                <h5>Friday</h5>
                <p>{detailObj.operating_hours.Friday}</p>
            </div>
            <div className={sections}>
                <h5>Saturday</h5>
                <p>{detailObj.operating_hours.Saturday}</p>
            </div>
            <div className={sections}>
                <h5>Sunday</h5>
                <p>{detailObj.operating_hours.Sunday}</p>
            </div>
        </div>
        <Heading text={"Reviews"} />
        <Review reviews={detailObj.reviews} />
    </div> : <div><h3 style={{ textAlign: 'center' }}>Loading...</h3></div>

}


const mapStateToProps = (state) => ({
    data: state.dataReducer.data
});

export default connect(mapStateToProps, null)(ResturantsDetails);