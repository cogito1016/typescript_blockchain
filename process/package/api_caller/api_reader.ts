import axios from 'axios';

require('dotenv').config({
  path: `${__dirname}/.api_info.env`,
});
export class ApiReader {
  static URL: string | undefined = process.env.API_URL;
  static VERSION: string | undefined = process.env.API_VERSION;

  static async CallMemberList(
    offset: number,
    limit: number,
    solution: Function
  ) {
    const URL = `${this.URL}/${this.VERSION}/member/members?offset=${offset}&limit=${limit}`;
    const UNDEFINED = 'undefined';

    const HEADERS: Record<string, string> = {};
    const TEST_USER_KEY: string = process.env.API_TEST_USER_KEY || UNDEFINED;
    HEADERS[TEST_USER_KEY] = process.env.API_TEST_USER_VALUE || UNDEFINED;
    HEADERS['Content-Type'] = 'application/json';
    HEADERS['access-token'] = process.env.API_ACCESSTOKEN || UNDEFINED;

    if (
      TEST_USER_KEY === UNDEFINED ||
      HEADERS['access-token'] === UNDEFINED ||
      HEADERS[TEST_USER_KEY] === UNDEFINED
    ) {
      new Error('env value is undefined');
    }

    const response = await axios.get(URL, {
      headers: HEADERS,
    });

    return solution(response.data.data.list);
  }
}
