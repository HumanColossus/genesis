/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Link from "next/link";
import Mission from "../../../public/other/Icon.png";
import {
  Main,
  Container,
  ScrollableWrapper,
  BlockContent,
  BlockWrapper,
  BuilderStory,
  LargeBlockContent,
  Header,
} from "../../components/basics";
import { signatures } from "../../configs/signatures";
import classNames from "classnames";
import Image from "next/image";
import PostIcon from "../../../public/other/PostIcon.png";
import PostImage from "../../../public/other/PostImage.png";
import UpvoteSymbol from "../../../public/icons/UpvoteSymbol.svg";
import Share from "../../../public/icons/Share.svg";
import BookIcon from "../../../public/icons/BookIcon.png";
import PostBackground from "../../../public/posts/JackPostBackground.jpeg";
import GithubIcon from "../../../public/icons/GithubIcon.png";
import SiteIcon from "../../../public/posts/JackSiteImg.png";
import SiteIcon2 from "../../../public/posts/nCovIcon.png";
import YoutubeIcon from "../../../public/icons/YoutubeIcon.png";
import TwitterIcon from "../../../public/icons/TwitterIcon.png";
import JackPicture from "../../../public/profile-pictures/Jack.jpg";
import WillPicture from "../../../public/profile-pictures/PFP.png";

const JackSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image
          src={JackPicture}
          className="rounded-md"
          width={20}
          height={20}
          alt=""
        />
      </div>
      <p className="m-0">Jack O'Regan Kenny</p>
    </div>
  );
};

const WillSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image
          src={WillPicture}
          className="rounded-md"
          width={20}
          height={20}
          alt=""
        />
      </div>
      <p className="m-0">Will DePue</p>
    </div>
  );
};

