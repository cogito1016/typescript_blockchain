import axios from 'axios';

//api_info.env 파일을 읽어서 환경변수로 등록한다.
require('dotenv').config({
  path: '',
});
export class ApiReader {
  static URL: string | undefined = process.env.API_URL;
  static VERSION: string | undefined = process.env.API_VERSION;

  static async CallMemberList(offset: number, limit: number) {
    const url = `${this.URL}/${this.VERSION}/member/members?offset=${offset}&limit=${limit}`;

    await axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          'access-token': process.env.API_ACCESS_TOKEN,
        },
      })
      .then((res) => {
        const result = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
