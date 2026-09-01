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
export const sponsors: Sponsor[] = [
  {
    id: "1",
    name: "Atlas Copco Group",
    logo: "/logos/atlascopco.jpg",
    tier: "Parceiro",
  },

  {
    id: "2",
    name: "All Lubrificantes",
    logo: "/logos/alllubrificantes.png",
    tier: "Parceiro",
  },

  {
    id: "3",
    name: "IMPLASTEC",
    logo: "/logos/implastec.png",
    tier: "Parceiro",
  },

  {
    id: "4",
    name: "KS TOOLS",
    logo: "/logos/kstools.png",
    tier: "Parceiro"
  },

  {
    id: "5",
    name: "ADComp",
    logo: "/logos/adcomp.jpg",
    tier: "Parceiro"
  },

  {
    id: "6",
    name: "IPFacens",
    logo: "/logos/ipfacens.png",
    tier: "Parceiro"
  }, 

  {
    id: "7",
    name: "Fab LAB Facens",
    logo: "/logos/fablab.png",
    tier: "Parceiro"
  },

  {
    id: "8",
    name: "Grupo SPLICE",
    logo: "/logos/splice.jpeg",
    tier: "Parceiro"
  },

  {
    id: "9",
    name: "UniFacens",
    logo: "/logos/unifacens.jpg",
    tier: "Instituição"
  }
];