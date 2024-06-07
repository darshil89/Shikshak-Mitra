"use client";
import React, { FC, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FeatureProps {}

const Feature: FC<FeatureProps> = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      title: "Smart Attendance System",
      description: "The idea is to implement an automated attendance tracking system using facial or voice recognition technology. This system will eliminate the need for manual attendance taking, saving time and reducing errors. Our approach involves utilizing advanced facial or voice recognition algorithms to accurately identify and mark attendance in real-time. Additionally, the system will continuously monitor attendance patterns and promptly alert users of any discrepancies or unusual patterns, ensuring data accuracy and reliability.",
      icon: (
        <svg className="h-12 w-12 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 5v4l3 3"></path>
        </svg>
      ),
    },
    {
      title: "Personalized Learning Support",
      description: "The concept is to provide personalized learning support tailored to each student's unique learning needs and preferences. This includes identifying areas for improvement and offering customized learning materials and feedback. To achieve this, we will analyze individual student performance data to identify strengths and weaknesses. Based on these insights, the system will recommend specific learning resources, exercises, and tutorials designed to address each student's learning gaps and enhance academic performance.",
      icon: (
        <svg className="h-12 w-12 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18V3H3zm10 2v3h3V5h-3zm-2 0H8v3h3V5zm5 5h-3v3h3v-3zm-5 0H8v3h3v-3zm-5 5h3v3H6v-3zm5 0h3v3h-3v-3zm5 0h-3v3h3v-3z"></path>
        </svg>
      ),
    },
    {
      title: "Enhanced Communication Tools",
      description: "Our goal is to create a centralized communication platform that fosters seamless interaction between teachers and students. This platform will facilitate instant messaging, announcement broadcasts, and file sharing to promote collaboration and engagement. To realize this vision, we will develop user-friendly interfaces for teachers and students to communicate effectively. Features such as real-time messaging, announcement boards, and file-sharing capabilities will be integrated to streamline communication and enhance transparency within the educational environment.",
      icon: (
        <svg className="h-12 w-12 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 0-.9-4.2 8.5 8.5 0 0 0-7.6-4.8H6a8.5 8.5 0 0 0-4.2 1 8.38 8.38 0 0 0-2.4 2.4A8.5 8.5 0 0 0 2 15.5a8.38 8.38 0 0 0 .9 4.2 8.5 8.5 0 0 0 7.6 4.8h7a8.5 8.5 0 0 0 4.2-1 8.38 8.38 0 0 0 2.4-2.4 8.5 8.5 0 0 0-1-4.2z"></path>
        </svg>
      ),
    },
    {
      title: "Predictive Analytics",
      description: "The idea involves leveraging machine learning algorithms to predict student performance and identify at-risk students before they fall behind. This proactive approach aims to improve academic outcomes and reduce dropout rates. Our approach entails analyzing historical student data to develop predictive models that anticipate future performance trends. These models will identify patterns indicative of students who may be struggling academically, enabling educators to intervene early and provide targeted support. Additionally, the system will provide educators with actionable insights for optimizing teaching methodologies and curriculum delivery based on data-driven analysis.",
      icon: (
        <svg className="h-12 w-12 text-pink-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3V3zm10 2v3h3V5h-3zm-2 0H8v3h3V5zm5 5h-3v3h3v-3zm-5 0H8v3h3v-3zm-5 5h3v3H6v-3zm5 0h3v3h-3v-3zm5 0h-3v3h3v-3z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold mb-12" data-aos="fade-down">
          Our Features
        </h1>
        <div className="relative flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`w-full flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center p-4`}
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-full md:w-1/2 p-4">
                <div className="flex flex-col items-center" data-aos="zoom-in" data-aos-delay={`${index * 100 + 200}`}>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8 flex flex-col items-center" data-aos="fade-right" data-aos-delay={`${index * 100 + 400}`}>
                  <p className="mb-4 text-center">{feature.description}</p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full">Learn More</button>
                </div>
              </div>
            </div>
          ))}
          <div className="hidden md:block w-0 border-l-2 border-gray-700 absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
