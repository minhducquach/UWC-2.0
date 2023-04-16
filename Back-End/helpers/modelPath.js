import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const modelPath = path.join(__dirname + "../../", "model");

export default modelPath;