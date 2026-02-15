function ProgressRing({ percentage, completed, total }) {
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="progress-section">
            <svg className="progress-ring" width="180" height="180">
                <circle
                    className="progress-ring-bg"
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="transparent"
                    stroke="#e0e7ff"
                    strokeWidth="12"
                />
                <circle
                    className="progress-ring-fill"
                    cx="90"
                    cy="90"
                    r={radius}
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    transform="rotate(-90 90 90)"
                />
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="progress-text">
                <div className="progress-percentage">{percentage}%</div>
                <div className="progress-count">{completed}/{total} habits</div>
            </div>
        </div>
    );
}

export default ProgressRing;
