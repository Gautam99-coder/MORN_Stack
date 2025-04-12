import app from './app';
import mongoose from 'mongoose';

const PORT = 5000;
const MONGO_URI = 'mongodb://localhost:27017/todo_db';

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
