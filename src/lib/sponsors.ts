export type Sponsor = {
  id: string;
  name: string;
  /** URL do logo do patrocinador. Deixe vazio para exibir o placeholder. */
  logo?: string;
  /** Link opcional do site ou rede social. */
  url?: string;
  /** Categoria de apoio, ex.: Ouro, Prata, Bronze, Parceiro. */
  tier?: string;
};

/**
 * Adicione novos patrocinadores aqui — os cards são gerados automaticamente.
 * Enquanto a lista estiver vazia, a seção exibe espaços reservados elegantes.
 */
export const sponsors: Sponsor[] = [];
