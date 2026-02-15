import HabitItem from './HabitItem';

function HabitList({ habits, onToggle }) {
    return (
        <div className="habit-list">
            {habits.map((habit, index) => (
                <HabitItem
                    key={habit.id}
                    habit={habit}
                    onToggle={onToggle}
                    index={index}
                />
            ))}
        </div>
    );
}

export default HabitList;