const Index: NextPage = () => {
  return (
    <Main>
      <Header link="/apply" value="Join The Colossus" showBackground={true} />
      <div>
        <div className="relative">
          <Image
            src={PostBackground}
            alt="Post icon"
            className="rounded-md opacity-80"
          />
          <div className="absolute bottom-3 left-3  p-0">
            <Image
              src={JackPicture}
              alt="Post icon"
              width="60px"
              height="60px"
              className="m-0 rounded-md"
            />
          </div>
        </div>
        <h1 className="mt-3 text-3xl">
          How I built a platform to help Ukrainian refugees find homes.
        </h1>
        <div className="mt-3 flex gap-3 font-mono text-sm">
          <p className="text-[#747485]">about</p>
          <p>Jack O'Regan Kenny</p>
          <p className="text-[#747485]">/</p>
          <p>Sep 18th, 2022</p>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <Container title="/ Visit Websites">
        <ScrollableWrapper>
          <div className="flex flex-col gap-3">
            <Link href="https://dogpatchlabs.com/">
              <a>
                <BlockWrapper>
                  <BlockContent image={SiteIcon} title="Dogpatch Labs">
                    <p className="text-[#747485]">via</p>
                    <p>dogpatchlabs.com</p>
                    <p className="text-[#747485]">/</p>
                    <p className="text-[#747485]">A Startup State of Mind...</p>
                  </BlockContent>
                </BlockWrapper>
              </a>
            </Link>
          </div>
        </ScrollableWrapper>
      </Container>
      <Container title="/ Watch Video">
        <ScrollableWrapper>
          <Link href="https://www.youtube.com/watch?v=AT529ofpCWc">
            <a>
              <BlockWrapper>
                <BlockContent
                  image={YoutubeIcon}
                  title="Interview with Jack O'Regan Kenny"
                >
                  <p className="text-[#747485]">via</p>
                  <p>youtube.com</p>
                  <p className="text-[#747485]">/</p>
                  <p className="text-[#747485]">
                    Subscribe to The Human Colossus youtube!
                  </p>
                </BlockContent>
              </BlockWrapper>
            </a>
          </Link>
        </ScrollableWrapper>
      </Container>
      <p className=" w-full px-1 font-thin	leading-6	text-[#D2D2D8]">
        This is an interview between Jack O'Regan Kenny and Will DePue. You can
        watch the video version of this conversation on the Human Colossus
        Youtube channel. Edited for clarity and conciseness.
      </p>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />

      <div className="flex flex-col gap-3 px-1">
        <h2 className="text-xl">Who is Jack?</h2>
        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm Jeff O'Regan Kenny. I'm a guy who builds things and puts 'em on
          the internet sometimes.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Can you gimme a quick blurb on some of the things you've done so far?
        </p>
        <JackSpeaking />

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I've built hardware startups with Mirr, which is like a touchscreen
          smart mirror. So I've seen a lot of the idea to manufacture stage on
          that. I worked for the NDRC, which is Ireland's national accelerator.
          So I help facilitate the growth of companies, we invest a 100k into
          them. I also help run Patch, which is a youth accelerator for students
          between 16 and 21.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Basically, we lock them all in a room and say, Hey, come up with
          things and allow that for six weeks, facilitate that whatever way we
          can and see what comes out at the end with a demo day.. That's what
          I'm doing at the moment I built software hardware, put lots of things
          online.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You should Google me. That's about it.
        </p>
        <h2 className="text-xl">My backstory</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Where are you from? What's your background?
        </p>
        <JackSpeaking />

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I was born in ireland. I lived in Mullingar when I was younger, went
          to a Catholic primary school as everyone here does. Then pretty
          similar secondary school, like nothing exemplary became like a
          competition kid. Like one of those really annoying ones who was like
          doing like BT Young Scientist and stuff like that.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I had moderate success with that. I got really into programming
          because I wanted to make Minecraft mods when I was about 10. So that
          kind of fed into , oh, I've learned all these kind of things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          How do I apply them? Oh, competitions and it gets me outta class. The
          second one was actually really strong, motivator, more so than
          building at the time. But as I discovered hardware and had the
          facilities to build physical things I really quickly fell love at it.
          I was also plumbing with my dad.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Just that kind of tactility around making things I love I went into
          projects like my first big one was called EyeSpy. It was an oCR model
          that basically monitored what kids did on their devices.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So instead of being reported to at the end of the day that your kid
          looked up like how to make bread and stupid things. It would actually
          just use this model to only log like when a kid is doing something bad
          and then report that to parents, like immediately, that was pretty
          cool. Totally
        </p>
        <WillSpeaking />

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          screwing over your friends at that moment, but OK.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It was to replace the one they actually had. Because if they got it
          and I built it, I can show them the workarounds.,
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Oh I see.</p>
        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. I just had to build a better product, so they'd actually switch
          to it.
        </p>
        <h2 className="text-xl">First big project</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. So I think that was my first big project. I was about 13 at the
          time, moved on to hardware at 14, built a thing called alert buoy, the
          migrant crisis was really big at the time. Loads of people were dying
          because they were taking like these unseaworthy ships across the
          Mediterranean and like falling off or the ship.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So we built a thing that's basically a big button that attaches to
          existing navigational boys uses their power and calls coast guard.
          Basically just big red button. These are like, fairly common
          structures in the sea. If you crashed, you'd go swimming and more than
          likely find one.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          We got recognized by like the various coast guards, the EU commission,
          stuff like that through one of these competitions. Took a break from
          competitions. Did self-driving cars and convolutional neural networks
          for... actually I say, take a break from competitions.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I won a competition, but a CNN for a car design for autonomous car for
          Murgon who do like the interiors of Teslas and then started doing a
          bit of work with them. Built for myself for a year so it was like
          stupid stuff like websites that just, weird animations and crap like
          that. I don't think anything outstanding.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Those are fun. Those are the fun ones.
        </p>

        <h2 className="text-xl">Deep Tech Startup and Setbacks</h2>
        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Yeah. It was like a year of the kind of stuff, like
          MyFirstNDA.com, but like way less nuanced in the humor, it was just
          like it was just like very obvious jokes or a site that's just Rick
          Asley, constantly and stupid stuff. And just trying to get it out
          there. And then I hit what was my biggest project was Mirror and
          basically saw my mom following a makeup tutorial. She had a phone and
          one hand the pallet and the other and the brush. And she. Try and do
          that and look in the mirror at the same time and follow along. And I
          was like, okay, that sucks. Let's put screen behind the mirror. That
          was fine. That's been done. And I was like, okay, this still sucks.
          Touch screen mirrors have gotten big sense, but at the time when I was
          like 16, there was nothing there. So I started playing around with IR
          sensors and I was like, oh, I'm gonna make this touch screen. I went
          through a really bad resistive one which worked. I developed an IR
          touch screen, managed to get the Irish patent on it by myself and then
          I won a national competition for the best commercial project and from
          there, I just snowballed into a startup.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          We won a lot of awards. It did really well now it died primarily
          because of chip shortages and COVID, and the fact that like me and my
          co-founder were 19 at the latest stage of it.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. That's hard.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It was it was the fact that the chip shortage just drew it out and we
          didn't have like much money to go and order 2 million euros worth of
          chips. So other people beat us to market and we still have it. , it
          was a really fun experience.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I actually had a very cool spin out from it called VC hunt, which got
          acquired by a Canadian company. Yeah. Which was basically, I got fed
          up of talking to people and them saying they don't invest in hardware.
          So I built basically language model, scrapes and classifies VCs, and
          it compares what they invest in to what they say they invest in.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So they don't invest in female founders. They say this, but they
          don't. And then it tweeted it.. Yeah. Yeah. I see it. It basically
          called them out on Twitter and then we got like a cease and desist.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          What happened with the VC hunt? Got acquired.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Canadian firm. It got very hectic. So I took a day off of Mirr cause I
          was doing like a hundred hour weeks, so I was doing like 16 hour days
          that was like a six month run. So when that ended, I was like, okay,
          I'm gonna build something, took a day off. And I was like, okay, I'm
          from 9:00 AM to 5:00 PM. Product Hunt launch at 5:00 PM. That's it. So
          I built that the web scraper ran for about four hours and then it was
          like, I'm done.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I was like, oh, what do I do? So I built crowdsourcing on top of it.
          So I like hand verified like reviews. I built this, launched it, no
          traction for about three weeks and I forgot about. And then all of a
          sudden I got like a ping and it's you've exceeded your daily visitors.
          And I was like, what?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm not paying for anything. . And then all of a sudden I had 13k
          concurrent viewers, that was that peak. I was like, okay. Something
          happened. Yeah. Basically got a load of traction. People kept calling
          out like this partner invested in our startup and then had an affair
          with my wife. And it's like he, and some really close things. So we
          started pulling a few of them and we got our cease and desist and
          that's when we started like actually tweeting the content and yeah,
          got very juice very quick. And some firms wanted to shut us up and we
          said, no this, they were the initial acquisition offers and then a
          very charitable organization trying to do good by founders gave us an
          offer. So we took that. That's awesome.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Came out nowhere. It was like a day project. I'd say I've six hours of
          work. And then you compare mirror, which is like a hundred plus hours
          a week.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Sometimes it's like that. That's what I recommend people to do is just
          spend a lot more time on the idea than you spend on the project. If
          I'm gonna spend one hour or eight hours but I'm gonna spend 10,000
          working on it. You need a higher ratio.
        </p>

        <h2 className="text-xl">The feedback loop</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I have a question for, a lot of the people out there who are just
          getting started or maybe learning a bit of coding, but don't know
          where to go next. Can you name some experiences that you felt helped
          you make that next step from beginning to intermediate to successful?
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I didn't find this myself, but I think if I had access to it now, it
          would be very useful.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Third party feedback. So set yourself goals and have someone else hold
          you accountable for them. Especially with learning, especially if
          you're not learning programming, cuz programming has a pretty clear
          feedback loop, it works or it doesn't you get the output you expect or
          you don't.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          If you're learning something like maths, you don't necessarily get
          that. Like you can't really know if your answer is right, unless
          you're following like a set curriculum. That applies to mechanical
          engineering, which would be my home
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          No matter what you're doing, hold yourself accountable, especially if
          you're doing something, not programming. I know most people I talk to
          are developers, so this doesn't really apply, but like getting onto
          things like Pioneer, where you're like submitting weekly reports on
          what you're working on and getting direct feedback from like equally
          competent people who are building and in the same space.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Like Pioneer.app is a pain in the ass to do like the weekly reports
          and stuff. It takes so much time. Yeah. But the value you get? We did
          it with Mirr. We were top of the global leaderboards for god knows how
          long, never won it, but we got the hats. That's all we needed. For
          someone like starting projects and stuff, it's a great way to get like
          feedback and recommendations on how to do things differently. come on,
        </p>

        <h2 className="text-xl">Why we're building Colossus</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Depending on when you listen to this, we might have already launched
          on Colossus. The part of our service. It's very similar to
          Pioneer.app, it lets you publish your projects or get reception from
          them and share it with the community.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yes Colossus is awesome. Been like showing the thesis around on my
          phone to people in Patch, cuz I think there's probably a strong
          overlap and yeah, everyone has just been like I'm in
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          it's been great. Just even the fact that I can like, just hand someone
          on my phone and know they'll probably get it. You've really good copy.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I think the copy, has been quite good. Yeah. We're quite proud
          of it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          We have a big collective of builders and we're just gonna experiment
          and figure out what works and how we can help the previous version of
          ourselves. What is the thing we wished we had? And what did I wish I
          had when I got started?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Figuring out how to start is something really hard. Like now that
          we're older, it's very easy to learn things cause we know how to get
          unstuck. And that's actually the thing that you don't have when you're
          kid, you don't know what websites to go to. For me, I discovered like
          local host was a thing two years too late. If I knew that I could host
          websites on my computer. Yeah. I would learn so much more. It took me
          so long to understand you'd do that in HTML and JS.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Is there any safer area for people to experiment. Something you would
          say go do this first. You can't shoot yourself in the foot very
          easily. Do you have any ideas around a project like that?
        </p>

        <h2 className="text-xl">How to start building in hardware</h2>
        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I always find like a great one that's hard to mess up, you're not
          gonna cause any damage, is like, buy one of the Arduino kits that come
          in like these boxes. Yeah. It's just like a range of sensors and an
          Arduino all low power stuff? I think that's great because you get a
          couple of layers to it. So you can be like web apps and have that
          interface with low level like you can almost get a full stack.
          Especially with hardware where it's finicky and you learn these like
          un-intuitive problem solving methods where it's this thing was working
          and it has stopped. Nothing has moved, but maybe a wire is loose.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think those kind of projects are fun because you can like, just
          build something arbitrary, like a trash can that opens when you throw
          trash at it. Or like something stupid, build something stupid. That's
          like harmless that you can show your friends and get them excited
          about building.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. That has an knock on effect where you're like, oh, let's build
          together. You can just do live data logging if you're like into the
          data science end. It's a great way to number one, get you a bit like
          hardware competent which is always great to have, but then also expand
          out into the, oh, turns out I'm making this data thing.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Let me go down the data science route and build a weather station
          outta this one little tiny kit or, I'm reading into encryption, how
          quickly can I get this process to encrypt?
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          There's so much depth in that space, every direction you go, there's
          more things to explore.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's fun. And what gets you excited? And I think, Miguel always says,
          like debug your way into learning, which is go do a project that
          doesn't really matter what it is, but make sure it involves something
          new that you're gonna learn or something you're gonna explore.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so I really wanna build this stupid website, but it forces me to
          like mess around with an Arduino or, use an IR sensor. And then
          because of that, you're end up learning and then you get have that
          experience.
        </p>

        <h2 className="text-xl">Sharing your progress</h2>
        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Seemingly I give okay advice. Yeah. Learn how to give advice as well.
          Yeah. Because second you build cool stuff people will ask you for it
          and you won't know how I'm still at that stage.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. I think sharing exporting your ideas is definitely very hard.
          That's one skill that a lot of builders never learn because they're
          like too focused on the engineering and then forget about the person
          side. Selling and marketing and talking and giving advice is so
          important as well..
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. I find builders lately have either gone into one of two
          categories. Like I've seen these people, I've worked with, they've
          gone into like heads down building, or they're gone into writing
          Twitter threads and sharing like their Roam network graphs. Not a fan
          of either. There's some people I meet in the middle who like document
          their projects really well.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think blogs are great like just write it up and Hey, here's my
          process. Here's how I started. Here's why I messed up and broke my
          Arduino here's where I ordered another one. And then here's how I
          succeeded. Write that up and send it. And you don't know, maybe, as
          you said with your kind of project, like maybe a month on the line,
          Tons of people like it. I launched a chess engines website and turns
          out I got like 2 million hits over a month.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I was like, I didn't even know too had the same experience. I was
          like, wait, why is like my Vercel charging me? That was basically that
          I wanted to build a chess engine and I gave myself two weeks to
          finish. And at the end it sucked. Honestly, it was not that good, but
          I was like, you know what? I wanna have something that finishes. And
          if it's not like good, at least I can make a blog post and now it
          could be its own point where I can quit.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Also being genuine and interested in things is how everyone succeeds,
          right? If you look at who's like a successful entrepreneur or,
          knowledgeable in a space, every single one of them did it because they
          were interested.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Oh, 100%. Like most of the people online I'm fans of are like, I
          forget, oh, I can't remember the VC firm, but they have a page for
          like their portfolio and their page for like their, what ifs. And it's
          everyone they passed on who blew up.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And it's we've missed more unicorns than we've had and stuff it was
          really funny, but it felt really honest. It gives an honesty to it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And even like with builders who you go onto like their CV? This guy,
          he had projects on his CV and then abandoned projects. Honestly from a
          potentially " Hey, do you wanna work with me perspective?"
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I was way more interested or I had way more fun going through like the
          abandoned projects. Yes. And being like, trying to figure out like,
          why'd you stop them and then ping them being like, Hey, what happened
          here? And he was like I think they got called for dinner and like
          never came back. yeah.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It was like, oh, okay. Or what was it? Oh I like my computer crashed
          and I gave up on the project.
        </p>

        <h2 className="text-xl">Do the hard things</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I love that. So imagine you had to restart right now, so you're back
          to before you ever got started building, you could give yourself
          advice on the perfect life path, or building path to get to. where you
          would want to be. What would that path be like now?
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I started with Lua rather than HTML or anything like that. I was
          like, oh, Lua, cuz I think it was Garry's Mod was what I was aiming to
          develop for at the time. I'd probably tell myself to keep going with
          that. And one thing I made a mistake in was I went like very quickly
          into HTML and Scratch and I probably spent about two years in that
          when I shouldn't have I got very comfy. And stop trying things. So I
          would've probably advised myself to like never pick up scratch.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Cause it was too easy to pump out things that got just enough praise
          that, got my catharsis and would just do it again. So I probably force
          myself into C cause that's what I like find myself using.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'd probably add myself into like harder things, a lot sooner. Harder
          things, yeah. Because when mirror rolled around and it was like, oh
          crap, I have to write firmware from the ground up.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I'd never really done any like solid hardware or full stack
          project. Like we built our own OCR model, like word detection model
          for the cyber bullying app, the child monitoring was fairly cookie
          cutter.
        </p>

        <h2 className="text-xl">Finding harder projects</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I was talking to my friend recently and he's been teaching himself,
          web scraping and doing all this kind of fun, like starter projects on
          Python.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And he was like "The problem Will is the fact that every single
          YouTube video on Python only covers the same five minutes". Every HTML
          guide does the same dumb project.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Is there any like advice you have to finding harder projects or maybe
          even example of the harder projects you might pursue?
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So in terms of finding harder projects, I think you kind hit the nail
          on the head there, like software, it's oh, how do I, where do I go
          next?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You kinda need to be guided or at least have documentation. Whereas
          coming back to the comparison between to mechanical engineering, you
          can infer the next steps as in make it smoother, whatever, like you,
          there's a precision there that like software can very easily hit that
          precision, whereas mechanically it's super hard to do, which means you
          can always chase something more, yeah, a very visible next step where
          like software's a lot more open ended.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think for finding harder projects . Find out things you think about
          and see if you have solutions to them. So for me right now, and if
          someone wants to build this, do please for me I'll beta test,
          whatever. I hate email as a whole thing, and I'm gonna build like an
          email client in react. And I have a problem. So even though it's like
          my problem, I'll just build a one off solution for me.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I won't think about making a product, I'll just solve my issues and
          that's it. And when I say from the ground up, that just means you go
          down to the base of the problem. How can you solve the problem at
          every stage for yourself?
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I love that. I think building for yourself is also, I'd say the best
          advice. There's always so much to do for yourself, right? I love the
          point about mechanical engineering, how there's always a next step.
        </p>

        <h2 className="text-xl">The "hello world" of hardware</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Is there a great hello world project for mechanical engineering that
          you're gonna end up having infinite expansion.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          My recommendation is always build a 3d printer. because, oh,
          interesting. Yeah. Number one, it teaches you about, software,
          sensing, moving motors, dealing with power conversion. It's a really
          good full stack. I hate to use the word again, but it, you like your
          embedded computer to, managing the heat and learning about materials
          and stress testing, making sure things are rigid.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Then when you're done, you'll print a few things and you go this could
          be better. And you will spend hundreds of hours on printers.
        </p>

        <h2 className="text-xl">Reaching out to Jack</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Can anyone reach out to you? If people who are watching this have any
          questions. Yeah,
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Twitter or my email is jack@dogpatchlabs.com.
        </p>

        <h2 className="text-xl">Competition</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm pretty diligent about getting back to people. Which actually,
          that's why I want to fix email.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I want email and CRM in one and I wanted. Not cost what Superhuman
          does.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Just clone superhuman people. That's the other advice I have which is
          just go find a startup that you like, and then just build, do a
          better. Yeah. And also people misunderstand how fast big companies
          move and that they move surprisingly slow.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You also forget that humans are scared of competition more than
          anything. And so you might be in your mom's basement, coding a
          Superhuman client, but it might be that the Superhuman COO is like
          freaking out like, oh no, we have another competitor on our hands.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So a company I have a stake in they found out about competitor and
          they were like panicking. They're like "We'll have to pivot, we'll
          have to leave". Dude, you've paying clients.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          They launched two days ago. And it's one guy, I'm sure it's like a
          side project, he has his own startup. "But still it's competition",
          I'm like you're fine, at worst case scenario, you hire him.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And also to be clear, this is everyone like the corporate world
          is not immune to this they're they have this almost even worse.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so the whole point is if you're, if you're young realize that you
          can just totally screw with the top startups in the world, just by
          making a really good looking website, or even just building a product.
          If you build a Superhuman client, you bet that's gonna be sitting in
          the Superhuman slack and they're gonna be talking about you. That's
          awesome.
        </p>

        <h2 className="text-xl">Master your tools</h2>
        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's a good way to get hired. Another thing I'd actually
          recommend... Great way to hired. Yeah. One thing I would really
          recommend and it has come in super useful for me on a lot of occasions
          is get really good with a load of base tools. So spend 24 hours in
          Photoshop and in Figma, cause I was hired as like a tech guy and a
          marketing guy dropped out where I was working. And I ended up doing a
          load of decks and mockups and stuff like that, because I had the
          background. Most of the good things are free. You can use PhotoPea
          instead of Photoshop, you can use Blender for 3d models. If you go to
          my website, you'll see like a lot of renders of houses.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's just practice. It's oh, I wonder to get really good at product
          renderers, but I didn't have any cool products. I drew houses. Cause I
          enjoy doing that. It's relaxing to me and I just rendered them as if
          they were like products.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I could not agree with this more. Some of my biggest issues with a lot
          of people I've met is that they're very self limiting. They're like,
          I'm not technical. I'm like why would you ever say you're not
          technical?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Guys, we're technical. I don't do design. You can say, you're probably
          not a good designer, but you still can learn Figma. Realize that like
          you can force all these skills. There's nothing you can't learn. There
          might be things that you don't have natural skill at, but it doesn't
          matter.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I can now move at two times the speed of anyone else cause I can
          design and I can code. And suddenly you're a two times builder. And
          then learn like marketing and social media promotion and run
          communities as well.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And then suddenly you don't need permission from anyone. You can go
          from like zero to full startup in like a day, because you're so fast.
          Just don't self limit, especially with mechanical. I think a lot of
          software guys say "Oh, I'm not mechanical".
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm like, why not? Like you can just go buy the Arduinos and you can
          start right now and just believe in yourself.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You have built Ikea furniture that's probably more difficult than most
          mechanical you're gonna do. I'd happily build or do graphic design
          because I know I'm okay at it and I'd like to get really good at it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's probably why I got VCHunt.org done so quick, because I had the
          copy done. I had like front end drawn up and stuff. All the copy was
          written because I'd gone oh, I'm gonna learn how to write copy .
          It's... just do stuff. Especially, if you're like young, before you
          have to work a job and feed yourself.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'd say there's definitely no reason not to oh I need a logo for this
          project. Give it a go. Do it yourself. Give it a shot. Like even if
          you just go on like brand mark and download a logo and then try and
          improve on it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yes. Play around.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Once you can steal the foundation and then improve on it, it's a great
          way to get started. You don't have to build from scratch. And I would
          actually recommend people don't build from scratch as much as you ever
          can.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, that's pretty solid advice. Also being familiar in software, cuz
          if you ever ask someone who's really good at it for help, you won't
          frustrate them. That's probably the main thing.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Cause learn off other people when you can people can condense
          knowledge and an experience into one and deliver it lot quicker to
          you. If you can become familiar before you need their help it can make
          it a lot easier for them to give you their knowledge and probably
          makes them want to give it more because you have this competency and
          they're not waiting on you to move a button.
        </p>

        <h2 className="text-xl">Bias for learning.</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. It's like bias for learning in some sense,
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Also it shows initiative to me, it's oh, this guy actually wants
          to learn. I think a lot of learning is just especially learning off
          other people. It's just like being nice to them in like civil ways.
          Thank yous don't mean too much. Yeah.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Just don't forget the fact that even though you're working online,
          you're doing, a job that now is very modern. Like these are your
          tools, right? I know a lot of people who have learned Google Docs, at
          a really high level, where they make like really good looking docs.
          Whether that's Google Docs or Excel or Figma or your coding languages.
          I think a lot of people get to that point where " I learned it enough
          where I can do my job". But I think deep study of the things you're
          doing are so important. Learning shortcuts or small details or
          learning the extra tiny little features makes all the difference and
          it doesn't take that much work.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Google Docs. I'll second. People won't be looking at your code
          all the time. Whereas if you're presenting, being able to do that
          quickly, effectively, it's probably more valuable than any of your
          hard skills.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You have to be able to sell yourself and if you're really comfortable
          with the basics and people can see that then it's a lot easier for
          them to believe that you're adept at other things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's selling yourself like everyone's a sales person.
        </p>

        <h2 className="text-xl">Release your unfinished ideas</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Is there any final comments you wanna leave?
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          There's a piece of advice I'm trying to take myself, which is don't be
          afraid to put things out there I was talking to this guy he is
          building this really cool thing for like habit tracking, he's building
          it for himself.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Once he put stuff out there, he found it a lot easier and a lot more
          rewarding because he's getting customers through this, he's building
          it for himself and it's made it more fun.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. So I think don't be afraid to show off about the failures . It's
          something I'm really bad at. So do, as I say, not as I do.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's the best advice. We all give advice that we wish we had taken
          ourselves or trying to take right now.
        </p>

        <JackSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm trying to try to ingest that. If you beat me to it, fairplay.
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          We'll kinda end the conversation here for people listening. Thank you
          so much for talking to me Jack.
        </p>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <div>
        <div className="flex justify-between">
          <h1 className="mt-0 text-2xl">/ Authors</h1>
          <div className="flex gap-3 ">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/apply">
              <div
                className={
                  "flex h-[28px] rounded-md border border-[#5F4BDD] bg-[#191933] pt-[3px] pl-1  pr-3 pb-1 align-middle font-button text-sm font-light text-[#C8C2EA]"
                }
              >
                <div className="mt-[2px] h-2">
                  <Image src={UpvoteSymbol} height={18} alt="" />
                </div>
                45 Upvotes
              </div>
            </a>

            <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DR03a3SOW2Jc&text=Just%20finished%20watching%20the%20@colossusfyi%20interview%20with%20@avischiffmann%21">
              <div
                className={
                  "flex h-[28px] rounded-md bg-[#191933] pt-[3px] pl-3  pr-2 pb-1 align-middle font-button text-sm font-light "
                }
              >
                Share
                <div className="mt-[1px] h-2">
                  <Image src={Share} height={10} alt="" />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="overflow-hidden pb-1">
          <div className="mt-4 flex flex-col gap-4">
            <a href={"https://twitter.com/willdepue"}>
              <LargeBlockContent image={WillPicture} title={"Will DePue"}>
                <p className="text-[#747485]">in</p>
                <p>{signatures[4]?.subject}</p>
                <p className="text-[#747485]">/</p>
                <p>{signatures[4]?.age}</p>
                <p className="text-[#747485]">from</p>
                <p>{signatures[4]?.location}</p>
              </LargeBlockContent>
            </a>
            <a href={"https://twitter.com/avischiffmann"}>
              <LargeBlockContent
                image={JackPicture}
                title={"Jack O'Regan Kenny"}
              >
                <p className="text-[#747485]">in</p>
                <p
                  className={classNames({
                    "text-[#e1b13e]": signatures[2]?.name === "Rhodos",
                  })}
                >
                  {signatures[2]?.subject}
                </p>
                <p className="text-[#747485]">/</p>
                <p>{signatures[2]?.age}</p>
                <p className="text-[#747485]">from</p>
                <p>{signatures[2]?.location}</p>
              </LargeBlockContent>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-0 text-2xl">/ Attachments</h1>
        <div className="overflow-hidden pb-1">
          <div className="mt-4 flex flex-col gap-4">
            {/* <LargeBlockContent image={GithubIcon} title="Explore project files via Github repository">
            <p className="text-[#747485]">from</p>
            <p>will/plagiarism.fyi</p>
          </LargeBlockContent> */}
            <Link href={"https://twitter.com/jackoregankenny"}>
              <a>
                <LargeBlockContent
                  image={TwitterIcon}
                  title="Follow Jack O'Regan Kenny on Twitter"
                >
                  <p className="text-[#747485]">via</p>
                  <p>twitter.com/jackoregankenny</p>
                </LargeBlockContent>
              </a>
            </Link>
            <Link href={"https://www.youtube.com/watch?v=AT529ofpCWc"}>
              <a>
                <LargeBlockContent
                  image={YoutubeIcon}
                  title="Watch video of this interview"
                >
                  <p className="text-[#747485]">from</p>
                  <p>"The Human Colossus" Youtube channel</p>
                </LargeBlockContent>
              </a>
            </Link>
            <Link href={"https://humancolossus.substack.com/"}>
              <a>
                <LargeBlockContent
                  image={BookIcon}
                  title="Learn how to replicate this project"
                >
                  <p className="text-[#747485]">teaches</p>
                  <p>APIs, Front-end, Simple Databases, Stripe</p>
                </LargeBlockContent>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <h1 className="mt-0 text-2xl">/ Comments</h1>
          <div className="flex gap-3 ">
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/apply">
              <div
                className={
                  " rounded-md bg-[#191933] px-3 pt-1 pb-1 font-button text-sm font-light"
                }
              >
                Comment
              </div>
            </a>
          </div>
        </div>
        <div className="mt-4 h-40 rounded-md border border-[#30303A] text-center">
          <p className="mt-16 text-[#A0A0AC]">Coming soon...</p>
        </div>
      </div>
    </Main>
  );
};

export default Index;
