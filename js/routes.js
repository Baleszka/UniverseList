import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Roulette from './pages/Roulette.js';
import ill from './pages/ill.js'
import IllLeaderboard from './pages/illleaderboard.js';

export default [
    { path: '/', component: List },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/roulette', component: Roulette },
    { path: '/ill', component: ill },
    { path: '/illleaderboard', component: IllLeaderboard },
];
