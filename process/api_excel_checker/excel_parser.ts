import * as XLSX from 'xlsx';

export class ExcelParser {
  static GetDataBySheetName(workbook: XLSX.WorkBook, sheetName: string) {
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    return data;
  }
}
