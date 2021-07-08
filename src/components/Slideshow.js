import React, {useState, useEffect, useRef} from 'react'; 



import '../assets/css/Slideshow.css';

/*

Source : Omar Benseddik, (Nov 16, 2020). How to build an Auto-Playing Slideshow with React
Retrieved from https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react/

*/



//const images = [test,test1];
const delay = 2500;

const Slideshow = (props)=>{

  var images = props.array;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  //console.log(images);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, images.length]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((item, index) => (
            
          <div className="slide" key={index}>
              <img className="slideImg" src={item} alt = {index}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow
