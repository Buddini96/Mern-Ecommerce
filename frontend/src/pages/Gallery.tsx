import img1 from '../assets/galleryImg/img6.jpg';
import img2 from '../assets/galleryImg/img37.jpg';
import img3 from '../assets/galleryImg/img3.jpg';
import img4 from '../assets/galleryImg/img25.jpg';
import img5 from '../assets/galleryImg/img5.jpg';
import img6 from '../assets/galleryImg/jk.jpg';
import img7 from '../assets/galleryImg/img7.jpg';
import img8 from '../assets/galleryImg/img8.jpg';
import img9 from '../assets/galleryImg/img9.jpg';
import img10 from '../assets/galleryImg/img20.jpg';
import img11 from '../assets/galleryImg/cc.jpg';
import img12 from '../assets/galleryImg/img12.jpg';
import img13 from '../assets/galleryImg/img22.jpg';
import img14 from '../assets/galleryImg/img35.jpg';
import img15 from '../assets/galleryImg/img23.jpg';
import img16 from '../assets/galleryImg/img36.jpg';
import img17 from '../assets/galleryImg/img17.jpg';
import img18 from '../assets/galleryImg/img14.jpg';
import img19 from '../assets/galleryImg/img19.jpg';
import img20 from '../assets/galleryImg/img15.jpg';

const Gallery = () => {
  return (
    <div className={"p-s md:p-10 rounded-3xl"} style={{paddingTop: '100px'}}>
    <div className={"columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 " +
        "[&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 roun rounded-3xl"}>
        <img className={"rounded-2xl"} src={img1}/>
        <img className={"rounded-2xl"} src={img2}/>
        <img className={"rounded-2xl"} src={img3}/>
        <img className={"rounded-2xl"} src={img4}/>
        <img className={"rounded-2xl"} src={img5}/>
        <img className={"rounded-2xl"} src={img6}/>
        <img className={"rounded-2xl"} src={img7}/>
        <img className={"rounded-2xl"} src={img8}/>
        <img className={"rounded-2xl"} src={img9}/>
        <img className={"rounded-2xl"} src={img10}/>
        <img className={"rounded-2xl"} src={img11}/>
        <img className={"rounded-2xl"} src={img12}/>
        <img className={"rounded-2xl"} src={img13}/>
        <img className={"rounded-2xl"} src={img14}/>
        <img className={"rounded-2xl"} src={img15}/>
        <img className={"rounded-2xl"} src={img16}/>
        <img className={"rounded-2xl"} src={img17}/>
        <img className={"rounded-2xl"} src={img18}/>
        <img className={"rounded-2xl"} src={img19}/>
        <img className={"rounded-2xl"} src={img20}/>
        </div>
    </div>
  )
}

export default Gallery