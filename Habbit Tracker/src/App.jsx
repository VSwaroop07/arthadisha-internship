import { useState } from 'react';
import Header from './components/Header';
import ProgressRing from './components/ProgressRing';
import HabitList from './components/HabitList';
import AddHabitForm from './components/AddHabitForm';
import './App.css';

function App() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Drink Water', icon: '💧', completed: false },
    { id: 2, name: 'Exercise', icon: '🏃', completed: false },
    { id: 3, name: 'Read', icon: '📚', completed: false },
    { id: 4, name: 'Meditate', icon: '🧘', completed: false },
    { id: 5, name: 'Sleep 8hrs', icon: '💤', completed: false },
    { id: 6, name: 'Eat Healthy', icon: '🥗', completed: false },
  ]);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ));
  };

  const addHabit = (name, icon) => {
    const newHabit = {
      id: Date.now(),
      name,
      icon,
      completed: false
    };
    setHabits([...habits, newHabit]);
  };

  const resetHabits = () => {
    setHabits(habits.map(habit => ({ ...habit, completed: false })));
  };

  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="app">
      <div className="container">
        <Header onReset={resetHabits} />
        <ProgressRing percentage={percentage} completed={completedCount} total={totalCount} />
        <HabitList habits={habits} onToggle={toggleHabit} />
        <AddHabitForm onAdd={addHabit} />
      </div>
    </div>
  );
}

export default App;
