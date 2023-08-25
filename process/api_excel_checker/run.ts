import { ApiReader } from '../package/api_caller/api_reader';
import { ExcelParser } from '../package/excel_controller/excel_parser';
import { ExcelReader } from '../package/excel_controller/excel_reader';

/**
 * Excel데이터와 API응답데이터의 일관성을 체크한다.
 */
export function Run() {
  const reader = new ExcelReader(
    '/Users/gimjaehyeong/Desktop/member_excel.xls'
  );

  const { workbook, sheetNames } = reader.getResult();

  sheetNames.forEach((sheetName) => {
    const data = ExcelParser.GetParsedDataBySheetName(
      workbook,
      sheetName,
      (rawData: any[]) => {
        const map = new Map<string, object>();

        rawData.forEach((row: any) => {
          const key = row['고유키(!)'];
          const value = {
            cnt: row['구매횟수(KRW)(!)'],
            total_price: row['구매금액(KRW)(!)'],
          };
          map.set(key, value);
        });

        return map;
      }
    );
    // console.log(data);
  });

  const apiData = ApiReader.CallMemberList(1, 100);
  console.log(apiData);
}
