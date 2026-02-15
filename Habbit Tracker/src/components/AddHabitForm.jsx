import { useState } from 'react';

function AddHabitForm({ onAdd }) {
    const [habitName, setHabitName] = useState('');
    const [habitIcon, setHabitIcon] = useState('✨');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (habitName.trim()) {
            onAdd(habitName.trim(), habitIcon);
            setHabitName('');
            setHabitIcon('✨');
        }
    };

    return (
        <form className="add-habit-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Add New Habit</h3>
            <div className="form-inputs">
                <input
                    type="text"
                    value={habitIcon}
                    onChange={(e) => setHabitIcon(e.target.value)}
                    className="icon-input"
                    maxLength="2"
                    placeholder="📝"
                />
                <input
                    type="text"
                    value={habitName}
                    onChange={(e) => setHabitName(e.target.value)}
                    className="name-input"
                    placeholder="Enter habit name..."
                />
                <button type="submit" className="add-btn">
                    <span>+</span>
                </button>
            </div>
        </form>
    );
}

export default AddHabitForm;
