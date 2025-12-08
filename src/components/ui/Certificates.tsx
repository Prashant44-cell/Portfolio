import React from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

const certificates: Certificate[] = [
  {
    title: "Leveraging the Power of Social Intelligence in the Age of AI",
    issuer: "LinkedIn Learning",
    date: "May 20, 2025",
    link: "https://www.linkedin.com/learning/certificates/3c58c3ef90a8fce048ed843c7e9eba9a70ced6900927dbe10c49fb1b9f54"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera (Stanford University)",
    date: "April 2024",
    link: "https://coursera.org/verify/ML-specialization"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "December 2023",
    link: "https://aws.amazon.com/verification"
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Coding Ninjas",
    date: "August 2022",
    link: "https://certificate.codingninjas.com"
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="border p-4 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <span className="text-sm text-gray-500">{cert.date}</span>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-blue-600 hover:underline text-sm"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
