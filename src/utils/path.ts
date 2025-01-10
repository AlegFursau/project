import { PathLike } from "fs";

const path: {join: (__dirname: string, path: string ) => string} = require('path');

const dirPath: string= path.join(__dirname,'..');

module.exports = dirPath;