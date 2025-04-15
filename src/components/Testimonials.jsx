import React from 'react';

const testimonialsData = [
    {
        img: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'John Doe',
        role: 'Web Developer',
        testimonial:
            'ImageGen made my workflow so much easier! The generated images are high quality and save me hours of design time.',
    },
    {
        img: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Jane Smith',
        role: 'UI/UX Designer',
        testimonial:
            'I love how intuitive and fast ImageGen is. Its now my go-to tool for quick image generation.',
    },
    {
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
        name: 'Alex Johnson',
        role: 'Content Creator',
        testimonial:
            'The variety of styles and customization options is fantastic. Highly recommended for anyone needing images!',
    },
];

const Testimonials = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                    What Our Users Say
                </h2>
                <p className="text-gray-600 text-base sm:text-lg">
                    Hear from some of our happy users who have improved their projects with ImageGen.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center md:items-stretch flex-wrap md:flex-nowrap">
                {testimonialsData.map((t, idx) => (
                    <div
                        key={idx}
                        className="bg-gradient-to-br from-indigo-400 to-pink-400 rounded-2xl p-6 sm:p-8 w-full max-w-[320px] shadow-lg text-white flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={t.img}
                            alt={t.name}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-4 sm:mb-6 border-4 border-white shadow-md object-cover"
                        />
                        <p className="italic mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                            "{t.testimonial}"
                        </p>
                        <p className="font-bold text-base sm:text-lg mb-0 tracking-wide">
                            {t.name}
                        </p>
                        <p className="text-white/85 text-xs sm:text-sm mt-1">
                            {t.role}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
