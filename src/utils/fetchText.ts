import path from "path";
import {promises as fs} from "fs";

const fetchText = async(fileName :string) => {
        const jsonDirectory = path.join(process.cwd(), 'public/json');
        const fileContents = await fs.readFile(jsonDirectory + `${fileName}`, 'utf8');
        return JSON.parse(fileContents);

}
export default fetchText;