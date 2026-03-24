const FeaturesMedia = () => {
  const features = [
    { value: 14, label: "unread emails" },
    { value: 3, label: "tasks due today" },
    { value: 2, label: "meetings today" },
    { value: "AI", label: "assistant ready" },
  ];

  return (
    <div className="features-media-box">
      {features.map((item, index) => (
        <div key={index} className="stat-item">
          <h4 className="stat-value">{item.value}</h4>
          <p className="stat-label">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesMedia;
