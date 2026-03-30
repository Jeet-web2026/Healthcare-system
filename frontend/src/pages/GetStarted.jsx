import Baselayouts from "../components/layouts/Baselayouts";
import Card from "../components/partials/Card";

const GetStarted = () => {
  const doctorsData = [
    {
      id: 1,
      name: "Dr. Amit Sharma",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      gender: "Male",
      age: 45,

      specialization: "Cardiologist",
      qualifications: ["MBBS", "MD (Cardiology)", "DM (Cardiology)"],
      experience: 12,

      hospital: {
        name: "Apollo Hospital",
        address: "Delhi, India",
      },

      consultation: {
        fees: 800,
        currency: "INR",
        mode: ["Online", "Offline"],
        availability: ["Mon", "Tue", "Wed", "Fri"],
        timings: "10:00 AM - 4:00 PM",
      },

      rating: 4.8,
      reviewsCount: 124,

      languages: ["English", "Hindi"],

      about:
        "Expert in heart diseases, angioplasty, and preventive cardiology.",

      services: [
        "ECG",
        "Angiography",
        "Heart Checkup",
        "Blood Pressure Management",
      ],

      contact: {
        phone: "+91-9876543210",
        email: "amit.sharma@example.com",
      },

      location: {
        lat: 28.6139,
        lng: 77.209,
      },

      isAvailable: true,
      isVerified: true,
      createdAt: "2025-01-10T10:00:00Z",
    },

    {
      id: 2,
      name: "Dr. Priya Verma",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      gender: "Female",
      age: 38,

      specialization: "Dermatologist",
      qualifications: ["MBBS", "MD (Dermatology)"],
      experience: 9,

      hospital: {
        name: "Fortis Clinic",
        address: "Mumbai, India",
      },

      consultation: {
        fees: 600,
        currency: "INR",
        mode: ["Online"],
        availability: ["Mon", "Thu", "Sat"],
        timings: "11:00 AM - 3:00 PM",
      },

      rating: 4.6,
      reviewsCount: 89,

      languages: ["English", "Hindi", "Marathi"],

      about: "Skin specialist for acne, pigmentation, and cosmetic treatments.",

      services: [
        "Skin Treatment",
        "Laser Therapy",
        "Acne Treatment",
        "Hair Fall Treatment",
      ],

      contact: {
        phone: "+91-9123456780",
        email: "priya.verma@example.com",
      },

      location: {
        lat: 19.076,
        lng: 72.8777,
      },

      isAvailable: true,
      isVerified: true,
      createdAt: "2025-02-15T08:30:00Z",
    },
  ];
  return (
    <Baselayouts>
      <main>
        <section className="py-5">
          <Card cardContent={doctorsData} />
        </section>
      </main>
    </Baselayouts>
  );
};

export default GetStarted;
