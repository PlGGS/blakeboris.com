import Project from '../../components/project';

const PAD = () => (
    <Project
        name="Photo A Day"
        url="https://github.com/PlGGS/photo-a-day"
        desc="A multi-platform mobile application made with Flutter for logging a picture of yourself once per day."
        pic0='/pad/pad0.jpg'
        pic1='/pad/pad2.gif'
        pic2='/pad/pad1.jpg'
        writeup={
            <div>
                <h3>Photos For Days</h3>
                <p>On September 25th 2022, CaryKH posted the video, <a href="https://www.youtube.com/watch?v=H4ukudIrLxQ&t=392s">Eight years. 2,953 daily photos</a>. This led me down an internet rabbit hole of <i>photo-a-day</i> type videos. In the following months, I had the idea to create an app to make the process easier for myself and others looking to attempt the challenge of taking a photo of themselves every day. That idea quickly blossomed into sketches and a solid foundation for a mobile app. </p>
                <p>Throughout December 2022, I spent most of my time outside of my Master's courses focused on the development of the application. With the recent success of the app BeReal, I already knew there was a market for something like this, at least in terms of social media. Therefore, I dove head first into Google's Flutter toolkit for cross platform mobile development.  </p>
                <p>With an initial project set up and ready to go, I started by implementing navigation via a three page design similar to classic Snapchat. I made a custom bottom navigation bar and made sure the user could also swipe between pages to navigate the app. Then, I implemented an app drawer which could be accessed from any of the three pages via a hamburger menu in the top left of the app. I put a list of sample projects in it to designate it as a space for users to switch projects if they want to take pictures of something or someone else every day or week as well.   </p>
                <p>With navigation complete, I shifted my focus to authentication on both iOS and Android. While similar to one another, iOS required more attention since Flutter is a Google toolkit. iOS authentication required me to open XCode which I wasn't yet familiar with at the time. Luckily, once I got authentication itself working, designing and implementing a login page was surprisingly fun and easy. It was at this point that I also started getting used to the process for theming the application without breaking user customization of that setting, so I was able to easily theme the login buttons without hassle. I was even able to swap them around on iOS to display the Sign in with Apple button before the Google sign in button.   </p>
                <p>Next, I focused on reworking the Profile page by pushing the user's profile info up to the top of the page and adding a list of “features” or visual flourishes users could add to their posts for a VERY small fee, just enough to cover costs of cloud storage for user photos. After doing some research into storage options vs users using their own iCloud or Google Photos storage, I found a cheap file hosting company which would be affordable and prevent users from running into storage issues. The option to store your photos in your own cloud storage is still there, but working with a separate storage provider would prevent headaches for the majority of users. Unfortunately, that does mean I need to find a way to monetize the app. </p>
                <p>I then started work on the photo taking functionality. There was an issue with Google's ML Face Detection plugin for Flutter at the time, but I'm hoping to go back and implement it later to help orient users' daily photos around their faces without them needing to center their face every single time. Once I had photo taking working though, I had trouble uploading the images to the storage vendor I mentioned earlier. If I tried to open the photos once they were uploaded, they would be corrupted. After trying everything I could think of to get them to upload properly, I moved on to other less important aspects of the application. </p>
                <p>I'm hoping to return to Photo A Day very soon to complete the photo uploading implementation and make more solid progress. Now that I've obtained my Master's degree and a steady job, I'm hoping to spend more of my free time focusing on this application once I've finished more of these write ups for my website.</p>
            </div>
        }
    />
);

export default PAD;