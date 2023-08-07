console.log('1');

function getData(){
    return new Promise((resolve, reject) => {
        let data = fetch('https://run.mocky.io/v3/b24c2414-3f61-42b0-8dc7-113057a3563a');
        if(data==null){
            reject('No se pudo obtener la data');
        }
        else{
            resolve(data);
        }
    });
}

console.log('2');

getData()
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))


console.log('3');