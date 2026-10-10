// 1. Base Class: Monster
export class Monster {
  constructor(public name: string, public health: number) {}
  attack(): void {
    console.log(`${this.name} performs a basic attack!`);
  }
}

class FireMonster extends Monster {
  override attack(): void {
    console.log(`🔥 ${this.name} uses Fire Breath! (Burn Effect)`);
  }
}
class WaterMonster extends Monster {
  override attack(): void {
    console.log(`💧 ${this.name} uses Water Splash! (Slow Effect)`);
  }
}
class GrassMonster extends Monster {
  override attack(): void {
    console.log(`🍃 ${this.name} uses Vine Whip! (Heal Effect)`);
  }
}
function startBattle(monsters: Monster[]): void {
  console.log("--- ⚔️ Battle Start! ⚔️ ---");
  monsters.forEach((monster) => monster.attack());
}
const party: Monster[] = [
  new FireMonster("Charmander", 100),
  new WaterMonster("Squirtle", 120),
  new GrassMonster("Bulbasaur", 110)
];
startBattle(party);