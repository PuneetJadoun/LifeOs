const StepCard = ({ step }) => {
  const { number, title, desc, tags } = step;

  return (
    <div className="card">
      {/* header of card*/}
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>

      {/* tags */}

      <div className="tags">
        {tags && tags.map((tag, i) => (
          <span key={i}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default StepCard;