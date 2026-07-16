export type FavoritosAction =
  | {type: '[Favoritos] Alternar'; id: number}
  | {type: '[Favoritos] Limpiar'}
  | {type: '[Favoritos] Cargar'; ids: number[]}