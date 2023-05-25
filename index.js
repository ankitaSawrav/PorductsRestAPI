const express = require("express");

const pg = require("pg");

const app = express();
app.use(express.json())


const port = 3000

const db = new pg.Pool({
    database: 'products'
  })


app.get("/",(req,res)=>{
    res.send("hello")
})

app.get('/api/product', (req,res)=>{
    const page = parseInt(req.query.page)
    const limit = (parseInt)

    const startIndex = (page -1)*limit
    const endIndex = page*limit
    sql = 'select * from product';
    db.query(sql).then(dbResult=>{
        let results = {}
        if(endIndex< dbResult.rows.length){
            results.next = {
                page: page+1,
                limit:limit
            }
        }
        
        if(startIndex >0){
            results.previous = {
                page: page-1,
                limit:limit
            }
        }
        

        const data = dbResult.rows

         results.resultData = data.slice(startIndex,endIndex)  

        res.json(resultData)
    })
})

app.get('/api/product/:name',(async (req,res)=>{
    const productname = req.params.name
    console.log(productname)

    sql = `select * from product where productname like $1`;

    const dbResult = await db.query(sql, [productname]);
    res.json(dbResult.rows);
}))

app.get('/api/product/:name/:id',(async (req,res)=>{
    const productname = req.params.name
    const productId = req.params.id
    console.log("data",productname,productId)

    sql = `select * from product where productname= $1 and id=$2`;

    const dbResult = await db.query(sql, [productname,productId]);
    console.log(db.query(sql,[productname,productId]))
    res.json(dbResult.rows);
}))

//insert a new product
// /add a new product /

app.post('/api/product',(req,res)=>{
    // const data = req.body
    const productname = req.body.productname
    const productdescription = req.body.productdescription
    const categoryid = req.body.categoryid
    const active = req.body.active
    
    console.log(productname,productdescription, categoryid, active)
  
   const sql = `insert into product (productName,productDescription,categoryId,active) 
                values($1,$2,$3,$4)`;
   return db.query(sql, [productname,productdescription, categoryid, active])
   .then(dbResult=>{
        res.json({success:true});
   })
   .catch(error=>{
    res.sendStatus(500).json({success:false, message:'error'})
   })    
})

app.put('/api/product/:id',(req,res)=>{
    const id = req.params.id

    const productname = req.body.productname
    const productdescription = req.body.productdescription
    const categoryid = req.body.categoryid
    const active = req.body.active


    const sql = `
        update product set productname=$1, productdescription=$2, categoryid=$3, active=$4 where id=$5`
        return db.query(sql,[productname,productdescription, categoryid, active, id])
        .then(dbRes =>{
          res.json({success: true})
        })
  
})



// start the web server
app.listen(port, () => {
    console.log(`listening on port http://localhost:${port}`);
  });
