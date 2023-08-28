import axios from 'axios';

require('dotenv').config({
  path: `${__dirname}/.api_info.env`,
});
export class ApiReader {
  static URL: string | undefined = process.env.API_URL;
  static VERSION: string | undefined = process.env.API_VERSION;

  static async CallMemberList(offset: number, limit: number) {
    const url = `${this.URL}/${this.VERSION}/member/members?offset=${offset}&limit=${limit}`;

    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'access-token': process.env.API_ACCESSTOKEN,
      },
    });

    return response.data;
  }
}
