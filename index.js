const ethers = require("ethers")
const express = require("express")

const app = express()
app.use(express.json())

app.post("/sign", async (rq, rs) => {
    try {
        const { tx, priv } = rq.body
        const w = new ethers.Wallet(priv)
        const r = await w.signTransaction(tx).catch(()=>0)
        rs.send(r)
    } catch(_) {
        rs.send("gtfo")
    }
})

app.listen(8080, () => console.log('open'))
