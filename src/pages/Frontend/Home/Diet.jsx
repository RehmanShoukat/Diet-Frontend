

import { Card, Col, Row, Typography } from "antd"
import { Link } from "react-router-dom"

const Diet = () => {
  const { Title, Paragraph } = Typography

  return (
    <section className="bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-26">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="w-1 h-6  bg-green-500"></div>
          <p className="text-3xl sm:text-lg md:text-lg lg:text-2xl   text-green-500 uppercase tracking-widest">WHAT WE OFFER</p>
        </div>
        <Title
          level={2}
          className="text-5xl sm:text-3xl md:text-4xl lg:!text-5xl text-gray-800 font-extrabold px-2 sm:px-4"
        >
          Our Diet & Nutrition Services
        </Title>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <Row gutter={[16, 24]} align="middle" className="w-full">
          <Col xs={24} sm={24} md={24} lg={8} xl={8} className="order-1 lg:order-1">
            <div className="flex flex-col gap-4 sm:gap-6">
              <Card bordered={false} className="!shadow-none">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-400 text-white text-lg sm:text-xl md:text-!2xl lg:text-3xl p-3 sm:p-4 flex items-center justify-center rounded-lg flex-shrink-0">
                    <i className="fa-brands fa-phoenix-framework"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Title level={5} className="!mb-1 sm:!mb-2 text-base sm:!text-2xl">
                      Exercise Daily
                    </Title>
                    <Paragraph className="!text-lg sm:!text-md lg:!text-lg text-gray-800 !mb-2 sm:!mb-3 leading-relaxed">
                      There are many variations of passages of Lorem available, but the majority have suffered
                    </Paragraph>
                    <Link to="/" className="relative inline-block !text-green-500 font-bold group text-md sm:text-md md:text-lg lg:text-xl xl:text-lg">
                      Read More
                      <span className="block h-[2px] !bg-green-500 w-0 group-hover:w-[70%] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card bordered={false} className="!shadow-none">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-green-400 text-white text-lg sm:text-xl md:text-!2xl lg:text-3xl p-3 sm:p-4 flex items-center justify-center rounded-lg flex-shrink-0">
                    <i className="fa-solid fa-face-smile-beam"></i>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Title level={5} className="!mb-1 sm:!mb-2 text-base sm:!text-2xl">
                      Individual Support
                    </Title>
                    <Paragraph className="!text-lg sm:!text-md lg:!text-lg text-gray-800 !mb-2 sm:!mb-3 leading-relaxed">
                      There are many variations of passages of Lorem available, but the majority have suffered
                    </Paragraph>
                    <Link to="/" className="relative inline-block !text-green-500 font-bold group text-md sm:text-md md:text-lg lg:text-xl xl:text-lg">
                      Read More
                      <span className="block h-[2px] !bg-green-500 w-0 group-hover:w-[70%] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8} className="flex justify-center order-2 lg:order-2">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md">
              <img
                src="https://res.cloudinary.com/dl6mko7z1/image/upload/v1752054507/2-3-600x805_gcmpby.jpg"
                alt="Kitchen working"
                className="w-full h-auto object-cover rounded-lg shadow-2xl"
              />
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={8} xl={8} className="order-3 lg:order-3">
            <div className="flex flex-col gap-4 sm:gap-6">
              <Card bordered={false} className="!shadow-none">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-1 text-left sm:text-right lg:text-left xl:text-right min-w-0 order-2 sm:order-1 lg:order-2 xl:order-1">
                    <Title level={5} className="!mb-1 sm:!mb-2 text-base sm:!text-2xl">
                      Healthy Diets
                    </Title>
                    <Paragraph className="!text-lg sm:!text-md lg:!text-lg text-gray-800 !mb-2 sm:!mb-3 leading-relaxed">
                      There are many variations of passages of Lorem available, but the majority have suffered
                    </Paragraph>
                    <Link to="/" className="relative inline-block !text-green-500 font-bold group text-md sm:text-md md:text-lg lg:text-xl xl:text-lg">
                      Read More
                      <span className="block h-[2px] bg-green-500 w-0 group-hover:w-[70%] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                  <div className="bg-green-400 text-white text-lg sm:text-xl md:text-!2xl lg:text-3xl p-3 sm:p-4 flex items-center justify-center rounded-lg flex-shrink-0 order-1 sm:order-2 lg:order-1 xl:order-2">
                    <i className="fa-solid fa-heart-circle-bolt"></i>
                  </div>
                </div>
              </Card>

              <Card bordered={false} className="!shadow-none">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-1 text-left sm:text-right lg:text-left xl:text-right min-w-0 order-2 sm:order-1 lg:order-2 xl:order-1">
                    <Title level={5} className="!mb-1 sm:!mb-2 text-base sm:!text-2xl">
                      Workout Routines
                    </Title>
                    <Paragraph className="!text-lg sm:!text-md lg:!text-lg text-gray-800 !mb-2 sm:!mb-3 leading-relaxed">
                      There are many variations of passages of Lorem available, but the majority have suffered
                    </Paragraph>
                    <Link to="/" className="relative inline-block !text-green-500 font-bold group text-md sm:text-md md:text-lg lg:text-xl xl:text-lg">
                      Read More
                      <span className="block h-[2px] bg-green-500 w-0 group-hover:w-[70%] transition-all duration-300 ease-in-out"></span>
                    </Link>
                  </div>
                  <div className="bg-green-400 text-white text-lg sm:text-xl md:text-!2xl lg:text-3xl p-3 sm:p-4 flex items-center justify-center rounded-lg flex-shrink-0 order-1 sm:order-2 lg:order-1 xl:order-2">
                    <i className="fa-solid fa-bowl-food"></i>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Diet
