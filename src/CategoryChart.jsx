import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0', '#82d982'];

function CategoryChart({ transactions }) {
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      const existing = acc.find(item => item.category === t.category);
      if (existing) {
        existing.amount += t.amount;
      } else {
        acc.push({ category: t.category, amount: t.amount });
      }
      return acc;
    }, [])
    .sort((a, b) => b.amount - a.amount)
    .map((item, index) => ({
      ...item,
      fill: COLORS[index % COLORS.length]
    }));

  if (expensesByCategory.length === 0) {
    return <p className="chart-empty">No expenses to display</p>;
  }

  return (
    <div className="chart-container">
      <h2>Spending by Category</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={expensesByCategory} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
          <Bar dataKey="amount" name="Amount">
            {expensesByCategory.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CategoryChart;
