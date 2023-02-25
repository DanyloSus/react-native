import { createRoot } from "react-dom/client"
import App from "./App"
import "./index.css"

const client = document.getElementById("root")
const root = createRoot(client)

root.render(<App />)