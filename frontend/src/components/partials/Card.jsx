import { Link } from "react-router-dom";

const Card = ({ cardContent }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {cardContent.map((card, index) => (
        <div className="bg-white rounded p-5 mb-3" key={index}>
          <div className="p-4 border border-blue-100 rounded">
            <div className="flex flex-col gap-5 lg:flex-row">
              <div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="lg:h-45 h-60 lg:w-40 w-full rounded shadow lg:object-cover"
                />
              </div>
              <div>
                <h3 className="text-blue-900 text-xl font-bold mb-2">
                  {card.name}
                </h3>
                <p className="text-blue-800">{card.specialization}</p>
                <p className="mb-1 text-blue-800">
                  {card.experience} years of experience
                </p>
                <p className="mb-0.5 text-blue-800">
                  Rating: {card.rating} ({card.reviewsCount} reviews)
                </p>
                <p className="mb-1.5 text-blue-800">{card.about}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="gap-2 flex flex-row mt-3 w-full overflow-x-auto">
                {card.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center rounded bg-blue-400/10 px-2 py-1 text-sm text-blue-400 inset-ring inset-ring-blue-400/30 mb-1 lined whitespace-nowrap"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <Link
                  to={`/doctors/${card.id}`}
                  className="inline-block rounded bg-blue-400 px-4 py-2 text-white border border-blue-100 hover:bg-blue-500 transition text-center"
                >
                  <i className="ri-user-3-line me-2"></i>View Profile
                </Link>
                <Link
                  to={`/doctors/${card.id}/book`}
                  className="inline-block rounded bg-green-500 px-4 py-2 text-white border border-green-100 hover:bg-green-600 transition text-center"
                >
                  <i className="ri-sticky-note-add-line me-2"></i>Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
