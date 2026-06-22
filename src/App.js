import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobPosts = [
  {
    companyLogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    companyName: "Google",
    datePosted: "2 days ago",
    jobRole: "Senior Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Bangalore, India"
  },
  {
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/250px-Microsoft_icon.svg.png",
    companyName: "Microsoft",
    datePosted: "1 week ago",
    jobRole: "DevOps Manager",
    tag1: "Full Time",
    tag2: "Manager Level",
    pay: "$140/hr",
    location: "Hyderabad, India"
  },
  {
    companyLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    jobRole: "Backend Engineer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Mumbai, India"
  },
  {
    companyLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    companyName: "Netflix",
    datePosted: "3 days ago",
    jobRole: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Pune, India"
  },
  {
    companyLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "1 day ago",
    jobRole: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Delhi, India"
  },
  {
    companyLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    jobRole: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Chennai, India"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDkB9ZO3_q5Znd2rR-rl2ipJvkBuH6VnsspYqOhzt_WbmW2ukiXflhLI&s=10",
    companyName: "Adobe",
    datePosted: "4 days ago",
    jobRole: "Cloud Architect",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Noida, India"
  },
  {
    companyLogo: "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
    companyName: "IBM",
    datePosted: "6 days ago",
    jobRole: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Kolkata, India"
  },
  {
    companyLogo: "https://images.seeklogo.com/logo-png/27/2/oracle-logo-png_seeklogo-273777.png",
    companyName: "Oracle",
    datePosted: "1 week ago",
    jobRole: "Java Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Ahmedabad, India"
  },
  {
    companyLogo: "https://images.seeklogo.com/logo-png/25/1/salesforce-logo-png_seeklogo-256541.png",
    companyName: "Salesforce",
    datePosted: "3 weeks ago",
    jobRole: "Product Manager",
    tag1: "Full Time",
    tag2: "Manager Level",
    pay: "$160/hr",
    location: "Gurugram, India"
  }
];

  return (
    <div className='parent'>
      {jobPosts.map(function(elem){
        return <Card companyLogo = {elem.companyLogo} companyName = {elem.companyName} datePosted = {elem.datePosted} jobRole = {elem.jobRole} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>
      })}
    </div>
  )
}

export default App
