import app from "./app.js";
import { connectDB } from "./config/database.config.js";

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});