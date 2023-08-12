import { Fornecedor } from "./fornecedor"

export type Produto = {
    nome: string,
    preco: number|null,
    fornecedor: Fornecedor | undefined
}