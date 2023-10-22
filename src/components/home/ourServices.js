const OurServices = () => {
  return (
    <section className="py-16 my-10">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="bg-gray-100">
          <div className="container mx-auto py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-5 md:px-0">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-2xl font-semibold text-gray-600 mb-4">
                Web Development
              </div>
              <p className="text-gray-600">
                We create stunning, responsive websites that are tailored to
                your business needs. Using the latest web technologies, we
                deliver cutting-edge solutions.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-2xl font-semibold text-gray-600 mb-4">
                Mobile App Development
              </div>
              <p className="text-gray-600">
                Our team specializes in building native and cross-platform
                mobile apps for iOS and Android. Your app, your way.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
              <div className="text-2xl font-semibold text-gray-600 mb-4">
                UI/UX Design
              </div>
              <p className="text-gray-600">
                We craft intuitive, user-centric designs that enhance user
                experiences and boost your brands appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
