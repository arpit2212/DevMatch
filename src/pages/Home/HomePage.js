import React from 'react';
import serviceVector from "../../assets/images/landingPage/landingServiceVector.jpeg";

import Landingheader from '../../layouts/landingHeader';
import { LandingService } from '../../layouts/landingservice';
import LadingFeatures from '../../layouts/LandingFeatures';
import LandingTophackathon from '../../layouts/LandingTopHackathon';
import { LandingFaq } from '../../layouts/LandingFaq';

const HomePage = () => {
    return (
        <div>
            <Landingheader />
            <LandingService
                heading="Unlock Your Potential with Our DevMatch"
                description="Our platform connects innovative minds with exciting opportunities. Whether you're hosting a hackathon or participating, you'll find invaluable resources and a supportive community."
                buttons={[
                    { title: "Apply for hackathon", variant: "primary", onClick: () => alert(" Apply for hackathon") },
                    { title: "Find Partner", variant: "secondary", onClick: () => alert("Find Partner") },
                    { title: "Apply for Project", variant: "primary", onClick: () => alert("Apply for Project") },
                ]}
                image={{
                    src: serviceVector,
                    alt: "Custom Image Alt Text",
                }}
            />
            <LandingTophackathon />
            <LadingFeatures />
           
            <LandingFaq
    heading="Frequently Asked Questions"
    description="Find answers to common questions about our platform and services."
    footerHeading="Have more questions?"
    footerDescription="Reach out to our support team for assistance."
    button={{
        title: "Contact Support",
        variant: "secondary",
        onClick: () => alert("Contacting support!"),
    }}
    questions={[
        {
            title: "How do I create and post a hackathon on the platform?",
            answer: "You can create and post a hackathon by signing into your account, navigating to the 'Create Hackathon' section, filling out the event details, and publishing it."
        },
        {
            title: "Can I allow participants to apply for my hackathon directly through the platform?",
            answer: "Yes, participants can easily apply for your hackathon through the application form linked to your posted event."
        },
        {
            title: "What is the process for applying to a project?",
            answer: "To apply for a project, browse the project listings, select a project of interest, and click the 'Apply' button to submit your application."
        },
        {
            title: "Does the platform support direct communication between users?",
            answer: "Yes, the platform includes a chat feature, enabling participants, hackathon organizers, and project owners to connect and collaborate seamlessly."
        },
        {
            title: "How can I find a partner for a hackathon or project?",
            answer: "Use the 'Find Partner' section to post your requirements, such as skillsets or availability, or browse other users' posts to connect with potential partners."
        },
        {
            title: "Can hackathon organizers review and manage participant applications?",
            answer: "Yes, hackathon organizers can review participant applications and communicate with applicants directly from their dashboard."
        },
        
        {
            title: "Is there a way to promote my hackathon or project to reach more participants?",
            answer: "Yes, you can use the platform's promotional features to highlight your hackathon or project on the homepage or through targeted notifications."
        },
        
    ]}
/>

        </div>
    );
};

export default HomePage;
