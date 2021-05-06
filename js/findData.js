const link = 'https://idwapi-juvasquez88.vercel.app/js';

export default async function CallApi(){

    try{
        const response = await fetch(link);
        const datos = await response.json();
        return datos;
    }
    catch(err){
        throw new Error(err);
    }
}