const fs = require("fs")
const current = fs.readFileSync("./package.json", "utf8")
const json = JSON.parse(current)
json.version = "10.10.10"
console.log(json.version)
fs.writeFileSync("./package.json", JSON.stringify(json, null, 2))
// commit after?