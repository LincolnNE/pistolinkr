// All copy, kept out of markup. Mirrors the "C · Flat" prototype.

export const nav = [
  { href: '#name', label: 'name' },
  { href: '#work', label: 'work' },
  { href: '#log', label: 'log' },
];

export const statement = {
  title: ['one name,', 'two meanings.'],
  body: 'Pistol is grace and revolution. inkr is the hope that it comes true in Korea. Everything here is made under that name.',
};

export const name = {
  eyebrow: 'name',
  title: 'the name is the person.',
  halves: [
    {
      lit: 'pistol' as const,
      kicker: 'first half · the symbol',
      body: 'The symbol I carry for two things at once.',
      items: [{ term: 'grace' }, { term: 'revolution' }],
    },
    {
      lit: 'inkr' as const,
      kicker: 'second half · in kr',
      body: 'The hope that grace and revolution come true, here in Korea.',
      items: [
        { term: 'in', note: 'where it should happen' },
        { term: 'kr', note: 'Korea' },
      ],
    },
  ] as { lit: 'pistol' | 'inkr'; kicker: string; body: string; items: { term: string; note?: string }[] }[],
};

export const lens = {
  eyebrow: 'g.gearservice',
  title: 'the lens.',
  body: 'At g.gearservice I sit where the two teams cross. I set the direction, keep every workstream moving, and lead the delta team directly.',
  items: ['owns direction', 'moves every workstream', 'direct command → delta'],
  rows: [
    { kicker: 'top arc', name: 'alpha', lit: false },
    { kicker: 'the lens', name: 'pistolinkr', lit: true },
    { kicker: 'bottom arc', name: 'delta', lit: false },
  ],
};

export type Pill = { kind: 'live' | 'outline'; label: string };

export const work = {
  eyebrow: 'work',
  title: 'things i make.',
  items: [
    {
      name: 'biolabs.world',
      href: 'https://www.biolabs.world',
      desc: 'A research platform combining protein simulation, AI diagnosis, drug screening and epidemiological modeling.',
      pills: [{ kind: 'live', label: 'live' }],
    },
    {
      name: 'g.gearservice',
      href: 'https://github.com/g-gearservice',
      desc: 'The team I lead — two arcs and one lens, one flow from planning to operations.',
      pills: [{ kind: 'live', label: 'live' }, { kind: 'outline', label: 'lead' }],
    },
  ] as { name: string; href: string; desc: string; pills: Pill[] }[],
};

export const log = {
  eyebrow: 'log · lately',
  title: 'lately.',
  body: 'Picked from recent pushes. A filled colon is done, a hollow one is next.',
  entries: [
    { date: '10.12.26', title: 'logo & flags added', repo: 'pistolinkr', done: true },
    { date: '09.10.26', title: 'biolabs — agent-managed repo', repo: 'biolabs3', done: true },
    { date: '08.16.26', title: 'biolabs — frontend', repo: 'biolabs', done: true },
    { date: '[date]', title: 'next: pistolinkr.com launch', repo: 'pistolinkr', done: false },
  ],
};

export const contact = {
  eyebrow: 'contact',
  title: 'let’s cross paths.',
  body: 'Collaboration, interviews, hiring, feedback. An idea, a question, or a problem worth solving: bring it.',
  email: 'pistolinkr@icloud.com',
  links: [
    { label: '[github]', href: 'https://github.com/pistolinkr' },
    { label: '[pistolinkr.com]', href: 'https://pistolinkr.com' },
  ],
};

export const footer = {
  links: [
    { label: 'name', href: '#name' },
    { label: 'work', href: '#work' },
    { label: 'log', href: '#log' },
    { label: '[github]', href: 'https://github.com/pistolinkr' },
    { label: 'back to top ↑', href: '#top' },
  ],
};
