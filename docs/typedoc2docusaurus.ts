import TypeDoc from 'typedoc';

// import fs from 'fs';
// import path from 'path';
// import glob from 'glob';
import * as typedocConfig from './typedoc.json';

// const FILES = glob.sync('packages/harbor-master/src/**/*.ts');

async function main() {
    const app = await TypeDoc.Application.bootstrapWithPlugins(typedocConfig);
    const project = await app.convert();

    if (project) {
        const res = app.generateDocs(project, typedocConfig.out)
    }
}