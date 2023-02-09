import { Parallax } from 'react-parallax';
import Milky from '../img/milky.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Milky} strength={100}>
        <div className='content'>
            <span className='img-txt'>Of the Storm</span>
        </div>
    </Parallax>
);

export default ImageThree;