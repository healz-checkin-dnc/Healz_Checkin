import { CheckinSchemaType } from '../components/CheckinForm/checkinSchema';

export default class HandleSubmit {
  private static API_URL = 'http://localhost:3001';

  async execute(input: CheckinSchemaType): Promise<any> {
    try {
      const res = await fetch(`${HandleSubmit.API_URL}/send-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });
      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`Error submitting form: ${res.status} ${res.statusText} - ${errorBody}`);
      }
      return await res.json();
    } catch (error) {
      throw error;
    }
  }
}
