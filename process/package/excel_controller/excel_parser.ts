import * as XLSX from 'xlsx';

export class ExcelParser {
  static GetParsedDataBySheetName(
    workbook: XLSX.WorkBook,
    sheetName: string,
    solution: Function
  ) {
    const sheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(sheet);
    const data = solution(rawData);
    return data;
  }
}
