import emoji from "./emoji.json";

const Line = ({ search, setSearch }) => {
  const displayHome = () => {
    return emoji.slice(0, 20).map((x, index) => {
      return (
        <div>
          <p key={index}>
            {x.symbol} {x.title}
          </p>
        </div>
      );
    });
  };

  const searchEngine = () => {
    return emoji.map((x, index) => {
      if (x.keywords.toLowerCase().includes(search.toLowerCase())) {
        return (
          <p key={index}>
            {x.symbol} {x.title}
          </p>
        );
      }
    });
  };
  return (
    <div>
      <p> {search.length > 0 ? searchEngine() : displayHome()}</p>
    </div>
  );
};
export default Line;