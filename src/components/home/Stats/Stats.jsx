import { motion } from "framer-motion";
import "./Stats.css";

const stats = [
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "1000+",
    label: "Users Served",
  },
  {
    number: "2",
    label: "Products",
  },
  {
    number: "99.9%",
    label: "Reliability",
  },
];

const Stats = () => {
  return (
    <section className="stats-section">

      <div className="container">

        <div className="row">

          {stats.map((item, index) => (
            <div
              className="col-md-3 col-6"
              key={index}
            >
              <motion.div
                className="stat-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
              >
                <h2>{item.number}</h2>

                <p>{item.label}</p>
              </motion.div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Stats;