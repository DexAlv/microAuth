import { connectToMongoDB } from "./db/mongoClient";
import  app  from "./app";

connectToMongoDB().then(() => {
    app.listen(app.get('port'), () => {
        console.log(`🚀 Server is running on port: ${app.get('port')}`);
    });
}).catch((e) => (console.error("🔴", e)));

