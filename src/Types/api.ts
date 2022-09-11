export interface ICategory {
  id: string
  name: string
}

export type ICategoryResponse = Array<ICategory>

export interface IProductItem {
  id: string
  image: string
  images: string[]
  name: string
  off: string
  price: string
  rating: number
  new: boolean
  isFav: boolean
  out_of_stock: boolean
  reviewCount: number
  sizes: number[]
  description: string
}

export type IProductResponse = Array<IProductItem>
