import React, { useState, useEffect } from "react";
import Carousel from "react-simply-carousel";
import { getPhotos } from '../../redux/actionCreators';
import { connect } from 'react-redux';

function CarouselComp(props) {

  const [activeSlide, setActiveSlide] = useState(0);
  const [photoAlbum, setPhotoAlbum] = useState(null);
  let [filtered, setFiltered] = useState([]);

  useEffect(() => {
    props.getPhotos();
  }, []);

  useEffect(() => {
    setPhotoAlbum(props.photos)
  }, [props.photos]);

  useEffect(() => {
    if (photoAlbum) {
      setFiltered(photoAlbum.filter(e => {
        return e.drop_id === props.dropzoneId
      }))
    }
  }, [photoAlbum])

  console.log(filtered)

  return (
    <div className='carousel-holder'>
      <Carousel
        containerProps={{
          style: {
            width: "100%",
            justifyContent: "space-between"
          }
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: ""
          }
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: ">",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        backwardBtnProps={{
          children: "<",
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: "center"
          }
        }}
        itemsToShow={3}
        speed={400}
      >
        {filtered.map((e, index) => {
          return (
            <div key={index}>
              <img style={{
                width: 300,
                height: 300,
                border: "30px solid white",
                textAlign: "center",
                lineHeight: "240px",
                boxSizing: "border-box"
              }} alt='dz' src={e.photo} />
            </div>
          )
        })}
      </Carousel>
    </div>
  );
};

const mapDispatchToProps = {
  getPhotos
};

function mapStateToProps(state) {
  return {
    photos: state.dzReducer.photos.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComp);