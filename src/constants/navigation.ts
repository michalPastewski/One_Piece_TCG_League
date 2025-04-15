interface NavLink {
  name: string;
  path: string;
}

export type NavLinks = NavLink[];

export const NAV_LINKS_SIGN_OUT: NavLinks = [
  { name: 'Home', path: '/' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Regulations', path: '/regulations/format' },
  { name: 'News', path: '/news' },
];

export const NAV_LINKS_SIGN_IN: NavLinks = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Leaderboard', path: '/leaderboard' },
  { name: 'Regulations', path: '/regulations/format' },
  { name: 'Matches', path: '/matches' },
  { name: 'News', path: '/news' },
];
