import { cardList } from "../data/cardList";
import { cardBackground } from "./backgrounds";
import { pokemonInfo } from "./pokemonInfo";

const spriteUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/lets-go-pikachu-lets-go-eevee/${id}.gif`;

export default function App() {
  return (
    <main className="grid">
      {cardList.map((card) => {
        const info = pokemonInfo.get(card.id);
        const bg = cardBackground(info?.background);
        return (
          <article key={card.id} className="card" style={{ background: bg }}>
            <header className="card-top">
              <span>{card.baseRank}</span>
              <span>x{card.cardCount}</span>
            </header>
            <h2 className="card-name">
              {card.name} <small>({card.originalName})</small>
            </h2>
            <img className="card-img" src={spriteUrl(card.id)} alt={card.name} loading="lazy" />
            <p className="card-points">
              <strong>Base: {card.basePoint}</strong>
              {card.extraPoints !== 0 && <strong>Extra: +{card.extraPoints}</strong>}
            </p>
            {card.originalText && <p className="card-text">{card.originalText}</p>}
            {card.originalPassive && <p className="card-text">{card.originalPassive}</p>}
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
