const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Azure DevOps CI/CD! Artefactory deployment V1.0.0');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
