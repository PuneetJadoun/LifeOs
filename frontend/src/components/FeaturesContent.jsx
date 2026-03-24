const FeaturesContent = () => {
    const features = [
        {
            icon: "📧",
            title: "Smart inbox",
            description: "Unread emails, summaries, and context — all surfaced automatically."
        },
        {
            icon: "✅",
            title: "Task manager",
            description: "Organise tasks by workspace with deadlines and priorities."
        },
        {
            icon: "🤖",
            title: "AI assistant",
            description: "Ask anything. Summarise emails, find files, recall tasks."
        },
        {
            icon: "📁",
            title: "File hub",
            description: "Recent Drive files with semantic search across all content."
        },
        {
            icon: "📅",
            title: "Calendar",
            description: "Today's meetings, schedules, and reminders in one view."
        },
        {
            icon: "🔍",
            title: "Global search",
            description: "Search emails, tasks, files, and notes simultaneously."
        }
    ];

    return (
        <div className="features-grid">
            {features.map((feature, index) => (
                <div key={index} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesContent;