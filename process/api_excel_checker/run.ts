import { ApiReader } from '../package/api_caller/api_reader';
import { ExcelParser } from '../package/excel_controller/excel_parser';
import { ExcelReader } from '../package/excel_controller/excel_reader';

/**
 * Excel데이터와 API응답데이터의 일관성을 체크한다.
 */
export async function Run() {
  const reader = new ExcelReader(
    '/Users/gimjaehyeong/Desktop/test_bluming_member.xls'
  );

  const { workbook, sheetNames } = reader.getResult();

  let excelDataList: Map<string, object> = new Map();

  /**
   * Map(159) {
    'membercode' => { cnt: '23', total_price: '567733' },
    ...
   */
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

    excelDataList = new Map([...excelDataList, ...data]);
  });

  let offset = 1;
  let excelDataLength = excelDataList.size;
  let apiDataLength = 0;
  let notMatchedDataCount = 0;

  while (true) {
    /**
   * Map(100) {
  'membercode' => { cnt: 23, total_price: 567733 },
   */
    const apiData = await ApiReader.CallMemberList(
      offset,
      100,
      (rawData: any[]) => {
        const map = new Map<string, object>();

        rawData.forEach((row: any) => {
          const key = row['member_code'];
          const value = {
            cnt: row['order_count'].toString(),
            total_price: row['order_total_price'].toString(),
          };
          map.set(key, value);
        });

        return map;
      }
    );

    if (apiData.size == 0) {
      break;
    }

    apiDataLength += apiData.size;

    apiData.forEach((value: object, key: string) => {
      if (excelDataList.has(key)) {
        const excelValue: object | undefined = excelDataList.get(key);
        if (excelValue) {
          if (JSON.stringify(value) !== JSON.stringify(excelValue)) {
            notMatchedDataCount++;
            console.log(
              `member_code: ${key} \nAPI   : ${JSON.stringify(
                value
              )}\nEXCEL : ${JSON.stringify(excelValue)}\n\n`
            );
          }
        }
      }
    });

    offset++;
  } //while end

  console.log('excelDataLength', excelDataLength);
  console.log('apiDataLength', apiDataLength);
  console.log('notMatchedDataCount', notMatchedDataCount);
  RunUserControl();
}

export function RunUserControl() {
  //CLI로부터 "run"을 입력받으면 HelloWorld를 출력한다.
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('(실행=go, 종료=exit) 입력 : ', (answer: string) => {
    if (answer === 'go') {
      Run();
    } else if (answer === 'exit') {
      console.log('종료합니다.');
    }

    rl.close();
  });
}
