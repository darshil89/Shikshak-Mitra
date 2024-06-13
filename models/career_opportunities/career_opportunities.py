import streamlit as st
import requests
from datetime import datetime
from bs4 import BeautifulSoup
import requests


def fetch_linkedin_opportunities(specific_interest):
    start = 5
    location = "Bangalore"
    list_url = f"https://www.linkedin.com/jobs-guest/jobs/api/seeMoreJobPostings/search?keywords={specific_interest}&location={location}&start={start}"
    response = requests.get(list_url)

    list_data = response.text
    list_soup = BeautifulSoup(list_data, "html.parser")
    page_jobs = list_soup.find_all("li")

    id_list = []
    
    for job in page_jobs:
        base_card_div = job.find("div", {"class": "base-card"})
        job_id = base_card_div.get("data-entity-urn").split(":")[3]
        id_list.append(job_id)
    
    job_list = []

    for id in id_list:
        job_url = f"https://www.linkedin.com/jobs-guest/jobs/api/jobPosting/{id}"

        job_response = requests.get(job_url)
        job_soup = BeautifulSoup(job_response.text, "html.parser")

        job_post = {}
        try:
            job_post["job_title"] = job_soup.find("h2", {"class":"top-card-layout__title font-sans text-lg papabear:text-xl font-bold leading-open text-color-text mb-0 topcard__title"}).text.strip()
        except:
            job_post["job_title"] = None    
    
        try:
            job_post["company_name"] = job_soup.find("a", {"class": "topcard__org-name-link topcard__flavor--black-link"}).text.strip()
        except:
            job_post["company_name"] = None
        
        try:
            job_post["time_posted"] = job_soup.find("span", {"class": "posted-time-ago__text topcard__flavor--metadata"}).text.strip()
        except:
            job_post["time_posted"] = None

        job_post["url"] = job_url

        job_list.append(job_post)
    
    return job_list



def fetch_coursera_courses(specific_interest):
    url = f"https://api.coursera.org/api/courses.v1?q=search&query={specific_interest}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        courses = []
        for course in data["elements"]:
            course_info = {
                "title": course["name"],
                "provider": "Coursera",
                "link": f"https://www.coursera.org/learn/{course['slug']}"
            }
            courses.append(course_info)
        return courses[1:7]
    else:
        return []


def main():
    st.title("Career Guidance and Opportunities")

    st.header("Student Information")

    # Step 1: Ask for student's general interest
    interest = st.selectbox(
        "What is your primary field of interest?",
        ["Engineering", "Medicine", "Arts", "Business", "Science", "Technology"]
    )

    # Step 2: Ask for more specific interest based on the general interest
    specific_interest = ""
    if interest == "Engineering":
        specific_interest = st.selectbox(
            "Which field of engineering are you interested in?",
            ["Mechanical Engineering", "Civil Engineering", "Electrical Engineering", "Computer Engineering",
             "Chemical Engineering"]
        )
    elif interest == "Medicine":
        specific_interest = st.selectbox(
            "Which field of medicine are you interested in?",
            ["General Medicine", "Surgery", "Dentistry", "Pharmacy", "Nursing"]
        )
    elif interest == "Arts":
        specific_interest = st.selectbox(
            "Which field of arts are you interested in?",
            ["Literature", "Performing Arts", "Visual Arts", "History", "Languages"]
        )
    elif interest == "Business":
        specific_interest = st.selectbox(
            "Which field of business are you interested in?",
            ["Finance", "Marketing", "Human Resources", "Entrepreneurship", "Management"]
        )
    elif interest == "Science":
        specific_interest = st.selectbox(
            "Which field of science are you interested in?",
            ["Biology", "Chemistry", "Physics", "Environmental Science", "Mathematics"]
        )
    elif interest == "Technology":
        specific_interest = st.selectbox(
            "Which field of technology are you interested in?",
            ["Information Technology", "Data Science", "Cybersecurity", "Artificial Intelligence",
             "Software Development"]
        )

    # Step 3: Ask for student's skill sets, achievements, certifications, education level, and internships
    st.subheader("Please provide more details about yourself")

    skills = st.text_area("List your skills (comma separated):")
    achievements = st.text_area("List your achievements (comma separated):")
    certifications = st.text_area("List your certifications (comma separated):")
    education_level = st.selectbox(
        "What is your current education level?",
        ["High School", "Undergraduate", "Postgraduate", "Doctorate"]
    )
    internships = st.number_input("Number of internships done:", min_value=0, step=1)

    # Step 4: Recommend career guidance, competitions, and opportunities based on the provided information
    if st.button("Get Recommendations"):
        st.subheader("Recommendations")

        # Fetch opportunities from LinkedIn
        linkedin_opportunities = fetch_linkedin_opportunities(specific_interest)
        st.write("### Job and Internship Opportunities:")
        for opportunity in linkedin_opportunities:
            st.write(
                f"- [{opportunity['job_title']} at {opportunity['company_name']}]({opportunity['url']}) - {opportunity['time_posted']}")

        # Fetch courses from Coursera
        coursera_courses = fetch_coursera_courses(specific_interest)
        st.write("### Recommended Courses:")
        for course in coursera_courses:
            st.write(f"- [{course['title']}]({course['link']}) - {course['provider']}")


if __name__ == "__main__":
    main()