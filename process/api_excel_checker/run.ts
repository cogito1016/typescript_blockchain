import { ExcelParser } from '../package/excel_parser';
import { ExcelReader } from '../package/excel_reader';

export function Run() {
  const reader = new ExcelReader(
    '/Users/gimjaehyeong/Desktop/member_excel.xls'
  );

  const { workbook, sheetNames } = reader.getResult();

  //   sheetNames.forEach((sheetName) => {
  // solution
  //   });

  sheetNames.forEach((sheetName) => {
    const data = ExcelParser.GetParsedDataBySheetName(workbook, sheetName);
    console.log(data);
  });
}
