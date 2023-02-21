export interface Article {
  created_at: string,
  description: string,
  id: number,
  price: number,
  stock: number,
  updated_at: string,
}

export interface ArticleDTO {
  description: string | null,
  price: number | null,
  stock: number | null,
}
