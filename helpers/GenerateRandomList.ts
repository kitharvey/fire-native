import generateKey from "./KeyGenerator"

export function genString(length: number) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

const generateList = (number: number) => {
    const list = new Array(number).fill(0)
    const newList = list.map( () => {
        const string = genString(5)
        return {
                title: string,
                description: string,
                isChecked: false,
                key: generateKey(string)
        }
    } )

    return newList
}

export default generateList