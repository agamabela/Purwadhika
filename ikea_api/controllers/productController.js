const { db } = require('../config/database')

module.exports = {
    getProducts: (req, res) => {
        let dataSearch = [], getSQL, getImage = `Select * from products_image`;
        let getStock = 'Select * from products_stock ps JOIN status s on ps.idstatus = s.idstatus; '
        for (let prop in req.query) {
            dataSearch.push(`${prop} = ${db.escape(req.query[prop])}`)
        }

        if (dataSearch.length > 0) {
            getSQL = `Select * from tb_poduct_ikea p JOIN status s on p.idstatus = s.idstatus Where ${dataSearch.join(' AND ')};`
        } else {
            getSQL = `Select * from tb_product_ikea p JOIN status s on p.idstatus = s.idstatus;`
        }

        db.query(getSQL, (err, results) => {
            if (err) {
                res.status(500).send({ status: 'Error Mysql', messages: err })
            }

            db.query(getImage, (err_img, results_img) => {
                if (err_img) {
                    res.status(500).send({ status: 'Error Mysql', messages: err_img })
                }
                // Looping results data product
                results.forEach(item => {
                    // membuat properti images untuk product
                    item.images = []
                    // Looping results_img untuk dicocokkan foreign key-nya dgn
                    // results data products
                    results_img.forEach(e => {
                        // jika id sama, data results_img akan dimasukkan kedalam properti baru item.images
                        if (item.idproduct == e.idproduct) {
                            item.images.push(e.images)
                        }
                    })
                });

                db.query(getStock, (err_stck, results_stck) => {
                    if (err_stck) {
                        res.status(500).send({ status: 'Error Mysql', messages: err_stck })
                    }

                    results.forEach(item => {
                        item.stock = []
                        results_stck.forEach(e => {
                            if (item.idproduct == e.idproduct) {
                                item.stock.push({
                                    idproduct_stock: e.idproduct_stock,
                                    type: e.type,
                                    qty: e.qty,
                                    status: e.status
                                })
                            }
                        })
                    })
                    console.log(results)
                    res.status(200).send(results)
                })

            })
        })

    },
    addProduct: (req, res) => {
        console.log(req.body)
        let postImage= `insert into products_image values `
        let postStock= `insert into products_stock values `
        let addProduct=`insert into tb_product_ikea value (null,${db.escape(req.body.nama)},
       ${db.escape(req.body.deskripsi)},
        ${db.escape(req.body.harga)}, ${db.escape(req.body.idstatus)});`
        db.query(addProduct, (err,results)=>{
            if(err){
                res.status(500).send({status:"Error mysql", messages:err})
            }
            console.log("result produk", results)
            if(results.insertId){
                //menjalankan insert untuk poroduct image dan product stock
                
                let dataImages =[]
                req.body.images.forEach(item=>{
                    dataImages.push(`(null,${results.insertId},${db.escape(item)})`)
                })
                let dataStock =[]
                req.body.stock.forEach(item=>{
                    dataStock.push(`(null,${results.insertId},${db.escape(item.qty)}, ${db.escape(req.body.idstatus)} ${db.escape(item.type)},)`)
                })
                // console.log(postStock+dataStock)
                // console.log(postImage+dataImages)
                db.query(postImage+dataImages,(errImg,resImg)=>{
                    if(errImg){
                        res.status(500).send({status:"Error mysql", messages:errImg})
                    }
                    db.query(postStock+dataStock,(errStock, resStock)=>{
                        if(errStock){
                            res.status(500).send({status:"Error mysql", messages:errStock})
                        }
                        res.status(200).send("Insert product berhasil!")
                    })
                })
            }
        })


    },
    deleteProduct:(req,res)=>{
        let delQuery = `Update products set idstatus = 2 where idproduct=${req.query.id};`
        db.query(delQuery,(err,results)=>{
            if (err) {
                res.status(500).send({ status: 'Error Mysql', messages: err })
            }

            res.status(200).send("Delete product success ✅")
        })
    }

}