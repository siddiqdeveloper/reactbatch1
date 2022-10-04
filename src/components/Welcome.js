
import { useSelector } from 'react-redux';
import {selectCount} from '../counterSlice'
function Welcome(){
    const cartCount = useSelector(selectCount);

    return <>Welcome {cartCount}</>;
}

export default Welcome;