function HabitItem({ habit, onToggle, index }) {
    return (
        <div className="habit-item" style={{ animationDelay: `${index * 0.1}s` }}>
            <label className="habit-label">
                <input
                    type="checkbox"
                    checked={habit.completed}
                    onChange={() => onToggle(habit.id)}
                    className="habit-checkbox"
                />
                <span className="custom-checkbox">
                    <svg className="checkmark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </span>
                <span className="habit-icon">{habit.icon}</span>
                <span className={`habit-name ${habit.completed ? 'completed' : ''}`}>
                    {habit.name}
                </span>
            </label>
        </div>
    );
}

export default HabitItem;
