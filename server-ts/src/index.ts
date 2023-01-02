import { app, PORT, client_path } from "./inits.js";
import path from "path";

// serve client app
app.get("/*", (_, res) => {
    res.sendFile(path.join(client_path, "index.html"))
})

app.listen(PORT, () => {
    console.log(`Listenning on ":${PORT}"`);
});
