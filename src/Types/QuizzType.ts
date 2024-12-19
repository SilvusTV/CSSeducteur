type Mapping = number[];

export type Question = {
  id: number;
  question: string;
  options: string[];
  mappings: Mapping[];
};

export type Framework = {
  id: number;
  name: string;
  description: string;
};
