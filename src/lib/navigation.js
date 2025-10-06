export const artefactNavItems = [
  { href: '/artefatos/g0', label: 'G0 - Intake & Triage' },
  { href: '/artefatos/g1', label: 'G1 - Descoberta & Iniciação' },
  { href: '/artefatos/g2', label: 'G2 - Planejamento Detalhado' },
  { href: '/artefatos/g3', label: 'G3 - Execução & Monitoramento' },
  { href: '/artefatos/g4', label: 'G4 - Lançamento & Estabilização' },
  { href: '/artefatos/checklists', label: 'Checklists Operacionais' },
];

export const mainNavigation = [
  { label: 'Home', href: '/' },
  { label: 'Fluxo PMO', href: '/fluxo-pmo' },
  { label: 'DoD / DoR', href: '/dod-dor' },
  {
    label: 'Artefatos',
    children: artefactNavItems,
  },
];
