import axios from "axios";

const PurchaseAPI = axios.create({ baseURL: 'http://localhost:3000/purchase/'})

//Suppliers 
export const fetchSuppliers = () => PurchaseAPI.get(('/suppliers'))

export const getSuppliers = () => async () => {
    try {
        const { data } = await PurchaseAPI.fetchSuppliers()
    } catch (error) {
        console.log(error);
    }
} 