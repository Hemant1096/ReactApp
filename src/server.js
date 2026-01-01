// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const sql = require("mssql");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // SQL Server config
// const config = {
//   user: "your_username",
//   password: "your_password",
//   server: "localhost", // or server name
//   database: "MyDatabase",
//   options: {
//     encrypt: false, // use true if using Azure
//     trustServerCertificate: true, 
//   },
// };

// // Login endpoint
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     await sql.connect(config);
//     const result = await sql.query`SELECT * FROM Users WHERE Email = ${email} AND Password = ${password}`;
    
//     if (result.recordset.length > 0) {
//       res.json({ success: true });
//     } else {
//       res.json({ success: false });
//     }
//   } catch (err) {
//     console.error(err);
//     res.json({ success: false, message: err.message });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
