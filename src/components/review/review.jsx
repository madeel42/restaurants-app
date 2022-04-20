import React from 'react'
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import theme from '../theme'
import Resturentimage from '../../Assets/resturentimage.jpg'
import { RatingComp } from '../rating'

const useStyles = makeStyles((theme) => {
  return {
    main: {
      width: '50%',
      margin: 'auto',
      marginTop: '50px',
      marginBottom: '11%',
      '& div > ul > li > button': {
        background: 'white',
        width: '0px',
        height: '0px',
        padding: '4px',
        borderRadius: '5px',
        marginTop: '12px',
        marginBottom: '12px !important'
      },
      '& .slick-active > div > div ': {
        display: "flex !important",
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
          padding: '20px 0px'
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: 'column',
          padding: '20px 0px'
        }
      },
      '& .slick-slide > div > div ': {
        display: "flex !important",
        alignItems: 'center',
        [theme.breakpoints.down("md")]: {
          padding: '20px 0px'
        },
        [theme.breakpoints.down("sm")]: {
          flexDirection: 'column',
          padding: '20px 0px'
        }
      },

    },
    caroselContent: {
      marginLeft: '25px',
      '& h3': {
        marginTop: '0px',
        marginBottom: '0px'
      },
      '& p': {
        textAlign: 'justify',
        marginTop: '0px !important',
      }
    },
    ResturentStyle: {
      width: '138px',
      margin: 'auto',
      [theme.breakpoints.down("sm")]: {
        marginBottom: '15px'
      }
    },
    EBImg: {
      [theme.breakpoints.down("md")]: {
        width: '100px',
        height: 'auto'
      }
    }
  }
})


export const Review = ({ reviews }) => {
  const { main, caroselContent,ResturentStyle } = useStyles(theme);
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // arrows: false,
    nextArrow: false,
  };
  return <div>
    <div className={main}>
      <Slider {...settings} >
        {reviews.map((item, i) => {
          item.image = Resturentimage
          return <div key={i}>
            <div>
              <img src={item.image} className={ResturentStyle} alt="Resturentimage" />
            </div>
            <div className={caroselContent}>
              <h3>{item.name}</h3>
              <p>{item.date}</p>
              <RatingComp itemRating={item.rating}/>
              <p>{item.comments}</p>
            </div>
          </div>
        })}
      </Slider>
    </div>
  </div>
}
