import Project from '../../components/project';

const SPB = () => (
    <Project
        name="Scheduling Productivity Booster"
        url="https://github.com/PlGGS/scheduling-productivity-booster"
        desc="A Next.js web application for synchronizing meetings across multiple teams at an organization."
        pic0='/spb/spb0.jpg'
        pic1='/spb/spb1.jpg'
        pic2='/spb/spb2.jpg'
        writeup={
            <div>
                <h3>Group Think</h3>
                <p>I initially pitched Scheduling Productivity Booster as a modern web app to my group for my undergraduate senior capstone, but they were immediately hesitant due to our combined lack of experience in JavaScript web frameworks. Luckily, we all eventually agreed to go for it in pursuit of learning something we knew our curriculum still wouldn’t cover. In doing so, we learned so much about designing, architecting, and managing everything from navigation to state within the application. The class was structured into biweekly Agile sprints, and we would meet weekly with our professor to discuss progress.</p>

                <p>One of our goals was to integrate with Microsoft Teams or Zoom to provide a more collaborative environment and make meetings less awkward and more productive. After a Teams or Zoom meeting, members of the team would be presented with options for denoting key players in the meeting and even provide feedback on who performed what role(s). This ability was key to getting credit for the <i>gamification</i> portion of the assignment. Instead, we really wanted to focus on the other features like organizing tasks, scheduling events, and chatting with other users on one unified dashboard.</p>

                <p>We began by designing the dashboard around actions users might want to take in the application. This allowed us to quickly organize the most important features users would want to have access to. We quickly settled on putting a shared team calendar front and center. We wanted to incentivize team members to always be aware of what the team should be working on as well as upcoming meetings and other important events. We tried implementing many out-of-the-box calendar components before attempting to write our own. Eventually, we did find one that worked well, and we moved on to other features of the application and elements on the dashboard.</p>

                <p>I began to focus on implementing the backend database through Google Firestore as well as login authentication with Google accounts as well. We ran into some roadblocks setting up all the Google integrations, but once they were in place, it was surprisingly easy to implement a secure login system. Once again, we had hoped to be integrating our application with Microsoft Teams and Zoom as well, but since we used Firestore for our backend database, we decided to leave the Google logins for the time being.</p>

                <p>To the left of the shared calendar, we decided to put two To Do lists. One of them would be shared across the team for easier project management, and the other would be the user’s personal To Do list. We once again looked around for many components that might work before settling on our own implementation, and this time we stuck with it! The To Do lists were actually one of the easiest parts of the whole application to get working properly with the database.</p>

                <p>On the right, we put a shared chat window for the team to communicate with one another. With the application’s new focus on planning and scheduling, a team chat made more sense than a fully featured chat window with multiple tabs for separate chats with different team members, because we knew teams would want to stick with Teams, Slack, or some other application for that. Our chat window’s focus is purely to communicate team-wide about upcoming events or the planning thereof.</p>

                <p>Finally, we implemented the <i>gamification</i> portion of the application by creating a page dedicated to displaying all team members after a meeting and allowing the user to give them <i>badges</i> based on their role in the meeting. Part of our reasoning for doing it this way was to incentivize teams to make the most of their meetings, as most are far too familiar with meetings that could’ve been emails. Despite not integrating the badges page into Teams or Zoom, we still learned and accomplished a lot throughout the course.</p>

                <p>If we were to redo this project, I think we would’ve chosen another web framework or backend database for easier integration with Microsoft Teams. Choosing Next.js and Firebase for our tech stack made Google logins the default. And once we had that working, we had other features to implement before reaching our main goal of Teams or Zoom integration. Microsoft integration most likely would’ve likely made things easier for both logins and meetings. All in all, I’m very proud of the features we did get implemented, especially since most of the team had never worked with a modern web framework before.</p>
            </div>
        }
    />
);

export default SPB;