import { Parallax } from 'react-parallax';
import Neb from '../img/neb.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Neb} strength={100}>
        <div className='content'>
            <span className='img-txt'>Into the Eyes</span>
        </div>
    </Parallax>
);

export default ImageTwo;