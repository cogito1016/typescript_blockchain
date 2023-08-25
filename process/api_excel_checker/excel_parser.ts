import * as XLSX from 'xlsx';

export class ExcelParser {
  static GetParsedDataBySheetName(workbook: XLSX.WorkBook, sheetName: string) {
    const sheet = workbook.Sheets[sheetName];
    const rawData = XLSX.utils.sheet_to_json(sheet);
    const data = this._solution(rawData);
    return data;
  }

  static _solution(data: any[]) {
    return data.map((element: any) => {
      return {
        member_code: element['고유키(!)'],
        cnt: element['구매횟수(KRW)(!)'],
        total_price: element['구매금액(KRW)(!)'],
      };
    });
  }
}
