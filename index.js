const express = require('express');

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("server is running now");

})

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
  console.log(`Server running at http://localhost:${PORT}`);
});