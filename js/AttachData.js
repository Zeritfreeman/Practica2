import makeObject from '../utilities/makeObject.js';

export default function AddData(phrase){
    const element = makeObject('p', {}, [phrase]);
    return element;
}