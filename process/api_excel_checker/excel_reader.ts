import * as XLSX from 'xlsx';

export class ExcelReader {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  getResult() {
    return this._readExcelFile(this.filename);
  }

  _readExcelFile(filePath: string) {
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    sheetNames.forEach((sheetName) => {
      console.log(`Reading sheet: ${sheetName}`);

      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      console.log(data);
    });
  }
}
