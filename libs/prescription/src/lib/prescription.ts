export interface PrescriptionInterface {
  patient: string;
  age: number;
  sex: 'Male' | 'Female';
  address: string;
  prescriptions: Array<{
    generic: string;
    brand: string;
    preparation: string;
    type: string;
    quantity: number;
    instruction: string;
  }>;
}
