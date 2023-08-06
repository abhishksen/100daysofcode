import { app } from './app.js';
import { connectDB } from './data/database.js';

// databse coonection function 
connectDB();

app.listen(process.env.PORT, () => {
    console.log("Server is running...");
})