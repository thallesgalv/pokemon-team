import { cardList } from "../data/cardList";
import { backgroundColors, fallbackColor } from "./backgrounds";
import { pokemonInfo } from "./pokemonInfo";

export default function App() {
  return (
    <main className="grid">
      {cardList.map((card) => {
        const info = pokemonInfo.get(card.id);
        const bg = (info && backgroundColors[info.background]) ?? fallbackColor;
        return (
          <article key={card.id} className="card" style={{ background: bg }}>
            <header className="card-top">
              <span>{card.baseRank}</span>
              <span>x{card.cardCount}</span>
            </header>
            <h2 className="card-name">
              {card.name} <small>({card.originalName})</small>
            </h2>
            <footer className="card-bottom">
              <span>Community: {card.communityRank.join(" / ")}</span>
              <span>Pessoal: {info?.personalTierlistRank ?? "-"}</span>
            </footer>
          </article>
        );
      })}
    </main>
  );
}
