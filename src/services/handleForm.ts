export default class HandleSubmit {
  private static API_URL = 'http://localhost:3001';

  async execute(input: Input): Promise<any> {
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

export type Input = {
  name: string;
  cpf: string;
  birthDate: string;
  phoneNumber: string;
  zipCode: string;
  street: string;
  complement: string;
  number: string;
  city: string;
  state: string;
};
