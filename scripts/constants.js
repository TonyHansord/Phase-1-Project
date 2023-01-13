const showSearch = `https://api.tvmaze.com/search/shows`;
const scheduleSearch = `https://api.tvmaze.com/schedule?`;
const showCountry = [
  { countryCode: 'US', countryName: 'USA' },
  { countryCode: 'AU', countryName: 'Australia' },
  { countryCode: 'GB', countryName: 'UK' },
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

let fiftiesShows = [];
let sixtiesShows = [];
let seventiesShows = [];
let eightiesShows = [];
let ninetiesShows = [];
let twoThousandsShows = [];
let twoThousandTensShows = [];

let watchList = [];
