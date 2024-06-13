"use client";
import React, { useState } from 'react';

interface Alumni {
    name: string;
    company: string;
    domain: string;
    batch: string;
}

const alumniData: Alumni[] = [
    { name: 'Arjun Mehta', company: 'Google', domain: 'Software Development', batch: '2020' },
    { name: 'Priya Sharma', company: 'Amazon', domain: 'Data Science', batch: '2019' },
    { name: 'Ravi Kumar', company: 'Microsoft', domain: 'Cybersecurity', batch: '2018' },
    { name: 'Anjali Patel', company: 'Facebook', domain: 'Cloud Computing', batch: '2017' },
    { name: 'Vikram Singh', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2020' },
    { name: 'Aditi Verma', company: 'Google', domain: 'Software Development', batch: '2019' },
    { name: 'Kunal Desai', company: 'Amazon', domain: 'Data Science', batch: '2018' },
    { name: 'Sneha Nair', company: 'Microsoft', domain: 'Cybersecurity', batch: '2017' },
    { name: 'Rahul Gupta', company: 'Facebook', domain: 'Cloud Computing', batch: '2020' },
    { name: 'Neha Joshi', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2019' },
    { name: 'Amit Chandra', company: 'Google', domain: 'Software Development', batch: '2018' },
    { name: 'Meera Reddy', company: 'Amazon', domain: 'Data Science', batch: '2017' },
    { name: 'Vishal Chauhan', company: 'Microsoft', domain: 'Cybersecurity', batch: '2020' },
    { name: 'Sakshi Aggarwal', company: 'Facebook', domain: 'Cloud Computing', batch: '2019' },
    { name: 'Rohit Shetty', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2018' },
    { name: 'Lakshmi Menon', company: 'Google', domain: 'Software Development', batch: '2017' },
    { name: 'Deepak Malhotra', company: 'Amazon', domain: 'Data Science', batch: '2020' },
    { name: 'Anita Yadav', company: 'Microsoft', domain: 'Cybersecurity', batch: '2019' },
    { name: 'Suresh Bhatia', company: 'Facebook', domain: 'Cloud Computing', batch: '2018' },
    { name: 'Pooja Saxena', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2017' },
    { name: 'Manish Jain', company: 'Google', domain: 'Software Development', batch: '2020' },
    { name: 'Nikita Rao', company: 'Amazon', domain: 'Data Science', batch: '2019' },
    { name: 'Gaurav Bhatt', company: 'Microsoft', domain: 'Cybersecurity', batch: '2018' },
    { name: 'Divya Singh', company: 'Facebook', domain: 'Cloud Computing', batch: '2017' },
    { name: 'Ajay Kapoor', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2020' },
    { name: 'Isha Tiwari', company: 'Google', domain: 'Software Development', batch: '2019' },
    { name: 'Nikhil Sinha', company: 'Amazon', domain: 'Data Science', batch: '2018' },
    { name: 'Shreya Pillai', company: 'Microsoft', domain: 'Cybersecurity', batch: '2017' },
    { name: 'Rajesh Deshmukh', company: 'Facebook', domain: 'Cloud Computing', batch: '2020' },
    { name: 'Kavya Iyer', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2019' },
    { name: 'Prakash Narayan', company: 'Google', domain: 'Software Development', batch: '2018' },
    { name: 'Tanvi Kulkarni', company: 'Amazon', domain: 'Data Science', batch: '2017' },
    { name: 'Siddharth Pandey', company: 'Microsoft', domain: 'Cybersecurity', batch: '2020' },
    { name: 'Ananya Banerjee', company: 'Facebook', domain: 'Cloud Computing', batch: '2019' },
    { name: 'Arvind Reddy', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2018' },
    { name: 'Sonia Ahuja', company: 'Google', domain: 'Software Development', batch: '2017' },
    { name: 'Tarun Chauhan', company: 'Amazon', domain: 'Data Science', batch: '2020' },
    { name: 'Preeti Singh', company: 'Microsoft', domain: 'Cybersecurity', batch: '2019' },
    { name: 'Naveen Joshi', company: 'Facebook', domain: 'Cloud Computing', batch: '2018' },
    { name: 'Smita Patil', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2017' },
    { name: 'Ashish Bhandari', company: 'Google', domain: 'Software Development', batch: '2020' },
    { name: 'Aparna Nair', company: 'Amazon', domain: 'Data Science', batch: '2019' },
    { name: 'Umesh Gupta', company: 'Microsoft', domain: 'Cybersecurity', batch: '2018' },
    { name: 'Kirti Sharma', company: 'Facebook', domain: 'Cloud Computing', batch: '2017' },
    { name: 'Sunil Khanna', company: 'Netflix', domain: 'AI & Machine Learning', batch: '2020' },
    { name: 'Mallika Roy', company: 'Google', domain: 'Software Development', batch: '2019' },
    { name: 'Raghav Agarwal', company: 'Amazon', domain: 'Data Science', batch: '2018' },
    { name: 'Sanjana Rao', company: 'Microsoft', domain: 'Cybersecurity', batch: '2017' },
    { name: 'Harish Kaur', company: 'Facebook', domain: 'Cloud Computing', batch: '2020' },
];

const Page: React.FC = () => {
    const [domainFilter, setDomainFilter] = useState('all');
    const [companyFilter, setCompanyFilter] = useState('all');

    const filterAlumni = () => {
        return alumniData.filter(alum => {
            return (domainFilter === 'all' || alum.domain === domainFilter) &&
                   (companyFilter === 'all' || alum.company === companyFilter);
        });
    };

    return (
        <div className="container mx-auto p-4 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-4">College Alumni</h1>
            
            <div className="flex mb-4">
                <div className="mr-4">
                    <label htmlFor="domain-filter" className="block text-sm font-medium">Filter by Domain:</label>
                    <select
                        id="domain-filter"
                        className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={domainFilter}
                        onChange={(e) => setDomainFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                    </select>
                </div>
                
                <div>
                    <label htmlFor="company-filter" className="block text-sm font-medium">Filter by Company:</label>
                    <select
                        id="company-filter"
                        className="mt-1 block w-full py-2 px-3 border border-gray-700 bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={companyFilter}
                        onChange={(e) => setCompanyFilter(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="Google">Google</option>
                        <option value="Amazon">Amazon</option>
                        <option value="Microsoft">Microsoft</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Netflix">Netflix</option>
                    </select>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterAlumni().map((alum, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                    <img src="../../assets/profile1.svg"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{alum.name}</h3>
                                    <p className="text-gray-400">{alum.company}</p>
                                    <p className="text-gray-500">{alum.domain}</p>
                                    <p className="text-gray-500">Batch: {alum.batch}</p>
                                </div>
                            </div>
                            <a
                                href={`mailto:contact@${alum.company.toLowerCase()}.com`}
                                className="block mt-4 text-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
