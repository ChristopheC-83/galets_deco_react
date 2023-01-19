
import Drop from "./Drop";

export default function Drops() {
  const dropList = [
    {
      id: 1,
      br: "20% 80% 50% 50% / 72% 84% 16% 28% ",
      color: "rgb(235, 15, 235)",
      lettre: "B",
      text1: "Bon",
      text2: "Bidouilleur",
    },
    {
      id: 2,
      br: "60% 40% 52% 48% / 28% 39% 61% 72% ",
      color: "rgb(15, 110, 235)",
      lettre: "A",
      text1: "À",
      text2: "Autodidacte",
    },
    {
      id: 3,
      br: "60% 40% 52% 48% / 68% 76% 24% 32% ",
      color: "rgb(158, 235, 15)",
      lettre: "R",
      text1: "Rien",
      text2: "Rigoureux",
    },
    {
      id: 4,
      br: "67% 33% 50% 50% / 29% 83% 17% 71% ",
      color: "rgb(4, 226, 197)",
      lettre: "P",
      text1: "Prêt",
      text2: "Passionné",
    },
    {
      id: 5,
      br: "18% 82% 32% 68% / 57% 62% 38% 43% ",
      color: "rgb(255, 251, 0)",
      lettre: "A",
      text1: "À",
      text2: "Autonome",
    },
    {
      id: 6,
      br: "46% 54% 32% 68% / 57% 47% 53% 43%  ",
      color: "rgb(250, 10, 10)",
      lettre: "T",
      text1: "Tout",
      text2: "Team Spirit",
    },
  ];
  console.log(dropList[0].br);

  return (
    <div className="container">
      <div className="content">
      {dropList.map((drop) => (
        <Drop
          radius={drop.br}
          key={drop.id}
          color={drop.color}
          lettre={drop.lettre}
          text1={drop.text1}
          text2={drop.text2}
        />
      ))}
      </div>
    </div>
  );
}
