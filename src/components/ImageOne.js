import { Parallax } from 'react-parallax';
import Nasa from '../img/nasa.jpg'

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} strength={100}>
        <div className='content'>
            <span className='img-txt'>A Trip to Space</span>
        </div>
    </Parallax>
);

export default ImageOne;