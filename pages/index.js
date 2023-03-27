import Purchase from "@/components/Achat/Purchase";
import PurchaseSupplier from "@/components/Achat/PurchaseSupplier";

export default function Home({ suppliers }) {
  return (
    <>
      <p className="text-gray-700 text-3xl mb-16 font-bold">Tableau de bord</p>
      <Purchase/>



      <div className="grid lg:grid-cols-3 gap-5 mb-16">
      <p className="text-gray-500 text-2xl mb-5 font-bold">Vente</p>
      </div>
      <div className="grid col-1 bg-white h-96 shadow-sm"></div>
    </>
  );
}

