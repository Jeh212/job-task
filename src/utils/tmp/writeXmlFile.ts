import fs from 'fs';
import path from 'path';

import { v4 as uuid } from 'uuid';




const writeNewFileXml = (data: any): string => {

    const fileName = `${uuid()}.xml`;
    const tmpPath = path.resolve(__dirname, fileName)

    fs.writeFile(tmpPath, data, (err: any) => console.log(err));

    return fileName;
};


export { writeNewFileXml };
