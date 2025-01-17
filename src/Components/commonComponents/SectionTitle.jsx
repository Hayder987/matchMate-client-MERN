const SectionTitle = ({title, desc}) => {
    return (
        <div>
            <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center text-gray-800">{title}</h1>
            <p className="text-center lg:w-8/12 mx-auto text-gray-600 font-medium mb-10 md:text-xl">{desc}</p>
        </div>
    );
};

export default SectionTitle;