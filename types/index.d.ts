export interface Category {
  title: string;
  icon: string;
  iconsCount: number;
  stylesCount: number;
}

export interface Project {
  title: string;
  icon: string;
  description: string;
}

export interface Value {
  title: string;
  icon: string;
  description: string;
}

export interface Feature {
  title: string;
  isAccessible: boolean;
}
export interface Pricing {
  title: string;
  icon: "free" | "solo" | "team";
  price: string;
  period: string;
  description: string;
  features: Feature[];
  popular?: string;
  ctaText?: string;
  ctaLink?: string;
  offer?: string;
  priceLabel?: string;
}

export interface EMail {
  name: string;
  from: string;
  subject: string;
  message: string;
}
export interface Content {
  title: string;
  description?: string;
  list?: string[];
}

export interface ITermOfUse {
  page: string;
  content: Content[];
}

export type Amelioration = {
  content: string;
  type: string;
};

export type Update = {
  version: string;
  date: string;
  ameliorations: Amelioration[];
};
