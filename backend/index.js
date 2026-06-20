const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/_/backend', (req, res) => {
  res.json({ message: 'Backend is running successfully on Vercel!' });
});

// Start the server if running locally
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for Vercel serverless functions
module.exports = app;
