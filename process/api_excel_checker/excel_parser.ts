import * as XLSX from 'xlsx';

export class ExcelParser {
  static GetParsedDataBySheetName(workbook: XLSX.WorkBook, sheetName: string) {
    const sheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(sheet);
    const data = this._solution(rawData);
    return data;
  }

  static _solution(data: any[]) {
    const map = new Map<string, object>();

    data.forEach((row) => {
      const key = row['고유키(!)'];
      const value = {
        cnt: row['구매횟수(KRW)(!)'],
        total_price: row['구매금액(KRW)(!)'],
      };
      map.set(key, value);
    });

    return map;
  }
}
