import React from "react";

const CardProduct = (props) => {
    return (
        <div className="w-80">
            <div className="bg-slate-300 mx-3 rounded-md shadow-lg hover:bg-black hover:text-white hover:mx-auto">
                <img src={props.image} alt="gambar makanan" className="w-full h-56" />
                <p className="absolute -mt-10 px-5 bg-red-800 shadow-2xl text-white">{props.harga},-</p>
                <div className="p-4">
                    <h2>{props.judul}</h2>
                    <p>{props.deskripsi}</p>
                </div>
            </div>
        </div>
    )       
}
export default CardProduct
