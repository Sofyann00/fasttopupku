export interface VoucherCode {
  id: string;
  code: string;
  gameId: string;
  value: number;
  status: 'valid' | 'invalid';
}

export const dummyVoucherCodes: VoucherCode[] = [
  {
    id: '1',
    code: 'MLBB-1234-5678',
    gameId: '1',
    value: 100000,
    status: 'valid'
  },
  {
    id: '2',
    code: 'MLBB-8765-4321',
    gameId: '1',
    value: 50000,
    status: 'valid'
  },
  {
    id: '3',
    code: 'FF-1234-5678',
    gameId: '2',
    value: 100000,
    status: 'valid'
  },
  {
    id: '4',
    code: 'FF-8765-4321',
    gameId: '2',
    value: 50000,
    status: 'valid'
  },
  {
    id: '5',
    code: 'PUBG-1234-5678',
    gameId: '3',
    value: 100000,
    status: 'valid'
  },
  {
    id: '6',
    code: 'PUBG-8765-4321',
    gameId: '3',
    value: 50000,
    status: 'valid'
  },
  {
    id: '7',
    code: 'MLBB-2345-6789',
    gameId: '12',
    value: 75000,
    status: 'valid'
  },
  {
    id: '8',
    code: 'MLBB-9876-5432',
    gameId: '1',
    value: 25000,
    status: 'valid'
  },
  {
    id: '9',
    code: 'FFM-1234-5678',
    gameId: '5',
    value: 100000,
    status: 'valid'
  },
  {
    id: '10',
    code: 'FFM-8765-4321',
    gameId: '5',
    value: 50000,
    status: 'valid'
  },
  {
    id: '11',
    code: 'PUBGM-1234-5678',
    gameId: '6',
    value: 100000,
    status: 'valid'
  },
  {
    id: '12',
    code: 'PUBGM-8765-4321',
    gameId: '6',
    value: 50000,
    status: 'valid'
  },
  {
    id: '13',
    code: 'MLA-1234-5678',
    gameId: '7',
    value: 100000,
    status: 'valid'
  },
  {
    id: '14',
    code: 'MLA-8765-4321',
    gameId: '7',
    value: 50000,
    status: 'valid'
  },
  {
    id: '15',
    code: 'FFOB-1234-5678',
    gameId: '8',
    value: 100000,
    status: 'valid'
  },
  {
    id: '16',
    code: 'FFOB-8765-4321',
    gameId: '8',
    value: 50000,
    status: 'valid'
  },
  {
    id: '17',
    code: 'PUBGKR-1234-5678',
    gameId: '9',
    value: 100000,
    status: 'valid'
  },
  {
    id: '18',
    code: 'PUBGKR-8765-4321',
    gameId: '9',
    value: 50000,
    status: 'valid'
  },
  {
    id: '19',
    code: 'MLBBAS-1234-5678',
    gameId: '10',
    value: 100000,
    status: 'valid'
  },
  {
    id: '20',
    code: 'MLBBAS-8765-4321',
    gameId: '10',
    value: 50000,
    status: 'valid'
  },
  {
    id: '21',
    code: 'FFAS-1234-5678',
    gameId: '11',
    value: 100000,
    status: 'valid'
  },
  {
    id: '22',
    code: 'FFAS-8765-4321',
    gameId: '11',
    value: 50000,
    status: 'valid'
  }
];

export const validateVoucherCode = (code: string, gameId: string): { isValid: boolean; value?: number } => {
  // First check if the code exists and is valid
  const voucher = dummyVoucherCodes.find(v => v.code === code && v.status === 'valid');
  
  if (!voucher) {
    return { isValid: false };
  }

  // Then check if the voucher belongs to the correct game
  if (voucher.gameId !== gameId) {
    return { isValid: false };
  }
  
  return { isValid: true, value: voucher.value };
};
