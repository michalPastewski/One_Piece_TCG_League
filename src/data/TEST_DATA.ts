// TODO: add real data from server!!
export const DB_SEASONS: string[] = ['season_1', 'season_2', 'season_3'];
export const DB_LEADERBOARD = {
  headers: ['Rank', 'Nick', 'Points', 'W', 'L', 'Conf', 'Leader', 'City'],
  body: [
    {
      rank: 1,
      nick: 'Slizzle',
      points: 9,
      W: 3,
      L: 1,
      conf: 4,
      leader: 'Read Shanks',
      city: 'Gdańsk',
    },
    {
      rank: 2,
      nick: 'Marple',
      points: 7,
      W: 2,
      L: 2,
      conf: 4,
      leader: 'Blue Dofflamingo',
      city: '',
    },
    {
      rank: 3,
      nick: 'Henjo',
      points: 5,
      W: 0,
      L: 4,
      conf: 4,
      leader: 'Yellow Enel',
      city: '',
    },
    {
      rank: 3,
      nick: 'LOLO',
      points: 5,
      W: 0,
      L: 4,
      conf: 4,
      leader: 'PASTA BLASTA',
      city: 'New Port',
    },
  ],
};

export const DB_MATCHUPS = {
  season_1: {
    week_1: {
      dates: '06-01-2025 / 12-01-2025',
      games: [
        {
          week: 1,
          //  date: '05.01.2025',
          //  confirm: true,
          pilot_1: 'Slizzle',
          leader_1: 'Red Shanks',
          pilot_2: 'Marple',
          leader_2: 'Blue Dofflamingo',
          result: '1:0',
        },
        {
          week: 1,
          //  date: '04.01.2025',
          //  confirm: true,
          pilot_1: 'Saranda',
          leader_1: 'Yellow Enel',
          pilot_2: 'Henjo',
          leader_2: 'Black Smoker',
          result: '0:1',
        },
        {
          week: 1,
          //  date: '05.01.2025',
          //  confirm: true,
          pilot_1: 'Kanji',
          leader_1: 'Red Shanks',
          pilot_2: 'Petlo',
          leader_2: 'Blue NAmi',
          result: '0:1',
        },
      ],
    },

    week_2: {
      dates: '13-01-2025 / 19-01-2025',
      games: [
        {
          week: 2,
          //  date: null,
          //  confirm: null,
          pilot_1: 'Slizzle',
          leader_1: 'Red Shanks',
          pilot_2: 'Marple',
          leader_2: 'Blue Dofflamingo',
          result: 'TBA',
        },
        {
          week: 2,
          //  date: null,
          //  confirm: null,
          pilot_1: 'Saranda',
          leader_1: 'Yellow Enel',
          pilot_2: 'Henjo',
          leader_2: 'Black Smoker',
          result: 'TBA',
        },
        {
          week: 2,
          //  date: null,
          //  confirm: null,
          pilot_1: 'Kanji',
          leader_1: 'Red Shanks',
          pilot_2: 'Petlo',
          leader_2: 'Blue NAmi',
          result: 'TBA',
        },
      ],
    },
  },
};
