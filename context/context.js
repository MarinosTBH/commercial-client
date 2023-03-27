import { createContext, useContext } from "react";


export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/purchases/suppliers/')
    console.log(res);
    const suppliers = await res.json()

    //Error handling and revalidation
    if (!res.ok) {
        throw new Error(`Failed to fetch suppliers, received status ${res.status}`)
    } 
    return {
        props: {
            suppliers,
        },
    }
}

const SupplierContext = createContext(suppliers)