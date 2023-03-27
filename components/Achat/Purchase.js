import { useState } from "react";
import PurchaseSupplier from "./PurchaseSupplier";

export default function Purchase() {
    const [isChecked, setIsChecked] = useState(true)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }    
    return (
        <>
            <p className="text-gray-500 text-2xl mb-5 font-bold">Achat</p>
            <div className="grid lg:grid-cols-3 gap-5 mb-16">
                <div className="rounded bg-white h-40 shadow-sm p-5">
                    <input onChange={handleChange} checked={true} type="checkbox" id="fournisseurs" name="fournisseurs" value="fournisseurs" className="mr-2 appearance checked:bg-blue-500"/>
                    <label htmlFor="fournisseurs">Fournisseur</label><br/>
                    <input type="checkbox" id="articles" name="articles" value="articles" className="mr-2"/>
                    <label htmlFor="articles">Article</label><br/>
                    <input type="checkbox" id="bonDeCommande" name="bonDeCommande" value="bonDeCommande" className="mr-2"/>
                    <label htmlFor="bonDeCommande">Bon de commande</label><br/>
                    <input type="checkbox" id="bonDeReception" name="bonDeReception" value="bonDeReception" className="mr-2"/>
                    <label htmlFor="fournisseurs">Bon de Réception</label><br/>
                    <input type="checkbox" id="avoir" name="avoir" value="avoir" className="mr-2"/>
                    <label htmlFor="avoir">Avoir</label><br/>
                </div>
            </div>

            <div className="grid col-1 bg-white h-96 shadow-sm mb-10 border-2">
                {isChecked && <PurchaseSupplier/> }
            </div>
        </>

    )
 
        {/* <h1>Fournisseurs</h1>
        <ul>{ suppliers?.map((supplier) => (
            <li key={supplier._id}>{supplier.supplierName}</li>
        )) }
        </ul> */}
}