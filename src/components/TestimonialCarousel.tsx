import { useState, useEffect, useCallback } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Attorney Todd Becraft is an exceptional and knowledgeable immigration attorney. He handled my case with such class and dignity — I won my case. I would highly recommend the Law Offices of Attny. Todd Becraft.",
    author: "Joseph M.",
    service: "via Yelp",
  },
  {
    quote: "I will always remember the professional legal services I received from the Law Office of Todd Becraft. All staff are caring and always work according to the instructions of their client. The services I received were far more than what I was charged.",
    author: "Tiwa Bob",
    service: "via Google",
  },
  {
    quote: "One hundred percent recommend as the best California immigration attorney, if not one of the best at the country level. His team together make perhaps the best team to handle cases of immigration in the country.",
    author: "Ariel Arauz",
    service: "via Google",
  },
  {
    quote: "He is a unique, incomparable and amazing lawyer I have never seen. He wiped tears in my eyes. I recommend to all people who have immigration problems, come talk to Mr. Todd Becraft — you will not be disappointed.",
    author: "Manu",
    service: "via Avvo",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <div className="relative">
      {/* Quote icon */}
      <div className="text-center mb-8">
        <svg className="w-12 h-12 mx-auto text-[#D4A853]/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
        </svg>
      </div>

      {/* Testimonial */}
      <div className="min-h-[200px] flex items-center justify-center">
        <div
          className={`text-center transition-opacity duration-500 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <blockquote className="text-xl md:text-2xl font-serif text-[#1B2A4A] leading-relaxed max-w-3xl mx-auto mb-8 italic">
            "{testimonials[current].quote}"
          </blockquote>
          <div className="gold-line-center mb-4" />
          <p className="text-[#D4A853] font-semibold tracking-wide">
            {testimonials[current].author}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            {testimonials[current].service}
          </p>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === current
                ? 'w-8 h-2 bg-[#D4A853]'
                : 'w-2 h-2 bg-[#1B2A4A]/20 hover:bg-[#1B2A4A]/40'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Source */}
      <p className="text-center text-gray-400 text-xs mt-6">
        From verified client reviews
      </p>
    </div>
  );
}
