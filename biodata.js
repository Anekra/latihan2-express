require('dotenv').config();
const express = require("express");

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get("/", (_, res) => {
  const biodataRoute = "/biodata?name=Andika%20Eka%20Putra&tempat-lahir=Kota%20Bogor&tanggal-lahir=10-02-1998&alamat=Jl.%20Lawang%20Gintung%20No.%2031"
  res.send(`<a href="${biodataRoute}">Go to Biodata</a>`);
});

app.get("/biodata", (req, res) => {
  const nama = req.query.name;
  const tempatLahir = req.query["tempat-lahir"];
  const tanggalLahir = req.query["tanggal-lahir"];
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    "tempat lahir": tempatLahir,
    "tanggal lahir": tanggalLahir,
    alamat: alamat
  });
});

app.post("/biodata", (req, res) => {
  const nama = req.body.name;
  const tempatLahir = req.body["tempat-lahir"];
  const tanggalLahir = req.body["tanggal-lahir"];
  const alamat = req.body.alamat;

  res.send({
    nama: nama,
    "tempat lahir": tempatLahir,
    "tanggal lahir": tanggalLahir,
    alamat: alamat
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port || 3333}`);
});
