export type PurchaseProduct = {
  id: number;
  price: number;
};

export type Purchase = {
  products: PurchaseProduct[];
  billing: {
    name: string;
    email: string;
    document: string;
  };
  delivery: {
    email: string;
  };
  payment: {
    card: {
      active: boolean;
      owner?: {
        name: string;
        document: string;
      };
      name?: string;
      number?: string;
      expires?: {
        month: number;
        year: number;
      };
      code?: number;
    };
    installments: number;
  };
};
