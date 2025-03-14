const ExponentFive = (props) => {
  let count = props.count;
  let result = count * count * count * count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}⁵</p>
      <p className="exponent-result">
        {count} * {count} * {count} * {count} * {count} ={" "}
        <span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentFive;
