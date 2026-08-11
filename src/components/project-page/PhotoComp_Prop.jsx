/*=========================================================
 Author:     J. Orlando
 Date:       August 2026
 Description: Picture prop for project page. 
        Carousel for small screenms and tiled photos for large screens
==========================================================*/

const PhotoComp_Prop = (props) => 
{
  let {image1, image2, image3, image4, image5} = props;

  return (
    <>
      <div className="projectPhotos">
        <img src={image1}/>
        <img src={image2}/>
        <img src={image3}/>
        <img src={image4}/>
        <img src={image5}/>
      </div>
    </>
  )
}
export default PhotoComp_Prop