import fs from "fs";

export function saveArrayToJson(data, file_path) {
  fs.appendFileSync(file_path, JSON.stringify(data, null, 2));
}
