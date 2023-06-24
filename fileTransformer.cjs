const path = require('path');
const TsJestTransformer = require('ts-jest-transformer');

class FileTransformer extends TsJestTransformer {
  process(_sourceText, sourcePath, _options) {
    return {
      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
    };
  }
}

module.exports = new FileTransformer();
