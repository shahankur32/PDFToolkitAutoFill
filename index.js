const express = require('express')
const app = express()
const port = 3000
var fillPdf = require("fill-pdf");
var formData = {
   Name: "Ankur shah", Address: 'Pune Maharashtra India', 'Check Box2' : "Yes", 
  'Check Box3' : "Yes", Dropdown1:"20", Dropdown2:"Mar", Dropdown3:"2015", 'Group6' : '3'
};
var pdfTemplatePath = "../../templates.pdf";
app.get('/', async (req, res) => {
  //
  await fillPdf.generatePdf(formData, pdfTemplatePath, function(err, output) {
    if ( !err ) {
      res.setHeader('Content-Type', 'application/pdf');
      res.type("application/pdf");
      res.send(output);
    } else {
      console.log(err);
      res.send('Error Occured')
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})