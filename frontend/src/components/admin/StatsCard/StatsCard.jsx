import "./StatsCard.css";

const StatsCard = ({ title, value }) => {
  return (
    <div className="stats-card">
      <h6>{title}</h6>

      <h2>{value}</h2>
    </div>
  );
};

export default StatsCard;