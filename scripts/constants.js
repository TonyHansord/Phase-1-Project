const showIndex = `https://api.tvmaze.com/shows?page=`;
const scheduleSearch = `https://api.tvmaze.com/schedule?`;
const showCountry = [
  { countryCode: 'US', countryName: 'USA' },
  { countryCode: 'AU', countryName: 'Australia' },
  { countryCode: 'GB', countryName: 'UK' },
];

let topFiftyShows = [
  {
    id: 169,
    url: 'https://www.tvmaze.com/shows/169/breaking-bad',
    name: 'Breaking Bad',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Thriller'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2008-01-20',
    ended: '2019-10-11',
    officialSite: 'http://www.amc.com/shows/breaking-bad',
    schedule: {
      time: '22:00',
      days: ['Sunday'],
    },
    rating: {
      average: 9.3,
    },
    weight: 99,
    network: {
      id: 20,
      name: 'AMC',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 18164,
      thetvdb: 81189,
      imdb: 'tt0903747',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg',
    },
    summary:
      "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
    updated: 1663295367,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/169',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2007806',
      },
    },
  },
  {
    id: 30770,
    url: 'https://www.tvmaze.com/shows/30770/chernobyl',
    name: 'Chernobyl',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'History'],
    status: 'Ended',
    runtime: null,
    averageRuntime: 70,
    premiered: '2019-05-06',
    ended: '2019-06-03',
    officialSite: 'https://www.hbo.com/chernobyl',
    schedule: {
      time: '21:00',
      days: ['Monday'],
    },
    rating: {
      average: 9,
    },
    weight: 96,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 360893,
      imdb: 'tt7366338',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/193/482599.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/193/482599.jpg',
    },
    summary:
      '<p><b>Chernobyl</b> dramatizes the true story of one of the worst man-made catastrophes in history and tells of the brave men and women who sacrificed to save Europe from unimaginable disaster. The miniseries focuses on the heartbreaking scope of the nuclear plant disaster that occurred in Ukraine in April 1986, revealing how and why it happened and telling the shocking, remarkable stories of the heroes who fought and fell.</p>',
    updated: 1657658077,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/30770',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1634384',
      },
    },
  },
  {
    id: 82,
    url: 'https://www.tvmaze.com/shows/82/game-of-thrones',
    name: 'Game of Thrones',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Adventure', 'Fantasy'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 61,
    premiered: '2011-04-17',
    ended: '2019-05-19',
    officialSite: 'http://www.hbo.com/game-of-thrones',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 99,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 24493,
      thetvdb: 121361,
      imdb: 'tt0944947',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/190/476117.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/190/476117.jpg',
    },
    summary:
      '<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>',
    updated: 1658720459,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/82',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1623968',
      },
    },
  },
  {
    id: 179,
    url: 'https://www.tvmaze.com/shows/179/the-wire',
    name: 'The Wire',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2002-06-02',
    ended: '2008-03-09',
    officialSite: 'http://www.hbo.com/the-wire',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 97,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 6296,
      thetvdb: 79126,
      imdb: 'tt0306414',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/1/2527.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/1/2527.jpg',
    },
    summary:
      "<p>The first season of <b>The Wire</b> (2002) concentrated on the often-futile efforts of police to infiltrate a West Baltimore drug ring headed by Avon Barksdale and his lieutenant, Stringer Bell. In Seasons Two and Three, as the Barksdale investigation escalated, new storylines involving pressures on the working class and the city's political leadership were introduced. Season Four focused on the stories of several young boys in the public school system, struggling with problems at home and the lure of the corner - set against the rise of a new drug empire in West Baltimore and a new Mayor in City Hall. The fifth and final season of <i>The Wire</i> centers on the media's role in addressing - or failing to address - the fundamental political, economic and social realities depicted over the course of the series, while also resolving storylines of the numerous characters woven throughout the narrative arc of the show.</p>",
    updated: 1644603937,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/179',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/12969',
      },
    },
  },
  {
    id: 180,
    url: 'https://www.tvmaze.com/shows/180/firefly',
    name: 'Firefly',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Adventure', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 64,
    premiered: '2002-09-20',
    ended: '2002-12-20',
    officialSite: null,
    schedule: {
      time: '20:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 96,
    network: {
      id: 4,
      name: 'FOX',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.fox.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 3548,
      thetvdb: 78874,
      imdb: 'tt0303461',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/1/2600.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/1/2600.jpg',
    },
    summary:
      '<p>Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them.</p>',
    updated: 1645916119,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/180',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/13005',
      },
    },
  },
  {
    id: 204,
    url: 'https://www.tvmaze.com/shows/204/stargate-sg-1',
    name: 'Stargate SG-1',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Adventure', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '1997-07-27',
    ended: '2008-07-29',
    officialSite: 'http://stargate.mgm.com/view/series/1/index.html',
    schedule: {
      time: '20:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 99,
    network: {
      id: 16,
      name: 'Syfy',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 5325,
      thetvdb: 72449,
      imdb: 'tt0118480',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/1/3027.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/1/3027.jpg',
    },
    summary:
      "<p><b>Stargate SG-1</b> is a science fiction series based on the original film <i>Stargate</i>. It involves the team SG-1 going on various adventures to different alien worlds through Stargates. Throughout the series they encounter various alien threats and allies including but not limited to the Goa'uld and the Asgard.</p>",
    updated: 1649569551,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/204',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/13654',
      },
    },
  },
  {
    id: 251,
    url: 'https://www.tvmaze.com/shows/251/downton-abbey',
    name: 'Downton Abbey',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Family', 'Romance'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 71,
    premiered: '2010-09-26',
    ended: '2015-12-25',
    officialSite: 'http://www.itv.com/downtonabbey',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 98,
    network: {
      id: 35,
      name: 'ITV1',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.itv.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 26615,
      thetvdb: 193131,
      imdb: 'tt1606375',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/1/4601.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/1/4601.jpg',
    },
    summary:
      "<p>The Downton Abbey estate stands a splendid example of confidence and mettle, its family enduring for generations and its staff a well-oiled machine of propriety. But change is afoot at Downton--change far surpassing the new electric lights and telephone. A crisis of inheritance threatens to displace the resident Crawley family, in spite of the best efforts of the noble and compassionate Earl, Robert Crawley; his American heiress wife, Cora his comically implacable, opinionated mother, Violet and his beautiful, eldest daughter, Mary, intent on charting her own course. Reluctantly, the family is forced to welcome its heir apparent, the self-made and proudly modern Matthew Crawley himself none too happy about the new arrangements. As Matthew's bristly relationship with Mary begins to crackle with electricity, hope for the future of Downton's dynasty takes shape. But when petty jealousies and ambitions grow among the family and the staff, scheming and secrets--both delicious and dangerous--threaten to derail the scramble to preserve Downton Abbey. <i>Downton Abbey</i> offers a spot-on portrait of a vanishing way of life.</p>",
    updated: 1668218432,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/251',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/623237',
      },
    },
  },
  {
    id: 335,
    url: 'https://www.tvmaze.com/shows/335/sherlock',
    name: 'Sherlock',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Mystery'],
    status: 'Ended',
    runtime: 90,
    averageRuntime: 90,
    premiered: '2010-07-25',
    ended: '2017-01-15',
    officialSite: 'http://www.bbc.co.uk/programmes/b018ttws',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 99,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 23433,
      thetvdb: 176941,
      imdb: 'tt1475582',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/171/428042.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/171/428042.jpg',
    },
    summary:
      "<p>Sherlock Holmes and Dr. John Watson's adventures in 21st Century London. A thrilling, funny, fast-paced contemporary reimagining of the Arthur Conan Doyle classic.</p>",
    updated: 1670042592,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/335',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1004191',
      },
    },
  },
  {
    id: 465,
    url: 'https://www.tvmaze.com/shows/465/band-of-brothers',
    name: 'Band of Brothers',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'War'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 59,
    premiered: '2001-09-09',
    ended: '2001-11-04',
    officialSite: 'http://www.hbo.com/band-of-brothers',
    schedule: {
      time: '20:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 97,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 2708,
      thetvdb: 74205,
      imdb: 'tt0185906',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/80/201679.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/80/201679.jpg',
    },
    summary:
      "<p>Drawn from interviews with survivors of Easy Company, as well as their journals and letters, <b>Band of Brothers</b> chronicles the experiences of these men from paratrooper training in Georgia through the end of the war. As an elite rifle company parachuting into Normandy early on D-Day morning, participants in the Battle of the Bulge, and witness to the horrors of war, the men of Easy knew extraordinary bravery and extraordinary fear - and became the stuff of legend. Based on Stephen E. Ambrose's acclaimed book of the same name.</p>",
    updated: 1662443989,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/465',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/42799',
      },
    },
  },
  {
    id: 527,
    url: 'https://www.tvmaze.com/shows/527/the-sopranos',
    name: 'The Sopranos',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '1999-01-10',
    ended: '2007-06-10',
    officialSite: 'http://www.hbo.com/the-sopranos',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 98,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 6206,
      thetvdb: 75299,
      imdb: 'tt0141842',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/4/11341.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/4/11341.jpg',
    },
    summary:
      "<p><b>The Sopranos</b>, writer-producer-director David Chase's extraordinary television series, is nominally an urban gangster drama, but its true impact strikes closer to home: Like 1999's other screen touchstone, American Beauty, the HBO series chronicles a dysfunctional, suburban American family in bold relief. And for protagonist Tony Soprano, there's the added complexity posed by heading twin families, his collegial mob clan and his own, nouveau riche brood.</p>",
    updated: 1661802564,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/527',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/47925',
      },
    },
  },
  {
    id: 555,
    url: 'https://www.tvmaze.com/shows/555/avatar-the-last-airbender',
    name: 'Avatar: The Last Airbender',
    type: 'Animation',
    language: 'English',
    genres: ['Action', 'Adventure', 'Fantasy'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2005-02-21',
    ended: '2008-07-19',
    officialSite: 'https://www.nick.com/shows/avatar',
    schedule: {
      time: '11:00',
      days: ['Saturday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 96,
    network: {
      id: 27,
      name: 'Nickelodeon',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.nick.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 2680,
      thetvdb: 74852,
      imdb: 'tt0417299',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/79/199224.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/79/199224.jpg',
    },
    summary:
      "<p>Water. Earth. Fire. Air. Only the Avatar was the master of all four elements. Only he could stop the ruthless Fire Nation from conquering the world. But when the world needed him most, he disappeared. Until now... On the South Pole, a lone Water Tribe village struggles to survive. It's here that a young Waterbender named Katara and her warrior brother Sokka rescue a strange boy named Aang from a cavernous iceberg. Not only is Aang an Airbender--a race of people no one has seen in a century--but they soon discover that Aang is also the long lost Avatar. Now it's up to Katara and Sokka to make sure Aang faces his destiny to save the tribe--and himself. Did we mention he's only 12?</p>",
    updated: 1649612060,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/555',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/51776',
      },
    },
  },
  {
    id: 748,
    url: 'https://www.tvmaze.com/shows/748/oz',
    name: 'Oz',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '1997-07-12',
    ended: '2003-02-23',
    officialSite: 'http://www.hbo.com/oz/',
    schedule: {
      time: '22:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 98,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 4760,
      thetvdb: 70682,
      imdb: 'tt0118421',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/6/15172.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/6/15172.jpg',
    },
    summary:
      "<p>HBO's violent men-behind-bars drama is an addictive, testosterone-driven soap opera for guys. The eight episodes of the first season set the style for the show: a massive cast of a vivid characters on both sides of the bars, four or five stories unleashed at a breakneck pace and framed by angry, oddball introductions, and a soaring casualty rate. Created by Homicide producer Tom Fontana, this drama quickly earned its rightful reputation as the most brutal show on TV. It's simple chemistry: combine volatile ingredients in a confined space, shut tight, and shake.</p>",
    updated: 1630239861,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/748',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/66028',
      },
    },
  },
  {
    id: 919,
    url: 'https://www.tvmaze.com/shows/919/attack-on-titan',
    name: 'Attack on Titan',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Action', 'Adventure', 'Anime', 'Fantasy'],
    status: 'Running',
    runtime: 25,
    averageRuntime: 25,
    premiered: '2013-04-07',
    ended: null,
    officialSite: 'http://shingeki.tv/',
    schedule: {
      time: '00:10',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 97,
    network: {
      id: 281,
      name: 'NHK',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 35298,
      thetvdb: 267440,
      imdb: 'tt2560140',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/311/779751.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/311/779751.jpg',
    },
    summary:
      '<p>Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!</p>',
    updated: 1667241541,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/919',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2291261',
      },
    },
  },
  {
    id: 1505,
    url: 'https://www.tvmaze.com/shows/1505/one-piece',
    name: 'One Piece',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Action', 'Adventure', 'Anime', 'Fantasy'],
    status: 'Running',
    runtime: 25,
    averageRuntime: 26,
    premiered: '1999-10-20',
    ended: null,
    officialSite: 'http://www.toei-anim.co.jp/tv/onep/',
    schedule: {
      time: '09:30',
      days: ['Sunday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 98,
    network: {
      id: 131,
      name: 'Fuji TV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 8205,
      thetvdb: 81797,
      imdb: 'tt0388629',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/405/1014967.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/405/1014967.jpg',
    },
    summary:
      '<p><b>One Piece</b> animation is based on the successful comic by Eiichiro Oda. The comic has sold more than 260 million copies. The success doesn\'t stop; the <i>One Piece</i> animation series is in its top 5 TV ratings for kids programs in Japan for past few years and the series\' most recent feature film title <i>"One Piece Film Z" </i>which was released on December 2012 has gathered 5.6 million viewers so far. The success goes beyond borders; receives high popularity on animation at terrestrial channel in Taiwan, no.1 rating on animation at a DTT channel in France, received high popularity among age 3-13 on a terrestrial channel in Germany in year 2010. The animation series has been broadcasted in many parts of the world: USA, UK, Australia, France, Spain, Portugal, Germany, Italy, Greece, Turkey, Israel, South Korea, Taiwan, China, Hong Kong, Philippine, Thailand, Singapore, Malaysia, Indonesia, Ecuador, Nicaragua, Chile, Mexico, Brazil, and etc.</p>',
    updated: 1671885920,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/1505',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2446311',
      },
      nextepisode: {
        href: 'https://api.tvmaze.com/episodes/2446604',
      },
    },
  },
  {
    id: 3291,
    url: 'https://www.tvmaze.com/shows/3291/the-world-at-war',
    name: 'The World at War',
    type: 'Documentary',
    language: 'English',
    genres: ['War', 'History'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '1973-10-31',
    ended: '1974-05-08',
    officialSite: 'https://yesterday.uktv.co.uk/shows/the-world-at-war/',
    schedule: {
      time: '21:00',
      days: ['Wednesday'],
    },
    rating: {
      average: 8.9,
    },
    weight: 93,
    network: {
      id: 35,
      name: 'ITV1',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.itv.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 8521,
      thetvdb: 79309,
      imdb: 'tt0071075',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/17/43921.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/17/43921.jpg',
    },
    summary:
      '<p>Laurence Olivier narrates the landmark 26-part British documentary series telling the story of World War II, profiling its main campaigns and highlighting the human cost on all sides of the conflict.</p>',
    updated: 1629389233,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/3291',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/220762',
      },
    },
  },
  {
    id: 2,
    url: 'https://www.tvmaze.com/shows/2/person-of-interest',
    name: 'Person of Interest',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Crime', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2011-09-22',
    ended: '2016-06-21',
    officialSite: 'http://www.cbs.com/shows/person_of_interest/',
    schedule: {
      time: '22:00',
      days: ['Tuesday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 98,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.cbs.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 28376,
      thetvdb: 248742,
      imdb: 'tt1839578',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg',
    },
    summary:
      "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
    updated: 1668668031,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/2',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/659372',
      },
    },
  },
  {
    id: 32,
    url: 'https://www.tvmaze.com/shows/32/fargo',
    name: 'Fargo',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Comedy', 'Crime'],
    status: 'Running',
    runtime: 60,
    averageRuntime: 68,
    premiered: '2014-04-15',
    ended: null,
    officialSite: 'http://www.fxnetworks.com/fargo',
    schedule: {
      time: '22:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 99,
    network: {
      id: 13,
      name: 'FX',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 35276,
      thetvdb: 269613,
      imdb: 'tt2802850',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/267/669639.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/267/669639.jpg',
    },
    summary:
      '<p><b>Fargo </b>is a seasonal anthology crime drama with some dark comical elements, inspired by the film <i>Fargo</i> written by the Coen brothers. Each season follows a new case and new characters, all entrenched in the trademark humor, murder and "Minnesota nice" that has made the film an enduring classic.</p>',
    updated: 1659876204,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/32',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1922899',
      },
    },
  },
  {
    id: 40,
    url: 'https://www.tvmaze.com/shows/40/death-note',
    name: 'Death Note',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Drama', 'Anime', 'Thriller', 'Mystery'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2006-10-03',
    ended: '2007-06-26',
    officialSite: 'http://www.j-deathnote.com/',
    schedule: {
      time: '13:00',
      days: ['Tuesday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 87,
    network: {
      id: 137,
      name: 'NTV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 13555,
      thetvdb: 79481,
      imdb: 'tt0877057',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/403/1009233.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/403/1009233.jpg',
    },
    summary:
      "<p><b>Death Note </b>is an anime series based around a manga of the same name whereby a human finds a death god's notebook. Any person's name written in this notebook will die. The main character who finds this noteboook is Light Yagami who faces off against an unfaced character named L who tries to challenge him.</p>",
    updated: 1661331359,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/40',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1865',
      },
    },
  },
  {
    id: 118,
    url: 'https://www.tvmaze.com/shows/118/house',
    name: 'House',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Mystery', 'Medical'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2004-11-16',
    ended: '2012-05-21',
    officialSite: null,
    schedule: {
      time: '21:00',
      days: ['Monday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 96,
    network: {
      id: 4,
      name: 'FOX',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.fox.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 3908,
      thetvdb: 73255,
      imdb: 'tt0412142',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/357/894990.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/357/894990.jpg',
    },
    summary:
      "<p>Sink your teeth into meaty drama and intrigue with <b>House</b>, FOX's take on mystery, where the villain is a medical malady and the hero is an irreverent, controversial doctor who trusts no one, least of all his patients.</p><p>Dr. Gregory House is a maverick physician who is devoid of bedside manner. While his behavior can border on antisocial, Dr. House thrives on the challenge of solving the medical puzzles that other doctors give up on. Together with his hand-picked team of young medical experts, he'll do whatever it takes in the race against the clock to solve the case.</p>",
    updated: 1661795551,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/118',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/9206',
      },
    },
  },
  {
    id: 206,
    url: 'https://www.tvmaze.com/shows/206/stargate-atlantis',
    name: 'Stargate Atlantis',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Adventure', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2004-07-16',
    ended: '2009-01-09',
    officialSite: 'http://stargate.mgm.com/view/series/2/index.html',
    schedule: {
      time: '21:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 96,
    network: {
      id: 16,
      name: 'Syfy',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 5324,
      thetvdb: 70851,
      imdb: 'tt0374455',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/1/3059.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/1/3059.jpg',
    },
    summary:
      "<p>Atlantis, built thousands of years ago by the highly evolved Ancients, is home base for an elite expedition from Earth. These courageous military commanders and scientists leap through the city's Stargate to explore the wondrous Pegasus galaxy and battle the treacherous Wraith, who seek control of Atlantis -- at any cost.</p>",
    updated: 1652413186,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/206',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/13782',
      },
    },
  },
  {
    id: 216,
    url: 'https://www.tvmaze.com/shows/216/rick-and-morty',
    name: 'Rick and Morty',
    type: 'Animation',
    language: 'English',
    genres: ['Comedy', 'Adventure', 'Science-Fiction'],
    status: 'Running',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2013-12-02',
    ended: null,
    officialSite: 'http://www.adultswim.com/videos/rick-and-morty',
    schedule: {
      time: '23:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 100,
    network: {
      id: 10,
      name: 'Adult Swim',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 33381,
      thetvdb: 275274,
      imdb: 'tt2861424',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/423/1059147.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/423/1059147.jpg',
    },
    summary:
      '<p>Rick is a mentally gifted, but sociopathic and alcoholic scientist and a grandfather to Morty; an awkward, impressionable, and somewhat spineless teenage boy. Rick moves into the family home of Morty, where he immediately becomes a bad influence.</p>',
    updated: 1671057191,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/216',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2439172',
      },
    },
  },
  {
    id: 396,
    url: 'https://www.tvmaze.com/shows/396/gravity-falls',
    name: 'Gravity Falls',
    type: 'Animation',
    language: 'English',
    genres: ['Adventure', 'Mystery', 'Supernatural'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2012-06-15',
    ended: '2016-02-15',
    officialSite: null,
    schedule: {
      time: '19:00',
      days: ['Monday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 93,
    network: {
      id: 25,
      name: 'Disney XD',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 31839,
      thetvdb: 259972,
      imdb: 'tt1865718',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/2/6140.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/2/6140.jpg',
    },
    summary:
      '<p>Twin brother and sister Dipper and Mabel Pines are in for an unexpected adventure when they spend the summer with their great Uncle in the mysterious town of Gravity Falls, Oregon.</p>',
    updated: 1654193277,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/396',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/483406',
      },
    },
  },
  {
    id: 539,
    url: 'https://www.tvmaze.com/shows/539/the-it-crowd',
    name: 'The IT Crowd',
    type: 'Scripted',
    language: 'English',
    genres: ['Comedy'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2006-02-03',
    ended: '2013-09-27',
    officialSite: 'http://www.channel4.com/programmes/the-it-crowd',
    schedule: {
      time: '22:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 97,
    network: {
      id: 45,
      name: 'Channel 4',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.channel4.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 8044,
      thetvdb: 79216,
      imdb: 'tt0487831',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/4/11405.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/4/11405.jpg',
    },
    summary:
      "<p>Emmy-award winning sitcom written by Graham Linehan, set in an IT department starring Chris O'Dowd, Richard Ayoade and Katherine Parkinson.</p>",
    updated: 1663518876,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/539',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/49440',
      },
    },
  },
  {
    id: 565,
    url: 'https://www.tvmaze.com/shows/565/deadwood',
    name: 'Deadwood',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Western'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2004-03-21',
    ended: '2019-05-31',
    officialSite: 'https://www.hbo.com/deadwood',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 88,
    network: {
      id: 8,
      name: 'HBO',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hbo.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 3267,
      thetvdb: 72023,
      imdb: 'tt0348914',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/4/11724.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/4/11724.jpg',
    },
    summary:
      '<p>The outlaw camp of <b>Deadwood</b> marches slowly towards civilization, facing its first elections. But the power struggles continue over everything in Deadwood—influence, money, and whores—as the founding camp members form strategic alliances to face down the threat of a powerful newcomer, seeking to remake Deadwood in his image.</p>',
    updated: 1652446880,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/565',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1607324',
      },
    },
  },
  {
    id: 768,
    url: 'https://www.tvmaze.com/shows/768/planet-earth',
    name: 'Planet Earth',
    type: 'Documentary',
    language: 'English',
    genres: ['Nature'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2006-03-05',
    ended: '2006-12-10',
    officialSite: 'http://www.bbc.co.uk/programmes/b006mywy',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 91,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 8077,
      thetvdb: 79257,
      imdb: 'tt0795176',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/6/15320.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/6/15320.jpg',
    },
    summary:
      '<p>David Attenborough celebrates the amazing variety of the natural world in this epic documentary series, filmed over four years across 64 different countries.</p>',
    updated: 1663958090,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/768',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/67872',
      },
    },
  },
  {
    id: 787,
    url: 'https://www.tvmaze.com/shows/787/the-twilight-zone',
    name: 'The Twilight Zone',
    type: 'Scripted',
    language: 'English',
    genres: ['Science-Fiction', 'Mystery', 'Supernatural'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 31,
    premiered: '1959-10-02',
    ended: '1964-06-19',
    officialSite: null,
    schedule: {
      time: '22:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 97,
    network: {
      id: 2,
      name: 'CBS',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.cbs.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 6258,
      thetvdb: 73587,
      imdb: 'tt0052520',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/398/996733.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/398/996733.jpg',
    },
    summary:
      '<p>A groundbreaking series by Rod Serling, this half-hour anthology featured tales of the strange, the macabre, and the unusual. Some were science fiction, some were supernatural, and some defied easy categorization.This five-season series is best known for its twist endings. Many of the stories were written by Serling himself, others were crafted by Richard Matheson, Charles Beaumont, Earl Hammer Jr. and Ray Bradbury.</p>',
    updated: 1666999025,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/787',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/69751',
      },
    },
  },
  {
    id: 1825,
    url: 'https://www.tvmaze.com/shows/1825/the-expanse',
    name: 'The Expanse',
    type: 'Scripted',
    language: 'English',
    genres: ['Science-Fiction', 'Thriller', 'Mystery'],
    status: 'Ended',
    runtime: null,
    averageRuntime: 55,
    premiered: '2015-12-14',
    ended: '2022-01-14',
    officialSite: 'https://www.amazon.com/dp/B07YL9WK1S/',
    schedule: {
      time: '',
      days: ['Friday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 99,
    network: null,
    webChannel: {
      id: 3,
      name: 'Prime Video',
      country: null,
      officialSite: 'https://www.primevideo.com',
    },
    dvdCountry: null,
    externals: {
      tvrage: 41967,
      thetvdb: 280619,
      imdb: 'tt3230854',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/380/951122.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/380/951122.jpg',
    },
    summary:
      "<p>A thriller set two hundred years in the future, <b>The Expanse</b> follows the case of a missing young woman who brings a hardened detective and a rogue ship's captain together in a race across the solar system to expose the greatest conspiracy in human history.</p>",
    updated: 1671456572,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/1825',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2190017',
      },
    },
  },
  {
    id: 10292,
    url: 'https://www.tvmaze.com/shows/10292/hajime-no-ippo',
    name: 'Hajime no Ippo',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Comedy', 'Action', 'Anime', 'Sports'],
    status: 'Ended',
    runtime: 25,
    averageRuntime: null,
    premiered: '2000-10-03',
    ended: '2014-03-29',
    officialSite: null,
    schedule: {
      time: '',
      days: ['Saturday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 84,
    network: {
      id: 137,
      name: 'NTV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 79685,
      imdb: 'tt0481256',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/34/87260.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/34/87260.jpg',
    },
    summary:
      "<p>Makunouchi Ippo is an ordinary high school student in Japan. Since he spends most of his time away from school helping his mother run the family business, he doesn't get to enjoy his younger years like most teenagers. Always a target for bullying at school (the family fishing business grants him a distinct odor), Ippo's life is one of hardship. One of these after-school bullying sessions turns Ippo's life around for the better, as he is saved by a boxer named Takamura. He decides to follow in Takamura's footsteps and train to become a boxer, giving his life direction and purpose. Ippo's path to perfecting his pugilistic prowess is just beginning...</p>",
    updated: 1640819156,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/10292',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/535313',
      },
    },
  },
  {
    id: 22036,
    url: 'https://www.tvmaze.com/shows/22036/planet-earth-ii',
    name: 'Planet Earth II',
    type: 'Documentary',
    language: 'English',
    genres: ['Nature'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2016-11-06',
    ended: '2016-12-11',
    officialSite: 'http://www.bbc.co.uk/programmes/p02544td',
    schedule: {
      time: '20:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 95,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 318408,
      imdb: 'tt5491994',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/87/219457.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/87/219457.jpg',
    },
    summary:
      '<p>David Attenborough presents a documentary series exploring how animals meet the challenges of surviving in the most iconic habitats on earth.</p>',
    updated: 1663958021,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/22036',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/976088',
      },
    },
  },
  {
    id: 25504,
    url: 'https://www.tvmaze.com/shows/25504/blue-planet-ii',
    name: 'Blue Planet II',
    type: 'Documentary',
    language: 'English',
    genres: ['Nature'],
    status: 'Ended',
    runtime: null,
    averageRuntime: 58,
    premiered: '2017-10-29',
    ended: '2017-12-10',
    officialSite: 'https://www.bbcearth.com/shows/blue-planet-ii',
    schedule: {
      time: '20:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.8,
    },
    weight: 86,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 330942,
      imdb: 'tt6769208',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/133/332926.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/133/332926.jpg',
    },
    summary:
      "<p>Wildlife documentary series, presented and narrated by David Attenborough, exploring the planet's oceans.</p>",
    updated: 1663957494,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/25504',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1341298',
      },
    },
  },
  {
    id: 158,
    url: 'https://www.tvmaze.com/shows/158/fringe',
    name: 'Fringe',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Action', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 61,
    premiered: '2008-09-09',
    ended: '2013-01-18',
    officialSite: null,
    schedule: {
      time: '21:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 92,
    network: {
      id: 4,
      name: 'FOX',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.fox.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 18388,
      thetvdb: 82066,
      imdb: 'tt1119644',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/2245.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/0/2245.jpg',
    },
    summary:
      "<p>When an international flight lands at Boston's Logan Airport and the passengers and crew have all died grisly deaths, FBI Special Agent Olivia Dunham is called in to investigate. After her partner is nearly killed during the investigation, a desperate Olivia searches frantically for someone to help, leading her to Dr. Walter Bishop, our generation's Einstein. There's only one catch: he's been institutionalized for the last twenty years, and the only way to question him requires pulling his estranged son Peter in to help. When Olivia's investigation leads her to a manipulative corporate executive, she and her team will discover that what happened on Flight 627 is only a small piece of a larger, more shocking truth and will explore the blurring line between the possible and the impossible.</p>",
    updated: 1649146533,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/158',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/11492',
      },
    },
  },
  {
    id: 166,
    url: 'https://www.tvmaze.com/shows/166/battlestar-galactica',
    name: 'Battlestar Galactica',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'War'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 61,
    premiered: '2003-12-08',
    ended: '2010-01-10',
    officialSite: 'http://www.syfy.com/battlestargalactica',
    schedule: {
      time: '22:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 96,
    network: {
      id: 16,
      name: 'Syfy',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 2730,
      thetvdb: 73545,
      imdb: 'tt0407362',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/0/2313.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/0/2313.jpg',
    },
    summary:
      "<p>The world ended with no warning, and all that was left… was hope.</p><p>A truce between the humans of the Twelve Colonies and the Cylons—intelligent robots designed by humankind—lasts for 40 tense and silent years. <b>Battlestar Galactica</b> picks up just as the Cylons commit mass genocide against humanity. Only the Battlestar Galactica (an old warship about to be decommissioned and turned into a museum) and those souls fortunate enough to be aboard other starships were able to survive the attack. In the aftermath, the Galactica's commanding officer, William Adama, finds himself responsible for safeguarding the last remnants of the human race—fewer than 50,000 desperate survivors. Meanwhile, the annihilation of the Colonial government results in the succession of the Secretary of Education, Laura Roslin, to the presidency. Driven by prophetic visions and political necessity, the Galactica travels through uncharted space in hopes of finding the mythical, lost 13th colony—Earth.</p>",
    updated: 1641924420,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/166',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/11888',
      },
    },
  },
  {
    id: 305,
    url: 'https://www.tvmaze.com/shows/305/black-mirror',
    name: 'Black Mirror',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Science-Fiction', 'Thriller'],
    status: 'Running',
    runtime: null,
    averageRuntime: 63,
    premiered: '2011-12-04',
    ended: null,
    officialSite: 'https://www.netflix.com/title/70264888',
    schedule: {
      time: '',
      days: [],
    },
    rating: {
      average: 8.7,
    },
    weight: 99,
    network: null,
    webChannel: {
      id: 1,
      name: 'Netflix',
      country: null,
      officialSite: 'https://www.netflix.com/',
    },
    dvdCountry: null,
    externals: {
      tvrage: 30348,
      thetvdb: 253463,
      imdb: 'tt2085059',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/240/601964.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/240/601964.jpg',
    },
    summary:
      "<p>Over the last ten years, technology has transformed almost every aspect of our lives before we've had time to stop and question it. In every home; on every desk; in every palm - a plasma screen; a monitor; a smartphone--a black mirror of our 21st Century existence. <b>Black Mirror</b> is a contemporary British re-working of <i>The Twilight Zone</i> with stories that tap into the collective unease about our modern world.</p>",
    updated: 1671130565,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/305',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1659382',
      },
    },
  },
  {
    id: 353,
    url: 'https://www.tvmaze.com/shows/353/line-of-duty',
    name: 'Line of Duty',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime', 'Thriller'],
    status: 'To Be Determined',
    runtime: 60,
    averageRuntime: 62,
    premiered: '2012-06-26',
    ended: null,
    officialSite: 'http://www.bbc.co.uk/programmes/p00yzlr0',
    schedule: {
      time: '21:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 99,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 31935,
      thetvdb: 260092,
      imdb: 'tt2303687',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/199/499692.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/199/499692.jpg',
    },
    summary:
      '<p>A drama about the investigations of AC-12, a controversial Police Anti-Corruption Unit.</p>',
    updated: 1659538201,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/353',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2073852',
      },
    },
  },
  {
    id: 491,
    url: 'https://www.tvmaze.com/shows/491/star-trek-the-next-generation',
    name: 'Star Trek: The Next Generation',
    type: 'Scripted',
    language: 'English',
    genres: ['Action', 'Adventure', 'Science-Fiction'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '1987-09-28',
    ended: '1994-05-23',
    officialSite: null,
    schedule: {
      time: '',
      days: ['Monday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 97,
    network: {
      id: 72,
      name: 'Syndication',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 5337,
      thetvdb: 71470,
      imdb: 'tt0092455',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/292/730798.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/292/730798.jpg',
    },
    summary:
      "<p><b>Star Trek: The Next Generation</b> (TNG) focuses on the 24th century adventures of Captain Jean-Luc Picard aboard the U.S.S. Enterprise (NCC-1701-D). This incarnation of the famous starship is much larger than the one captained by James T. Kirk a century earlier, and, accordingly, it carries a larger crew complement: 1,012 men, women…and, surprisingly, children. This era's Starfleet Command believes that men and women are more likely to sign up for long-term exploratory missions if they think of their ship as home. Thus, Picard's crew enjoys many of the comforts they'd have otherwise left behind, including a wide variety of recreational opportunities, \"replicated\" food dishes to suit every palate, and quarters large enough to share with spouses and offspring. There are schools for the children and a bar (stocked with synthetic alcohol, or synthehol) where the adults can unwind. However, the ongoing mission—no longer limited to a mere five years—remains virtually the same as it was during Kirk's time: to seek out new life and new civilizations, and to boldly go where no one has gone before.</p>",
    updated: 1658176442,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/491',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/44633',
      },
    },
  },
  {
    id: 523,
    url: 'https://www.tvmaze.com/shows/523/the-west-wing',
    name: 'The West Wing',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '1999-09-22',
    ended: '2006-05-14',
    officialSite: null,
    schedule: {
      time: '20:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 98,
    network: {
      id: 1,
      name: 'NBC',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.nbc.com/',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 6289,
      thetvdb: 72521,
      imdb: 'tt0200276',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/4/11284.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/4/11284.jpg',
    },
    summary:
      "<p>The entire White House staff bristles with activity when it's learned that the President injured himself during a bicycle accident, and his absence becomes a factor as chief of staff Leo McGarry must juggle a host of impending crises, including a mass boatlift of Cuban refugees approaching the Florida coast and the reaction of conservative Christians to a controversial televised comment by deputy chief of staff Josh Lyman.</p>",
    updated: 1670841880,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/523',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/47435',
      },
    },
  },
  {
    id: 538,
    url: 'https://www.tvmaze.com/shows/538/futurama',
    name: 'Futurama',
    type: 'Animation',
    language: 'English',
    genres: ['Comedy', 'Adventure', 'Science-Fiction'],
    status: 'Running',
    runtime: 30,
    averageRuntime: 30,
    premiered: '1999-03-28',
    ended: null,
    officialSite: 'http://www.cc.com/shows/futurama',
    schedule: {
      time: '22:00',
      days: ['Wednesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 98,
    network: null,
    webChannel: {
      id: 2,
      name: 'Hulu',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: 'https://www.hulu.com/',
    },
    dvdCountry: null,
    externals: {
      tvrage: 3628,
      thetvdb: 73871,
      imdb: 'tt0149460',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/4/11403.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/4/11403.jpg',
    },
    summary:
      '<p><b>Futurama</b> follows pizza guy Philip J. Fry, who reawakens in 31st century New New York after a cryonics lab accident. Now part of the Planet Express delivery crew, Fry travels to the farthest reaches of the universe with his robot buddy Bender and cyclopsian love interest Leela, discovering freaky mutants, intergalactic conspiracies and other strange stuff.</p>',
    updated: 1669132640,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/538',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/49411',
      },
    },
  },
  {
    id: 577,
    url: 'https://www.tvmaze.com/shows/577/fawlty-towers',
    name: 'Fawlty Towers',
    type: 'Scripted',
    language: 'English',
    genres: ['Comedy'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '1975-09-19',
    ended: '1979-10-25',
    officialSite: 'http://www.bbc.co.uk/programmes/b006xxvg',
    schedule: {
      time: '20:00',
      days: ['Monday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 84,
    network: {
      id: 37,
      name: 'BBC Two',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbctwo',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 3532,
      thetvdb: 75932,
      imdb: 'tt0072500',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/4/11842.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/4/11842.jpg',
    },
    summary:
      '<p><b>Fawlty Towers</b> is set in a fictional hotel in the seaside town of Torquay. The plots centre on tense, rude and put-upon owner Basil Fawlty, his bossy wife Sybil, comparatively normal chambermaid Polly, who is often the peacemaker and voice of reason, and hapless Spanish waiter Manuel, showing their attempts to run the hotel amidst farcical situations and an array of demanding and eccentric guests.</p>',
    updated: 1668664068,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/577',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/54655',
      },
    },
  },
  {
    id: 663,
    url: 'https://www.tvmaze.com/shows/663/the-shield',
    name: 'The Shield',
    type: 'Scripted',
    language: 'English',
    genres: ['Drama', 'Crime'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 61,
    premiered: '2002-03-12',
    ended: '2008-11-25',
    officialSite: null,
    schedule: {
      time: '22:00',
      days: ['Tuesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 94,
    network: {
      id: 13,
      name: 'FX',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 6185,
      thetvdb: 78261,
      imdb: 'tt0286486',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/55/138892.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/55/138892.jpg',
    },
    summary:
      "<p>Detective Vic Mackey is the leader of an elite Strike Team unit, a group of cops effective at eliminating crime but also operating under Vic's own set of rules. But his rules sometimes cross the fine line between legal and illegal. Now the precinct has a new captain who doesn't like Vic's tactics and wants to bust him off the force - even as the captain finds himself going to Vic for help whenever the going gets rough.</p>",
    updated: 1662994450,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/663',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/58458',
      },
    },
  },
  {
    id: 1536,
    url: 'https://www.tvmaze.com/shows/1536/hunter-x-hunter',
    name: 'Hunter x Hunter',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Action', 'Adventure', 'Anime', 'Fantasy'],
    status: 'Ended',
    runtime: 25,
    averageRuntime: 25,
    premiered: '2011-10-02',
    ended: '2014-09-24',
    officialSite:
      'https://www.ntv.co.jp/english/pc/2011/08/hunter-x-hunter.html',
    schedule: {
      time: '01:30',
      days: ['Wednesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 82,
    network: {
      id: 137,
      name: 'NTV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 29693,
      thetvdb: 252322,
      imdb: 'tt2098220',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/223/559165.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/223/559165.jpg',
    },
    summary:
      "<p>Remake of the 1999 TV series of Hunter x Hunter based on the manga by Togashi Yoshihiro. A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him. After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapica, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.</p>",
    updated: 1666961582,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/1536',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/139656',
      },
    },
  },
  {
    id: 1964,
    url: 'https://www.tvmaze.com/shows/1964/kiseijuu',
    name: 'Kiseijuu',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Action', 'Anime', 'Horror'],
    status: 'Ended',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2014-10-09',
    ended: '2015-03-26',
    officialSite: null,
    schedule: {
      time: '',
      days: ['Thursday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 48,
    network: {
      id: 137,
      name: 'NTV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 45260,
      thetvdb: 279831,
      imdb: 'tt3358020',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/11/27917.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/11/27917.jpg',
    },
    summary:
      "<p>One day, high school boy Shinichi wakes up to find that his hand has been possesses by a talking alien parasite Although he and his parasite are able to form a reluctant symbiotic relationship of sorts, the other parasites on Earth have taken over their hosts' bodies completely. Moreover, there are brutal murders happening all across the country. And while the police are baffled as they look for a killer, Shinichi is the only one who knows the truth: It's not a serial killer. It's the parasites feeding on human flesh.</p>",
    updated: 1657546971,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/1964',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/160579',
      },
    },
  },
  {
    id: 2051,
    url: 'https://www.tvmaze.com/shows/2051/steinsgate',
    name: 'Steins;Gate',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Drama', 'Anime', 'Fantasy', 'Science-Fiction'],
    status: 'Ended',
    runtime: 25,
    averageRuntime: 25,
    premiered: '2011-04-06',
    ended: '2011-09-14',
    officialSite: 'http://www.steinsgate.tv/index.html',
    schedule: {
      time: '02:05',
      days: ['Wednesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 87,
    network: {
      id: 163,
      name: 'SUN-TV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 28009,
      thetvdb: 244061,
      imdb: 'tt1910272',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/373/933178.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/373/933178.jpg',
    },
    summary:
      "<p>The microwave is a time machine. Okarin proved it. The self-anointed mad scientist nuked bananas into some gelatinous version of the future. Or maybe it was the past. Doesn't matter. No one thought he could do it, but he did it anyway. He sent text messages through time to people he knew. To his friends. Some of them female. Pretty. He should have been more careful. He should have stopped. Tampering with the time-space continuum attracts unwelcome attention. Clandestine organizations of nefarious origins take notice. SERN. Always watching. Okarin knows; he can feel their eyes. That s why he started the top secret Future Gadget Lab. To stop them. You should join. We get to wear lab coats, and it's dangerous. Danger is exciting because it's deadly. The microwave is a time machine. Steins;Gate is a surreal viewing experience that s an absolute must watch for all fans of sci-fi.</p>",
    updated: 1667319098,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/2051',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/163383',
      },
    },
  },
  {
    id: 2481,
    url: 'https://www.tvmaze.com/shows/2481/how-the-universe-works',
    name: 'How the Universe Works',
    type: 'Documentary',
    language: 'English',
    genres: [],
    status: 'Running',
    runtime: 60,
    averageRuntime: 62,
    premiered: '2010-04-25',
    ended: null,
    officialSite:
      'http://www.sciencechannel.com/tv-shows/how-the-universe-works/',
    schedule: {
      time: '22:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 95,
    network: {
      id: 77,
      name: 'Science',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 25537,
      thetvdb: 159651,
      imdb: 'tt1832668',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/223/557933.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/223/557933.jpg',
    },
    summary:
      '<p><b>How the Universe Works </b>is the greatest story ever told, the creation of everything us. The programme investigates how the Universe came into existence out of nothing, and how it grew from a miniscule point, smaller than an atomic particle, to the vast cosmos we see today.</p>',
    updated: 1661807864,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/2481',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2307339',
      },
    },
  },
  {
    id: 4910,
    url: 'https://www.tvmaze.com/shows/4910/aerial-america',
    name: 'Aerial America',
    type: 'Documentary',
    language: 'English',
    genres: ['Nature', 'Travel', 'History'],
    status: 'Ended',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2010-07-10',
    ended: '2021-12-20',
    officialSite: 'https://www.smithsonianchannel.com/shows/aerial-america',
    schedule: {
      time: '20:00',
      days: ['Sunday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 71,
    network: {
      id: 86,
      name: 'Smithsonian Channel',
      country: {
        name: 'United States',
        code: 'US',
        timezone: 'America/New_York',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 36687,
      thetvdb: 248718,
      imdb: 'tt2735544',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/103/257588.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/103/257588.jpg',
    },
    summary:
      "<p>Take off on a thrilling flight across America. This epic series offers rare glimpses of our nation's most treasured landmarks, all seen from breathtaking heights. From busy cityscapes to quiet landscapes, we capture the history and the pageantry of our amazing country, which is as diverse as the people who occupy it.</p>",
    updated: 1670222502,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/4910',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2240782',
      },
    },
  },
  {
    id: 8244,
    url: 'https://www.tvmaze.com/shows/8244/monster',
    name: 'Monster',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Drama', 'Anime', 'Crime', 'Horror'],
    status: 'Ended',
    runtime: 25,
    averageRuntime: 25,
    premiered: '2004-04-06',
    ended: '2005-09-27',
    officialSite: null,
    schedule: {
      time: '00:50',
      days: ['Tuesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 89,
    network: {
      id: 137,
      name: 'NTV',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 2136,
      thetvdb: 74599,
      imdb: 'tt0434706',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/29/74582.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/29/74582.jpg',
    },
    summary:
      '<p>Kenzou Tenma, a Japanese brain surgeon in Germany, had it all: incredible skill at his work, a rich and beautiful fiancee, and a promising career at his hospital. However, after becoming disenchanted by hospital politics, he chose to save the life of a young boy who got shot in the head over the life of the mayor. As a result he lost the support of the hospital director, as well as his position in the hospital and his fiance. A short time later, the hospital director and the doctors that replaced him were murdered, and once again he was catapulted back onto the top. But as the chief suspect of the murders, Tenma did not get a easy life. As a matter of fact, it seems that the boy he saved was much more than he had appeared to be... Now to clear his name and to correct his past mistake, Tenma must get to the bottom of these and other murders, and investigate the truth of the Monster who is.</p>',
    updated: 1666820474,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/8244',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/455928',
      },
    },
  },
  {
    id: 7103,
    url: 'https://www.tvmaze.com/shows/7103/the-blue-planet',
    name: 'The Blue Planet',
    type: 'Documentary',
    language: 'English',
    genres: ['Nature'],
    status: 'Ended',
    runtime: null,
    averageRuntime: 58,
    premiered: '2001-09-12',
    ended: '2001-10-31',
    officialSite: 'https://www.bbcearth.com/shows/blue-planet',
    schedule: {
      time: '21:00',
      days: ['Wednesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 87,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 2083,
      thetvdb: 74372,
      imdb: 'tt0296310',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/26/66452.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/26/66452.jpg',
    },
    summary:
      "<p>The BBC spent five years and $10 million to produce this landmark exploration of the ocean, a world we know less about than the moon. We go further out and deeper down to show you things that have never been seen before. <b>The Blue Planet</b> reveals the sea and its communities at their most fearsome and alluring. Until now, we've only touched the surface...</p>",
    updated: 1663957570,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/7103',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/408027',
      },
    },
  },
  {
    id: 40919,
    url: 'https://www.tvmaze.com/shows/40919/frozen-planet-ii',
    name: 'Frozen Planet II',
    type: 'Documentary',
    language: 'English',
    genres: ['Nature'],
    status: 'Running',
    runtime: 60,
    averageRuntime: 60,
    premiered: '2022-09-11',
    ended: null,
    officialSite: 'https://www.bbc.co.uk/programmes/p0cw0nb8',
    schedule: {
      time: '',
      days: ['Sunday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 96,
    network: {
      id: 12,
      name: 'BBC One',
      country: {
        name: 'United Kingdom',
        code: 'GB',
        timezone: 'Europe/London',
      },
      officialSite: 'https://www.bbc.co.uk/bbcone',
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 417395,
      imdb: 'tt9805678',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/183/458753.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/183/458753.jpg',
    },
    summary:
      "<p><b>Frozen Planet II</b> will take audiences back to the wildernesses of the Arctic and Antarctica. Ten years on from the original Frozen Planet, this series tells the complete story of the entire frozen quarter of our planet that's locked in ice and blanketed in snow.</p>",
    updated: 1665086915,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/40919',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2410753',
      },
    },
  },
  {
    id: 42155,
    url: 'https://www.tvmaze.com/shows/42155/vinland-saga',
    name: 'Vinland Saga',
    type: 'Animation',
    language: 'Japanese',
    genres: ['Action', 'Adventure', 'Anime'],
    status: 'Running',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2019-07-07',
    ended: null,
    officialSite: 'https://vinlandsaga.jp/',
    schedule: {
      time: '00:10',
      days: ['Tuesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 95,
    network: {
      id: 281,
      name: 'NHK',
      country: {
        name: 'Japan',
        code: 'JP',
        timezone: 'Asia/Tokyo',
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 359274,
      imdb: 'tt10233448',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/398/995697.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/398/995697.jpg',
    },
    summary:
      "<p>For a thousand years, the Vikings have made quite a name and reputation for themselves as the strongest families with a thirst for violence. Thorfinn, the son of one of the Vikings' greatest warriors, spends his boyhood in a battlefield enhancing his skills in his adventure to redeem his most-desired revenge after his father was murdered.</p>",
    updated: 1672830117,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/42155',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/1765343',
      },
      nextepisode: {
        href: 'https://api.tvmaze.com/episodes/2420190',
      },
    },
  },
  {
    id: 55050,
    url: 'https://www.tvmaze.com/shows/55050/link-click',
    name: 'LINK CLICK',
    type: 'Animation',
    language: 'Chinese',
    genres: ['Anime', 'Fantasy'],
    status: 'Running',
    runtime: 20,
    averageRuntime: 21,
    premiered: '2021-04-30',
    ended: null,
    officialSite: 'https://www.bilibili.com/bangumi/media/md28230742/',
    schedule: {
      time: '11:00',
      days: ['Friday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 86,
    network: null,
    webChannel: {
      id: 51,
      name: 'Bilibili',
      country: {
        name: 'China',
        code: 'CN',
        timezone: 'Asia/Shanghai',
      },
      officialSite: null,
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 402033,
      imdb: null,
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/311/779580.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/311/779580.jpg',
    },
    summary:
      '<p>In a modern metropolis there is a small store called "Time Photo Studio." Although only a few customers come to visit, it\'s actually run by Cheng Xiaoshi and Lu Guang, two men with special powers. They cooperate and use their super powers to enter the photos in order to fulfil the client\'s request. However, things always get out of their control...</p>',
    updated: 1661729472,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/55050',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2127832',
      },
    },
  },
  {
    id: 56655,
    url: 'https://www.tvmaze.com/shows/56655/going-seventeen',
    name: 'Going Seventeen',
    type: 'Variety',
    language: 'Korean',
    genres: [],
    status: 'Running',
    runtime: 30,
    averageRuntime: 30,
    premiered: '2017-06-12',
    ended: null,
    officialSite: null,
    schedule: {
      time: '08:00',
      days: ['Wednesday'],
    },
    rating: {
      average: 8.7,
    },
    weight: 76,
    network: null,
    webChannel: {
      id: 122,
      name: 'V LIVE',
      country: {
        name: 'Korea, Republic of',
        code: 'KR',
        timezone: 'Asia/Seoul',
      },
      officialSite: 'https://www.vlive.tv/home',
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 330462,
      imdb: 'tt21306384',
    },
    image: {
      medium:
        'https://static.tvmaze.com/uploads/images/medium_portrait/394/985825.jpg',
      original:
        'https://static.tvmaze.com/uploads/images/original_untouched/394/985825.jpg',
    },
    summary:
      '<p>Initially a series of behind-the-scenes vlogs, <b>Going Seventeen</b> has taken a more structured route since mid-2019 and is now a reality-variety show with themed episodes. Every week, the members of Seventeen play games or participate in a variety of activities for everyone\'s delight and entertainment. Season 2021\'s keyword is "Watch What You Say", meaning that anything the members say can and will be turned into content...</p>',
    updated: 1672238175,
    _links: {
      self: {
        href: 'https://api.tvmaze.com/shows/56655',
      },
      previousepisode: {
        href: 'https://api.tvmaze.com/episodes/2403452',
      },
    },
  },
];

const showGenres = [
  '',
  'Action',
  'Adventure',
  'Anime',
  'Children',
  'Comedy',
  'Crime',
  'DIY',
  'Drama',
  'Espionage',
  'Family',
  'Fantasy',
  'Food',
  'History',
  'Horror',
  'Legal',
  'Medical',
  'Music',
  'Mystery',
  'Nature',
  'Romance',
  'Science-Fiction',
  'Sports',
  'Supernatural',
  'Thriller',
  'Travel',
  'War',
  'Western',
];

const localdb = 'http://localhost:3000';
const db = 'https://project-1-server.onrender.com';

const resultsSection = document.getElementById('results-section');
const menuContainer = document.getElementById('filter-container');
const searchTypes = document.getElementById('search-types');
const searchOptions = document.querySelectorAll('option.search-option');

const allShows = [];

// let fiftiesShows = [];
let sixtiesShows = [];
let seventiesShows = [];
let eightiesShows = [];
let ninetiesShows = [];
let twoThousandsShows = [];
let twoThousandTensShows = [];

let watchList = [];
