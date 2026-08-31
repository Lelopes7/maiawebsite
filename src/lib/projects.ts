export type Project = {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  /** URL da imagem do projeto. Deixe vazio para exibir o placeholder. */
  image?: string;
  /** Link opcional "saber mais". */
  link?: string;
};

/**
 * Adicione novos projetos aqui — os cards são gerados automaticamente.
 * Enquanto a lista estiver vazia, a seção exibe espaços reservados elegantes.
 */
export const projects: Project[] = [];
