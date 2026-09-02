export type Award = {
  id: string;
  year: string;
  title: string;
  competition: string;
  description: string;
};

export type Photo = {
  id: string;
  caption: string;
  /** URL da imagem. Deixe vazio para exibir o placeholder. */
  src?: string;
};

/**
 * Adicione prêmios e conquistas da equipe aqui — a linha do tempo é gerada automaticamente.
 * Enquanto a lista estiver vazia, a seção exibe espaços reservados elegantes.
 */
export const awards: Award[] = [];

/**
 * Adicione fotos da equipe, competições e eventos aqui — a galeria é gerada automaticamente.
 * Enquanto a lista estiver vazia, a seção exibe espaços reservados elegantes.
 */
export const photos: Photo[] = [];
