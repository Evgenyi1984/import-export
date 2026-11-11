import {
  Game,
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from './game';

const game = new Game();
game.start();

// Чтобы импортированные сущности не считались неиспользуемыми
export { GameSavingData, loadGame, saveGame };