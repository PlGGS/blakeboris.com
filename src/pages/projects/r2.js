import Project from "../../components/project";

const R2 = () => (
    <Project
        name="R2D2B2"
        url="https://github.com/PlGGS/r2d2b2"
        desc="An Amazon Echo integrated application for adding features to Hasbro R2D2 via Raspberry Pi."
        pic0="https://user-images.githubusercontent.com/20197872/62156202-21b59200-b2d0-11e9-8be4-4ed389b01ef8.gif"
        pic1="https://user-images.githubusercontent.com/20197872/62156510-c637d400-b2d0-11e9-85e8-8760949fe10c.gif"
        pic2="https://user-images.githubusercontent.com/20197872/62155936-a48a1d00-b2cf-11e9-8fee-57c5c4db1d10.gif"
        writeup={
            <div>
                <h3>The Little Robot That Could</h3>
                <p>
                    For years before the summer of 2018, my old Hasbro R2D2 toy
                    sat in shambles as I started planning a new life for it. I
                    sat on the idea for a long time with my little experience in
                    electronic hardware. As a kid, I had always imagined the
                    droid as a better product, because the limited control
                    comprised only of voice commands didn't exactly work well. I
                    knew I'd like to keep those around, and eventually, I came
                    up with a plan to write my own custom ones using AWS Alexa
                    APIs.
                </p>
                <p>
                    Before starting on the hardware, I dove into AWS and created
                    my own custom Alexa app which could be activated on any
                    Alexa-capable device by saying "Alexa, run R2D2B2." It was
                    mindblowing for me as a highschool student to
                    <i> publish</i> my own publically available voice commands
                    in this way. With my mind bursting with possibilities, I
                    began thinking more seriously about how I was going to
                    re-engineer the internals of the droid itself.
                </p>
                <p>
                    I began by reading up on voltages and relays before deciding
                    to make use of a Raspberry Pi for the project rather than an
                    Arduino. I was under the impression that it would be
                    worthwhile to use C# rather than Python thanks to Microsoft
                    somehow capturing my interest with their .Net IoT
                    initiative. This led me down rabbit holes for weeks as I
                    struggled with long load times and frequent slowdowns for
                    what would've otherwise been a relatively easy task for a
                    Rasperry Pi running Raspian (now Raspberry Pi OS). To be
                    fair, ARM was somehow still rough territory for Microsoft,
                    and that has barely changed as of today. Additionally, my
                    experience with Linux was incredibly sparce at the time, so
                    learning Linux alongside Python on a Raspberry Pi didn't
                    sound nearly as appealing as sticking with Microsoft for the
                    time being.
                </p>
                <p>
                    After finishing high school, I spent the summer with my soon
                    to be roommate working out the actual process of wiring the
                    motors inside to corresponding pins on the Raspberry Pi.
                    With the bulky relays we were using, we had little room to
                    spare inside the droid all things considered. Beyond the Pi
                    and the relays, I wanted to fit a loud speaker, a separate
                    Alexa device, and an extra battery to make sure the motors
                    in the wheels had all the power they needed for R2 to get
                    around. We started wiring up everything outside R2 to make
                    sure the relays were finally working properly before
                    designing the systems for activating them through code. I no
                    longer wanted the primary source of input to be voice
                    commands, so after we had squeezed the Pi and relays inside,
                    I started designing exactly how a wireless gamepad would
                    work to send the inputs.
                </p>
                <p>
                    I devised a plan for the two sticks on an Xbox controller to
                    individually control each of R2's legs, and to my surprise,
                    the controls were intuitive even for friends and family of
                    mine who didn't regularly play videogames. It worked so
                    well, that the only other buttons necessary for full
                    movement were the bumpers for turning R2's head around. This
                    left the rest of the buttons on the controller fully
                    available for audio playback which made for fun interactions
                    with others down the line even when they weren't using the
                    voice commands.
                </p>
                <p>
                    With all the soldering and wiring for movement done, we were
                    left with the task of fitting the additional aforementioned
                    features into the droid. This turned out to be surprisingly
                    easy since I didn't want to wire up those features to the
                    main batteries anyway. With everything finally packed inside
                    R2, I worked on polishing the software for both the movement
                    and voice commands before finally sharing the little droid
                    with the world.
                </p>
            </div>
        }
    />
);

export default R2;
