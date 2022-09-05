import type { NextPage } from "next";
import Image from "next/image";
import LogoGroup from "../../public/other/LogoGroup.svg";
import Guidance from "../../public/other/Guidance.png";
import Tangibility from "../../public/other/Tangibility.png";
import Community from "../../public/other/Community.png";
import { signatures } from "../configs/signatures";
import classNames from "classnames";
import { usePlausible } from "next-plausible";
import { MarqueeLayout } from "src/components/basics";

const Home: NextPage = () => {
  // Styles places here for easy editing of all elements with className = <nameOfClass>
  const paragraph = classNames("my-2 w-full text-[#e9e9ec] leading-5");
  const highlight = classNames("bg-[#30267c]");
  const header = classNames("font-bold text-2xl my-2.5");
  const horizonal_rule = classNames("my-2.5 border-solid border-0.1 border-[#747485]");

  const plausible = usePlausible();

  return (
    <main>
      <MarqueeLayout>
        <div className="mx-auto flex max-w-custom flex-col gap-0 px-4 pt-4">
          {/* <hr className={horizonal_rule} /> */}
          <h1 className="mb-4 mt-6 text-4xl font-bold text-white">A worldwide education platform for the self-motivated.</h1>
          <div className="mb-5 flex">
            <Image src={LogoGroup} alt="The human colossus logo" />
            <p className="m-0 ml-2.5 pt-0.5 font-mono text-sm text-[#747485]">/ Jul 12, 2022</p>
            <hr className={horizonal_rule} />
          </div>
          <hr className={classNames(horizonal_rule, "mb-2.5 mt-0")} />
          <p className={paragraph}>
            <span className={highlight}>The next generation of builders is self-taught, and already building the future, right now.</span> Most began online,
            watching Youtube videos, building web apps, reading articles, joining professional communities, shipping products, while underserved by
            institutional education.
          </p>
          <p className={paragraph}>
            The paradigm of building companies in garages is over, replaced by founding companies remotely, coordinating global teams, watching Youtube videos
            to learn on the fly, and building products at light-speed, all while still in high school.
          </p>
          <p className={paragraph}>
            We’re about to see the number of incredible <span className="bg-[#30267c]">young builders exponentially increasing over the next decade</span>. But
            the vast majority will continue to be underserved and unguided — self-teaching is difficult. It’s time to treat self-paced, self-motivated education
            as the true alternative it is, and build the infrastructure students need.
          </p>
          <div className="my-2 flex gap-3.5">
            <div className="w-px bg-white" />
            <p>
              The Human Colossus is a global collective of builders set on building a better educational system for young people, and get them competing for,
              contributing to, and founding the future.
            </p>
          </div>
          <p className={paragraph}>
            <span className="bg-[#30267c]">Our founding members have all been a part of the first wave</span>, as members of early Discord communities, Twitter
            groups, and online accelerators. We’re inspired by our experiences on platforms like Pioneer, communities like the Gen Z Mafia, and the young
            builder networks on Twitter, to build something better.
          </p>
          <hr className={horizonal_rule} />
          <p className={paragraph}>To understand our approach, we must answer: </p>
          <div className="my-2 flex gap-3.5">
            <div className="w-px bg-white" />
            <p className="text-lg font-bold">Why is it so difficult to get started?</p>
          </div>
          <p className={paragraph}>
            It’s not for lack of effort. It’s not for lack of time. It’s not for lack of free learning resources. Instead, there are three major reasons why
            young people have struggle gaining momentum:
          </p>
          <h1 className={header}>Guidance</h1>
          <p className={paragraph}>🚨 It’s hard to know where/how to start.</p>
          <p className={paragraph}>🚨 It’s hard to not get stuck or lost along the way.</p>
          <p className={paragraph}>🚨 It’s hard to stay on track and maintain long-term vision for what you’re doing.</p>
          <p className={paragraph}>
            It’s easy to forget <span className="bg-[#30267c]">how easy it is to get stuck when you’re young</span>; knowing where to find answers to questions,
            finding alternatives, or overcoming obstacles is a skill that develops with age.
          </p>
          <p className={paragraph}>
            Young people need a lot of help, which we can provide in broken-down guides, direction from mentors, and the space to continuously expand into
            increasingly ambitious endeavors.
          </p>
          <p className={paragraph}>
            Most importantly, <span className="bg-[#30267c]">we don’t need to create new educational content,</span>
            &#160; just direction on where to find existing resources. We don’t need to supplement the countless courses, videos, textbooks, and articles
            already out there, for free!
          </p>
          <p className={paragraph}>
            The minority of content produced by Colossus members will be what they would have created already, in the form of project releases and articles,
            modified to fit the platform (steps for replication, learning pre-requisites, etc.).
          </p>
          <p className={paragraph}>
            👉 &nbsp; We’re building a leveling system that allows us to reward intermediate progress (see KhanAcademy), paired with social incentives.
          </p>
          <p className={paragraph}>
            👉 &nbsp; We’re rewarding users who follow the two-week learn, teach, publish pattern, where writing out learnings to teach others allows a form of
            direct application + tangible value to the world.{" "}
          </p>
          <p className={paragraph}>
            👉 &nbsp; We’re deeply integrating users with a community of peers, allowing them to compete and progress relatively in their community, without
            justifying to the greater world.
          </p>
          <div className="my-2 flex justify-center">
            <Image src={Guidance} alt="" width={403} height={222} />
          </div>
          <h1 className={header}>Tangibility</h1>
          <p className={paragraph}>🚨 It&apos;s hard if your progress doesn&lsquo;t show results or feel rewarding.</p>
          <p className={paragraph}>🚨 It&apos;s hard if learning has little or infrequent real-world, hands-on application. </p>
          <p className={paragraph}>🚨 It&apos;s hard if there isn&apos;t a strong reason &quot;why&quot; one is learning.</p>
          <p className={paragraph}>
            It’s counterintuitive that resources, like KhanAcademy, MIT OpenCourseware, or Libgen, are{" "}
            <span className={highlight}>not often cited by builders as paths for self-learning</span>, given that they provide limitless, free, world-class
            education.
          </p>
          <p className={paragraph}>Why is this? Tangibility. </p>
          <p className={paragraph}>
            This is easy to see if we take a look at non-digital, advanced subjects. Naturally, contribution and acknowledgement in high-depth subjects is very
            discrete: there is little contribution that a high schooler can progressively create in the field of mathematics.
          </p>
          <p className={paragraph}>
            As a result, studying high-depth topics can be incredibly difficult, as progress can feel useless and intangible.{" "}
            <span className={highlight}>Most people aren’t capable of self-studying math for years in hope of a distant payoff</span>, especially since
            institutional education will not recognize it.
          </p>
          <p className={paragraph}>
            This outlines tangibility, which is akin to <span className={highlight}>changing learning from climbing a cliff into walking up stairs</span>, where
            reward can be found at each step.
          </p>
          <p className={paragraph}>
            In software, this is common: students begin with building a personal website, feel proud of their creation, then iterate.{" "}
            <span className={highlight}>Contribution, creation, and impact can be created within hours</span>: results are tangible, not abstract.
          </p>
          <p className={paragraph}>Whether it’s web development, biology, or climate research, we can make progression more tangible.</p>
          <p className={paragraph}>
            👉 &nbsp; We’re building a leveling system that allows us to reward intermediate progress (see KhanAcademy), paired with social incentives.
          </p>
          <p className={paragraph}>
            👉 &nbsp; We’re rewarding users who follow the two-week learn, teach, publish pattern, where writing out learnings to teach others allows a form of
            direct application + tangible value to the world.{" "}
          </p>
          <p className={paragraph}>
            👉 &nbsp; We’re deeply integrating users with a community of peers, allowing them to compete and progress relatively in their community, without
            justifying to the greater world.
          </p>
          <div className="my-2 flex justify-center">
            <Image src={Tangibility} alt="" width={402} height={195} />
          </div>
          <h1 className={header}>Community</h1>
          <p className={paragraph}>🚨 It’s hard if you don’t have any assistance in your learning.</p>{" "}
          <p className={paragraph}>🚨 It’s hard when you’re only competing against yourself and working alone. </p>
          <p className={paragraph}>🚨 It’s hard if you can’t share your work with others.</p>
          <p className={paragraph}>
            Communities can be a place for support and guidance, where students can find role models to aspire to and for peers to collaborate with.{" "}
            <span className="bg-[#30267c]">Every great builder cites a certain community that helped them along their way.</span>
          </p>
          <p className={paragraph}>
            A community of similarly-paced peers can offer the feedback, criticism, and appreciation to keep students moving. Through shared effort,
            inter-competition, and group contribution, learning becomes far more rewarding.{" "}
            <span className="bg-[#30267c]">Communities provide both guidance and tangibility.</span>
          </p>
          <p className={paragraph}>
            Still, building tight community can be difficult, fragile, and often unscalable. For this reason,{" "}
            <span className="bg-[#30267c]">the communities we directly create will look different </span>
            than the Discord servers, Telegram chats, and Twitter groups many of us are familiar with. Scalability, permissionlessness, and stability are
            requirements.
          </p>
          <p className={paragraph}>
            Our community structure looks far more like a forum, like Reddit or StackOverflow, with clustering users into sub-communities and progression-gated
            social spaces.{" "}
            <span className="italic text-[#747485]">
              We are still conducting research in this area. Feel free to give feedback by tweeting at @jointhecolossus.
            </span>
          </p>
          <p className={paragraph}>👉 &nbsp; We’re building a network of builders, from just starting to just raised a Series C, worldwide.</p>
          <p className={paragraph}>
            👉 &nbsp; We’re automatically grouping similar users, allowing for collaboration, inter-competition, and sharing, without needing to directly
            compete with the world at large.
          </p>
          <p className={paragraph}>
            👉 &nbsp; We’re constantly showcasing the incredible accomplishments of our members, reminding users of their potential and how similar they are to
            successful builders.
          </p>
          <div className="my-2 flex justify-center">
            <Image src={Community} alt="" width={402} height={273} />
          </div>
          <h1 className={"my-4 text-2xl font-bold"}>What does this look like?</h1>
          <p className={paragraph}>
            To start, we’ve built a platform for existing builders who are already creating & learning at high speed. You can meet some of our members below!
          </p>
          <p className={paragraph}>
            We’re still finalizing design and beginning development mid-August. Following testing and a trial period with founding members, we’ll be releasing
            to builders on the waitlist. <span className="italic text-[#747485]">You can sign up for the waitlist below.</span>
          </p>
          <p className={paragraph}>
            We’re also actively recruiting founding members that can function as advisors, advocates, and early users. If you’d like to nominate someone, you
            can do so below.{" "}
            <span className="italic text-[#747485]">
              We temporarily bias towards recruiting founding members who have already built high-impact projects or with existing reach in the space.
            </span>
          </p>
          <div className="mt-4 flex flex-wrap justify-between gap-3">
            <button
              className="bold flex h-10 cursor-pointer items-center justify-center rounded bg-[#5f4bdd] px-8 font-button text-sm font-bold text-white"
              onClick={() => {
                plausible("clicked-apply");
                window.open("https://colossus.fyi/apply");
              }}
            >
              Apply to join
            </button>
            <button
              className="bold flex h-10 cursor-pointer items-center justify-center gap-7 rounded bg-[#191933] px-8 font-button text-sm font-bold text-white"
              onClick={() => {
                plausible("clicked-twitter");
                window.open("https://twitter.com/colossusfyi");
              }}
            >
              Follow our progress
            </button>
            <button
              className="bold flex h-10 cursor-pointer items-center justify-center  gap-7 rounded bg-[#191933] px-8 font-button text-sm font-bold text-white"
              onClick={() => {
                plausible("clicked-contact");
                window.open("mailto:contact@colossus.fyi?subject=Reaching%20out...");
              }}
            >
              Contact us
            </button>
          </div>
          <div className="mt-12 mb-6 h-72 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
            <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold	">/ Signatures</h1>
            <div className=" mt-3 flex h-56 flex-col gap-3.5 overflow-auto overflow-x-hidden rounded">
              {signatures.map((signature, i) => (
                <div className="static flex h-10 items-center justify-between " key={i}>
                  <div className="flex shrink-0">
                    <Image src={signature.image} alt="The human colossus logo" width={40} height={40} className="rounded" />
                    <div className="mx-3 flex flex-col justify-between">
                      <h1 className="text-normal font-semibold leading-5.5 text-[#E9E9EC]">{signature.name}</h1>
                      <div className="mt-0 flex gap-2 font-mono text-xs leading-[16.5px] text-[#CCCCD2]">
                        <p className="text-[#747485]">in</p>
                        <p
                          className={classNames({
                            "text-[#e1b13e]": signature.gold,
                          })}
                        >
                          {signature.subject}
                        </p>
                        <p>/</p>
                        <p>{signature.age}</p>
                        <p className="text-[#747485]">from</p>
                        <p>{signature.location}</p>
                      </div>
                    </div>
                  </div>
                  {signature.signature ? (
                    <div className="flex h-full w-20 items-center justify-center">
                      <Image src={signature.signature} alt="The human colossus logo" className="relative rounded" width={78} height={25} layout="fixed" />
                    </div>
                  ) : (
                    <span className="align-middle font-signature text-xl text-[#4C4C60]">{signature.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 mb-6 rounded-lg bg-[#00001c] px-4 pb-4 pt-1.5 shadow-custom">
            <h1 className="z-10 w-full bg-[#00001c] pt-1 font-semibold">Get involved!</h1>
            <div className="mt-2.5 flex flex-wrap gap-6">
              <button
                className="bold flex h-10 cursor-pointer items-center justify-center rounded bg-[#191933] px-6 font-button text-sm font-bold text-white first-letter:flex"
                onClick={() => {
                  plausible("clicked-twitter");
                  window.open("https://twitter.com/colossusfyi");
                }}
              >
                Follow on Twitter
              </button>
              <button className="bold flex h-10 cursor-pointer items-center justify-center rounded bg-[#191933] px-2 font-button text-sm font-bold text-white">
                Text BUILD to 1 833 225 6887
              </button>
            </div>
          </div>
          <p className="mt-14 mb-14 p-4 font-mono text-csm italic leading-5 text-[#747485]">
            <b>Diversity, Equity, and Inclusion: </b>
            <br />
            The online learning revolution is global and indiscriminatory of gender, race, or origin. The Human Colossus is an inherently diverse organization
            and aims to represent all builders of all backgrounds. We recognize the STEM gender gap and are committed to fighting for better gender
            representation in our organization and the space at large.
          </p>
        </div>
      </MarqueeLayout>
    </main>
  );
};

export default Home;
