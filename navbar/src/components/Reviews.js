import React from "react";

const reviews = [
  {
    name: "John David",
    role: "Product Designer",
    rating: 5,
    text: "This platform is extremely easy to use and helped our team boost productivity!",
  },
  {
    name: "Sarah Wilson",
    role: "Frontend Developer",
    rating: 4,
    text: "Great UI, clean structure, and very responsive design. Loved working with it!",
  },
  {
    name: "Michael Chen",
    role: "Marketing Lead",
    rating: 5,
    text: "The best experience ever. Highly recommended for anyone launching a new website.",
  },
];

const starStyle = {
  color: "#f4c430",
  marginRight: "3px",
};

export default function Reviews() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What Our Users Say</h2>

      <div style={styles.grid}>
        {reviews.map((review, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.rating}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} style={starStyle}>★</span>
              ))}
            </div>

            <p style={styles.text}>"{review.text}"</p>

            <div style={styles.footer}>
              <strong style={styles.name}>{review.name}</strong>
              <span style={styles.role}>{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "60px 20px",
    background: "#f9f9f9",
    textAlign: "center",
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    fontWeight: "700",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  rating: {
    marginBottom: "10px",
  },
  text: {
    fontSize: "15px",
    marginBottom: "20px",
    color: "#555",
  },
  footer: {
    marginTop: "10px",
  },
  name: {
    fontSize: "16px",
    display: "block",
  },
  role: {
    fontSize: "13px",
    color: "#888",
  },
};
