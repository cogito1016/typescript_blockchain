import * as XLSX from 'xlsx';

function readExcelFile(filePath: string) {
  const workbook = XLSX.readFile(filePath);
  const sheetNames = workbook.SheetNames;

  sheetNames.forEach((sheetName) => {
    console.log(`Reading sheet: ${sheetName}`);

    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);
    console.log(data);
  });
}

// 예제 실행
readExcelFile('/Users/gimjaehyeong/Desktop/member_excel.xls');
