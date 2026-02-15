function Header({ onReset }) {
    return (
        <div className="header">
            <h1 className="title">Daily Habit Tracker</h1>
            <button className="reset-btn" onClick={onReset}>
                <span className="reset-icon">↻</span>
                Reset All
            </button>
        </div>
    );
}

export default Header;
