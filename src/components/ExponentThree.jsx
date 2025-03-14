const ExponentThree = (props) => {
  let count = props.count;
  let result = count * count * count;
  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">{count}³</p>
      <p className="exponent-result">
        {count} * {count} * {count} =<span className="total">{result}</span>
      </p>
    </div>
  );
};

export default ExponentThree;
