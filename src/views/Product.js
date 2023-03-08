import React from "react";
import CardProduct from '../components/CardProduct'

const Product = () => {
    return (
        <div className="">
            <div className="text-center">
                <h1 className="font-bold text-4xl py-8">MENU MAKANAN BABEH</h1>
            </div>
            <div className="flex justify-center hover:relative sm:visible">
                <CardProduct
                    image="https://assets.pikiran-rakyat.com/crop/19x167:971x853/x/photo/2022/09/27/799023755.jpg"
                    judul="sate ayam"
                    harga='28.000'
                    deskripsi="merupakan sate yang terbuat dari daging ayam pilihan dan dipotong kecil kecil, yang nantinya akan ditusuk dengan lidi dan dibakar menggunakkan arang"

                />
                <CardProduct
                    image="https://cdn.statically.io/img/whitneybond.com/f=auto/wp-content/uploads/2021/06/steak-marinade-13.jpg"
                    judul="steak sapi"
                    harga='100.000'
                    deskripsi="merupakan sate yang terbuat dari daging ayam pilihan dan dipotong kecil kecil, yang nantinya akan ditusuk dengan lidi dan dibakar menggunakkan arang"

                />
                <CardProduct
                    image="https://cdn0-production-images-kly.akamaized.net/eYOq52rbCGJ2-4rwWgPPFUCDRR4=/0x75:999x638/1200x675/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4085103/original/068229000_1657531155-shutterstock_2058069038.jpg"
                    judul="sate kambing"
                    harga='80.000'
                    deskripsi="merupakan sate yang terbuat dari daging ayam pilihan dan dipotong kecil kecil, yang nantinya akan ditusuk dengan lidi dan dibakar menggunakkan arang"

                />
                <CardProduct
                    image="https://cdn1-production-images-kly.akamaized.net/jfbaKP_AjoDLwQK0R_mA6toloYU=/469x260/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4105156/original/055981200_1659078098-shutterstock_449900896.jpg"
                    judul="lemon tea"
                    harga='3.000'
                    deskripsi="merupakan sate yang terbuat dari daging ayam pilihan dan dipotong kecil kecil, yang nantinya akan ditusuk dengan lidi dan dibakar menggunakkan arang"

                />
                <CardProduct
                    image="https://seilera.com/wp-content/uploads/2021/01/124631207_364509411547862_1404259131723716356_n.jpg"
                    judul="es teh"
                    harga='2.000'
                    deskripsi="merupakan sate yang terbuat dari daging ayam pilihan dan dipotong kecil kecil, yang nantinya akan ditusuk dengan lidi dan dibakar menggunakkan arang"

                />
            </div>
        </div>
    )
}
export default Product
