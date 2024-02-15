
export let flipkartApi=async ()=>{

    let data=fetch('https://fakestoreapi.com/products')
    data=await(await data).json()
    // console.log(data)
    return data

}