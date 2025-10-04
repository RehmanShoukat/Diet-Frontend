import React from 'react'

const FeaturesCard = () => {
    const featureCard = [
        {
            id: 1,
            icon: "fa-solid fa-clipboard-list",
            title: "Personalized Nutrition",
            description: "How all this mistaken idea of It is a long established fact will be distracted by the readable of denoun established"
        },
        {
            id: 2,
            icon: "fa-solid fa-carrot",
            title: "Health Diet Programs",
            description: "How all this mistaken idea of It is a long established fact will be distracted by the readable of denoun established"
        },
        {
            id: 3,
            icon: "fa-solid fa-heart-pulse",
            title: "Weight Loss Program",
            description: "How all this mistaken idea of It is a long established fact will be distracted by the readable of denoun established"
        }
    ];

    return (
        <section className="shadow-xl rounded-xl py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-white mt-[-130px]">
            <div className="grid w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8" data-aos="fade-up">
                {featureCard.map((featured) => (
                    <div
                        key={featured.id}
                        className="text-center bg-white p-8  rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex justify-center text-green-500 text-5xl mb-5">
                            <i className={featured.icon}></i>
                        </div>
                        <h2 className="text-lg sm:text-lg  md:text-xl lg:text-2xl font-semibold  text-gray-800 mb-3">{featured.title}</h2>
                        <p className="text-md  sm:text-sm lg:text-md text-gray-600">{featured.description}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-center mt-10 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800">
                Challenges Are Just Opportunities In Disguise{" "}
                <span className="text-green-600 font-bold">Take The Challenge</span>
            </h2>
        </section>
    );
};

export default FeaturesCard;
