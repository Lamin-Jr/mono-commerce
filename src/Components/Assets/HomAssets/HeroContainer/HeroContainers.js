const HeroContainer = props => {
  return (
    <div
      className={props.HeroType}
      style={{ backgroundImage: `${props.bgImage}` }}
    >
      <div className={`${props.type} ${props.ContentStyle}`}>
        <h2>{props.Title}</h2>
        <p>{props.content}</p>
        <button>{props.Button}</button>
      </div>
    </div>
  );
};
export default HeroContainer;
