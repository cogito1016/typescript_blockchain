import { ExcelParser } from './excel_parser';
import { ExcelReader } from './excel_reader';

export function Run() {
  const reader = new ExcelReader(
    '/Users/gimjaehyeong/Desktop/member_excel.xls'
  );

  const { workbook, sheetNames } = reader.getResult();

  sheetNames.forEach((sheetName) => {
    const data = ExcelParser.GetDataBySheetName(workbook, sheetName);
    console.log(data.length);
  });
}
