/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Link from "next/link";
import Mission from "../../../public/other/Icon.png";
import { Main, Container, ScrollableWrapper, BlockContent, BlockWrapper, BuilderStory, LargeBlockContent, Header } from "../../components/basics";
import { signatures } from "../../configs/signatures";
import classNames from "classnames";
import Image from "next/image";
import PostIcon from "../../../public/other/PostIcon.png";
import PostImage from "../../../public/other/PostImage.png";
import UpvoteSymbol from "../../../public/icons/UpvoteSymbol.svg";
import Share from "../../../public/icons/Share.svg";
import BookIcon from "../../../public/icons/BookIcon.png";
import PostBackground from "../../../public/posts/MiguelPostBG2.webp";
import GithubIcon from "../../../public/icons/GithubIcon.png";
import SiteIcon from "../../../public/posts/JackSiteImg.png";
import NYT from "../../../public/icons/NYT.png";
import YoutubeIcon from "../../../public/icons/YoutubeIcon.png";
import TwitterIcon from "../../../public/icons/TwitterIcon.png";
import MiguelPicture from "../../../public/profile-pictures/Miguel.jpg";
import WillPicture from "../../../public/profile-pictures/PFP.png";

const MiguelSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image src={MiguelPicture} className="rounded-md" width={20} height={20} alt="" />
      </div>
      <p className="m-0">Miguel Piedrafita</p>
    </div>
  );
};

const WillSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image src={WillPicture} className="rounded-md" width={20} height={20} alt="" />
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
          <Image src={PostBackground} alt="Post icon" className="rounded-md opacity-80" height={250} />
          <div className="absolute bottom-3 left-3  p-0">
            <Image src={MiguelPicture} alt="Post icon" width="60px" height="60px" className="m-0 rounded-md" />
          </div>
        </div>
        <h1 className="mt-3 text-3xl">How I raised $42m in 4 days to buy the constitution.</h1>
        <div className="mt-3 flex gap-3 font-mono text-sm">
          <p className="text-[#747485]">about</p>
          <p>Miguel Piedrafita</p>
          <p className="text-[#747485]">/</p>
          <p>Oct 4th, 2022</p>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <Container title="/ Visit Websites">
        <ScrollableWrapper>
          <div className="flex flex-col gap-3">
            <Link href="https://www.nytimes.com/2021/11/17/business/crypto-constitution-sothebys.html">
              <a>
                <BlockWrapper>
                  <BlockContent image={NYT} title="New York Times on ConstitutionDAO">
                    <p className="text-[#747485]">via</p>
                    <p>nytimes.com</p>
                    <p className="text-[#747485]">/</p>
                    <p className="text-[#747485]">They Love Crypto. They’re Trying to Buy the Constitution</p>
                  </BlockContent>
                </BlockWrapper>
              </a>
            </Link>
            <Link href="https://miguelpiedrafita.com">
              <a>
                <BlockWrapper>
                  <BlockContent image={signatures[1]?.image || ""} title="My Projects & Experiments">
                    <p className="text-[#747485]">via</p>
                    <p>miguelpiedrafita.com</p>
                    <p className="text-[#747485]">/</p>
                    <p className="text-[#747485]">I'm a 20-year-old maker, and I...</p>
                  </BlockContent>
                </BlockWrapper>
              </a>
            </Link>
            <Link href="https://www.nytimes.com/2021/11/17/business/crypto-constitution-sothebys.html">
              <a>
                <BlockWrapper>
                  <BlockContent image={TwitterIcon} title="Follow Miguel on Twitter">
                    <p className="text-[#747485]">via</p>
                    <p>twitter.com</p>
                    <p className="text-[#747485]">/</p>
                    <p className="text-[#747485]">@m1guelpf, 33,000+ followers</p>
                  </BlockContent>
                </BlockWrapper>
              </a>
            </Link>
          </div>
        </ScrollableWrapper>
      </Container>
      <Container title="/ Watch Video">
        <ScrollableWrapper>
          <Link href="https://www.youtube.com/watch?v=345OLOy1tBk">
            <a>
              <BlockWrapper>
                <BlockContent image={YoutubeIcon} title="Interview with Miguel Piedrafita">
                  <p className="text-[#747485]">via</p>
                  <p>youtube.com</p>
                  <p className="text-[#747485]">/</p>
                  <p className="text-[#747485]">Subscribe to The Human Colossus youtube!</p>
                </BlockContent>
              </BlockWrapper>
            </a>
          </Link>
        </ScrollableWrapper>
      </Container>
      <p className=" w-full px-1 font-thin	leading-6	text-[#D2D2D8]">
        This is an interview between Miguel Piedrafita and Will DePue. You can watch the video version of this conversation on the Human Colossus Youtube
        channel. Edited for clarity and conciseness.
      </p>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />

      <div className="flex flex-col gap-3 px-1">
        <h2 className="text-xl">Who is Miguel?</h2>

        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Hi, I'm Miguel. Um, I am a developer. I work at a startup called Worldcoin and then in my free time, I just like, I build my ideas, I guess. I just
          try to build every idea that comes to my mind and have some fun while doing it.
        </p>
        <h2 className="text-xl">What I've done so far</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Can you just give a quick sentence on what you've done and what have you experienced?</p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, so I build maybe two hundred to a hundred things. The main ones are just like a lot of crypto tools a lot of like tools to make it easier to do
          things with crypto to get, to make it easier to learn solidity. I do a lot of building in the open and learning the open.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so when I was getting to crypto, I did all like very public ways that I was learning. The example projects I created, the things that I made
          there, all very publicly, and then also made a bunch of SaaS projects as a few years ago when I was in high school.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, the general idea is just like stuff that I think is cool and that I'm not happy with what everyone else has built it, and no one else has tried
          before. I just try and do that in a few weeks or in a month.
        </p>
        <h2 className="text-xl">My background</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. I like that. Yeah. Builds what you want. Of course, I think is a great position to have. And then, so what's your story growing up? Where are
          you from? What's your background in general?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, so I'm from Spain which is not a very entrepreneurial country. And for like, the story was always like, you go to school, you go to high school,
          you go to college and then you just get a job somehow. Yeah. And sure. But I even like in high school, in my free time, I was always just probably
          spending more time actually doing the whole coding thing than the actual homework and just like making my own little apps while everyone else was like
          playing piano or doing football or whatever.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so as I kept doing more during that, but I did go to college unfortunately in COVID years. So that didn't go very well, but I was still like, even
          in class, it's like coding a little bit doing these things. And at some point I was just like, I should really try to like, I dunno, stop holding
          myself back and figure out how it would be if I actually like the only thing that I did and...
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I was never like part of the whole SF racing startups thing. It was mostly like the more, I feel like Europe has a more bootstrap culture where trying
          to like, make something small and maybe grow a little bit without taking any investment and just make something is like sustainable, like good enough
          to pay your bills.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so that's while I did for a while, the other projects that were just like had no expenses were profitable from day one, maybe even weren't paid, I
          just made for fun.
        </p>
        <h2 className="text-xl">My school experience</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Tell me more about your school experience. I think a lot of people we're gonna reach are gonna be in the younger generations and who are still in
          school or still in college or just outta college? What was your experience in school? Like in terms of what you spent your time on. Yeah.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So in school luckily, I was like the kind of kid that just went to a library on recess and just wrote some code in the computers there. Yeah. And then
          luckily like I have no idea what grade it was cause like US system, but we got computers at first Android tablets and then computers, with mostly
          unrestricted access to the internet.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so after that, I was just like either reading or coding via the GitHub UI, even before there was like the web VSCode thing. It's like doing
          things, I guess with replit.com these days would be the way to do it.
        </p>
        <h2 className="text-xl">How I got started</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Yeah. Uh, All the time, like even when I should be doing something else.</p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          How do you get started into that? Do you remember what the first project you did was, or what really launched your love into building?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I remember I always was like this kind of kid that is just like pressing a lot of buttons, figuring out what it does. You open up a folder
          WindowsXP, that some files appear that are like semi transparent.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You delete those, you delete everything. You see what happens when you press buttons. And so I knew what coding was, I tried to learn it, but the way
          they tried to learn it is I found some books about C I downloaded it on my ebook and I was like eight, nine at this point. Like it didn't go great.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It wasn't achievable. And then I think when I was 10 or so I discovered this thing called HTML was like, sure, may not be a programming language
          depending on who you ask, but it's, it was much more exposed, you can just write something and it would show in the page if you wrote it wrong. Yeah.
          And so I went from there, I started just clicking [unintelligible], copying things, changing them a little bit, seeing what happened. Learned a little
          bit of PHP and then started doing that more. What happens if I do this? What I'm going to copy the example documentation for database interaction,
          just replicate this a thousand times.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I started doing a lot of open source. Cause my reason in there was just like, I am not very good at coding currently. So the best thing that I can
          do is put this thing in the open, make something that people want to use. And then people will kinda be forced to fix my mistakes. Yeah. That was like
          the reasoning.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so I got started to just I started using this framework called Laravel, I started reading all the PRs, came up to library, trying to understand
          what they did, being a little bit annoying and like commenting, "I don't understand what you did this way why you did not..." First of all that got
          the attention of people that did want to help me even to top mentors and creators of these framework.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And then also just help a lot in missing, everyday code coming in, understanding all of the internals of this thing that, yeah. So I, I kind of like
          started that way, just like reading a lot of open source and asking a lot of questions...
        </p>
        <h2 className="text-xl">How to learn by debugging</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Generally we wanna give people applicable things they could do right now, if you were gonna restart, imagine you're back in that time, but today in
          2022, like what would be the best path to do this? You just mentioned Replt.com is a good place to start, but it sounded like what you were saying,
          which is you started super simple and then kept messing around in a simple area and then kept getting progressively more complicated. And so like
          where do you recommend people start right now?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, my philosophy for learning even now, and I've said this a lot of times it's just like learning by debugging. So you throw yourself into a
          problem and then developers are really good at the debugging you just get better at it over time.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's probably like the, I feel like for younger people, it's a really good skill to find how to Google things, so that's the way you learn. At the
          very start, it doesn't work as well. But once you have something like one thing that you understand just try to get into a project, try to get into a
          situation where there's mostly that thing there's a bit that is new.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          For example, when I was learning of this crypto stuff at this time, I didn't throw my into smart contracts, didn't throw myself into Uniswap, all
          these things. What I did was I made a phone application, which I was like pretty comfortable with NextJs, TailwindCSS, all these things that I was
          using every day and was like "What's the smallest thing that I can like add to this."
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And there was publishing platform called Mirror.xyz that was using at a decentralized storage called ARWeave and that thing called a GraphQL API. And
          I'm like, okay, I'm not familiar with this decentralized storage thing, but I've used GraphQL before. So this has like mostly things that I'm familiar
          with but then a small little thing that is new and doing that, I learned a little bit of how ARWeave works and that helped me then understand more in
          crypto. So that's even from the start, that's the way that you learn.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          To be clear, I wrote that down in my notes back when you said it in that interview, I told so many people learn by debugging before, so yeah, it's
          definitely, it's a great insight. I think I give a lot of people that advice.
        </p>
        <h2 className="text-xl">My builder journey</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So yeah, can you just give us the general story of like your entire builder journey and how you got to where you are?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So, Like I said I go started at around 10 and then it took me like two, three years to actually learn how to make something like end product where I
          was just like doing learning PHP. I learned at first, yes, like using Bootstrap. So learning CSS, learning a little bit of how design works, learning,
          running, like all of these things really slowly.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And then I made a full app. It took a year to make an app that generated docs from your Github things I decided maybe people would pay for it and I
          learned that like making an app, making something that people wanted two completely different things. Yeah. So I did a bit more of that I made a bunch
          of projects.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I made one that people actually liked and I started getting better at marketing. So this was like the indie maker journey where I was like, there was
          all these communities WIP.chat, maker log. All of these are dead now GenZMafia as well. I was just like, I am an indie maker, I am seeing all of these
          people are just like making apps like doing that in public, making these little apps, having fun.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Then I went to college for a few months, I lasted three months in there and doing that at first. Especially the end of it I was just like actually
          saying, "Hey I want some money", like some people really I had been turning offers from everyone who was "Do you want to do some developer work for
          us?"
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          No. And then I say, let's go with a few dozen. So I did bunch of like contract work, building bunch of apps and then after I quit college I guess, I
          happened to be like in the whole NFT boom or a little before that.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so thanks to a few friends I got into crypto, I got into crypto with a small community of people that already were in there for a few times. And
          so I just was really annoying for a few months, asked them a lot of questions, made all of these little projects and got decided if I'm not going to
          go to college, might as well just get a job so that I have a schedule and not just fucking around.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And so I got a job at these crypto startup Showtime and I did that for a year doing front engineering there. Actually their first employee. And
          that helped me learn a lot about how crypto works really. Yeah like implementing an NFT marketplace from scratch, I started learning smart contracts,
          even though I wasn't doing that there all of those things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And then there was a time where I felt like I had hit the ceiling of what I could learn there. And so I took two months to just do a bunch of my own
          things that require more time than I had at Showtime. And then after that I joined Worldcoin with as a smart contract engineer, do I end up doing a
          little bit of everything and yeah. I mean, through all of this, I've also been doing little projects and now I'm like actually taking the time to work
          on some bigger ones.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's definitely such an interesting journey. Also. You worked on a bunch of, I think like you're definitely underrating the scale and impact of a
          lot of your projects.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. There was like the ConstitutionDAO stuff there's a bunch of stuff that I didn't release that I think is really cool. Yeah, no, totally. It also,
          like you're also probably one of the most prolific builders I know in terms of release. I don't think there's many other people who rival you in terms
          of release schedule in our generation right now.
        </p>

        <h2 className="text-xl">Big steps in my career</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So when you talk of these stages and you talk about going from of messing around and then a stage when you start kinda learning by debugging, and you
          more about getting into the marketing and building a product people want, which is its own kinda battle. And then, going back to the projects and now
          coming to the joining a whole organization and working in an environment, can you kinda delineate more of these kinda jumps? What are the things that
          were hard to kinda transition to?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I would say the only thing that actually felt like a jump was like going from not having a job to actually working with a team. So I hadn't really, I
          had worked with friends before, but it's not the same thing. And then after going from like a small startup where it was the first employee to
          Worldcoin, which is like a company with more than a hundred people.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The only jumps were just like, from just like doing everything by myself for years to actually working for a team, having a designer, which is
          insanely cool. The fact that if something breaks, maybe it's not your fault. Yeah. Or like you don't have to come up with everything. That was really
          cool. And I am still not awesome at just like actually day to day working with a team, I have a lot to learn in that regard.
        </p>
        <h2 className="text-xl">How to learn to code & what courses miss</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think a lot of people haven't made these transitions from, starting out and learning how to code to progressing forward. I know a lot of people
          struggle to make the jump from " I do a coding class or take CS 50, or, do a starter project". And then moving further into the kind of debugging and
          building more projects. People are like "I know how to do 'for loops' what I do next?" Do you have any advice for people trying to get forward and
          kinda break that that inflection point?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I feel. The reason why I don't like courses like boot camps or CS 50, and I have never done CS50, but like my girlfriend went through it
          recently. Yeah. But I feel like it teaches you how to implement logic.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But they don't do an awesome job at explaining how, like, how you come with it. Like the experience that I've have talking to some of these people is
          they understand how a for loop is, they understand how do you use it, but when you say them I want you to build this thing. They are blocked cause
          they have no idea how you would even start doing that.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Like they, they know that if they need a for loop, they know how to use a for loop, they don't know when they need them. And just like in general, how
          to do this. And I feel like that's why I said debugging I feel like it's the skill that allows you to do that and debugging , I guess it's more of a
          specific thing I use it really generally, cuz I feel like debugging is just like you have a problem, you get yourself out of it in a way.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But I feel like the thing where I'm just like, "oh, I want to make a Tweet where the replies automatically get turned into images with
          StableDiffusion", that was the thing that I did recently. Yeah. How would you start doing that? There's a couple ways that you do it, but you, maybe
          you just pull every few minutes you call and you get the latest replies.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          For those replies you run StableDiffusion on them somehow. Maybe there's an API. You call that API, you get the results. Then you have to post Tweet,
          how do you do that? You have to upload the media to Twitter, then you have to post the link. Maybe there's some rate-limits that you have to work
          towards, right? That process from this is what I have to do to these are like actual, actionable steps. I find that is the part that most people
          struggle with.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          To just like, be able to do that. And now I do it automatically where I even really have to see and think of it. I just like automatically went and
          coded it, but that's like the skill that you are not getting in CS 50 and you are not getting in all these boot camps where they will tell you make a
          blog and this is like the spec of the blog.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And maybe you don't need it for working at Netflix where they're going to keep you a spec. You probably still need it. Unless your like, working at
          IBM or Salesforce, whatever the fact they do. But if you want to do your own things, if you want to be able to make your ideas you do need that skill.
          It's probably like the most important thing that you're going to get. Yeah. And also a shit ton of patience..
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Patience is a big thing. It's gonna take a while. I'm teaching my friend right now, how to build React. He's been in real estate for a very long time
          and he, now he wants to build his own startup and is kinda trying learn to code. I've been walking him through it. And man, it is tough because you
          realize that when we talk to someone and try to teach 'em how to code, people think we've just kinda invented this magical skill.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          What you don't see is that four or five years of just messing around doing something super simple and slowly moving forward. And then you're like, oh,
          I just do all these commands and do these shortcuts and then you're done and people are just shocked and amazed. It's really that patience.
        </p>
        <h2 className="text-xl">How to think like a coder</h2>

        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And I feel like I, I do have an advantage. A bunch of us do have an advantage, but like we started really early. Yeah. And for example, me, I
          started at 10, probably like a huge way of how my brain works, even like completely different from coding, has been influenced by like me thinking
          pretty logically for these things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Maybe if you don't think like this at all, it's going to take you more. The whole like everyone can code, I do think everyone can code, for some
          people it's going to be way harder. We should acknowledge that, but... yeah no that's true.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I feel like if I have a physics problem, which I found some people do not do, if I know it's possible and I have a limited amount of, I dunno,
          formulas that I can apply to this. So it's kinda like a password, you have to find the piece that clicks. And it's like the one that does after that,
          where are people might just keep trying the same thing over and just get lost.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And you can just do it methodically and doing it logically. Like it ends up working. And I feel like coding is the same thing with the debugging and
          stuff. You keep on tweaking things until you get a different error and that's progress and you've made it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And then maybe it took you an entire day to center the fucking button on CSS, but you are a step forward now. And that's why I mentioned that you need
          to have patience. There will be a time where you're trying to do something really simple and it will take you days or weeks.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I've been there, I'm even here now, but like I've made this app that like crossposts your Lens posts to Twitter. Yeah. It cannot deal with images.
          It hasn't been able to deal with images for two months and that's because, Twitter API sucks, but I also haven't had the time and it's just like I've
          been stuck there. I, there were moments where I tried and I was like, okay, I'll do this later. This is hard. Yeah.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I could probably just sit there for 48 hours and solve it. But that's 48 hours of patience that I have to put into that energy and everything. And
          that is something that I feel like people don't really sometimes expect when you get, when they get into this, this is going to be hard.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Like hard in sense, like the simplest things. Once you master the part of doing like the flow control, I guess like the, "First I do this, then
          I do this, then I do this" the only hard part really is sometimes you write code that should do one thing and it doesn't do a thing and you're left to
          figure out why that happens.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And that's... it's a hard skill. Yes. Yeah. It's definitely very different. It's more that I think a lot of people are used to in the world are doing
          skills that are very linear. If I'm gonna write an essay, I have everything. I have a page, I have to fill it with words. It might be hard for me to
          generate the right words.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But end of the day, there's a linearity to my progress. And I think coding sometimes when you're getting started, is infinite paths choosing one and
          trying to get there. I think I can definitely people can struggle with. It's kinda a new dimension.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">And that's the other thing I've been reading um, [unintelligible] recently.</p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So she started to pick up some coding. She is she has a bunch of things, but see, one of the things that's really does, like doing surveys and
          analyzing data and she started to pick up Python to process some of this data faster and she was saying her reaction to coding. And she was just like
          saying, I felt like there was a thing where you just learn how to do these things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And from talking to people that want to help me when something is wrong, I realized that it's just everyone just says, okay, like, how exactly do you
          want to do it? They are like five different ways just to do it. No one is better than the other. It depends on what exactly you want to do. And it's
          going to make something easier or harder down the line.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It seems like the intuition for most people is like that things are not like that. Yeah. But things are definitely like that. And I feel, that's maybe
          like the kinda thing where like, when you are learning to code that you maybe don't see, cuz you're just like, oh, here's an new statement it's a for
          statement.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Now you have to implement a thing that returns the fibonacci... Like you get really detailed specs for most of the time. And this also my objection
          with things like a Buildspace.so and all of the things that are trying to build bootcamps for crypto, where like you will learn how to write a smart
          contract if you're given a very detailed spec.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But most of the hard part for smart contracts is actually coming up with spec and they're not going to teach that.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Right. Yeah, no it's kinda paradox of choices or like getting there is the difficult part. One note I would like to go back a tiny bit to the thing we
          said earlier about the fact that we all started young. And I'd say for one, remember the fact that, you're looking at a certain amount of time that
          you have to learn in, and so obviously the people who started young are gonna be more successful faster.
        </p>
        <h2 className="text-xl">Finding success in your projects</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But in general, I think there's one thing that I would like to point out, which is when we're young, when you're messing around with an HTML page,
          like if you change a word or make a new heading, that's a success. Like I remember when I was messing around at the start, I changed the word, I made
          it print out hello world. And I'm like, hell yeah, let's go.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Versus now I think a lot of people, if they're getting started and they're oyr age or you're older, right? You're like, you're looking for this
          kind of final success. And your idea of success is I wanna build a whole app and website. Like you gotta start small and learn that progress and learn
          to start. I think messing around is a great way to start. Don't assume you're gonna build an app in a second. It's take some time...
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I haven't hit that now. This week I was feeling a little bit unmotivated, like sure. I did the Stable Diffusion thing, but I felt I haven't had this
          success moment in a while. Other than that, that I didn't really use, I just put it out there for people to have fun and it was fun, but I like, I, if
          you go too long or like working really hard, not having that success moment, that's when you burn out and that's where you like either quit coding or
          just like really struggle.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And so if you take on approach that is going to take a year, you're going to maybe go a year without that success thing. And that is, you're
          probably not going to go a full year. You're probably going to, and that's why people don't complete side projects. And even I have this thing I've
          been working for two months it's probably the best thing that I've, or like the thing that I'm the most proud of from everything that I've ever built.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But it's maybe like a little... it is 10% away from shipping and there's a whole like thing where like you do 80% of the thing and then you have to
          the other 80%. Yes. It's kinda like that where I'm just like I'm really desperate for the like success moment there. And I have to release that, but I
          cannot release that cuz it's not ready.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so you especially at the start now, I'm just like, okay, I can do that gradually. I have learn how to manage that at the start. You have to avoid
          getting yourself into that. And that's why I mentioned doing like this small little projects that have a new piece. Cause that's a really easy way to
          have something you can do in a weekend or maybe in a day or like max in a month and you can be done after that.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You can be done, never come back about it again. It's something that works and you can show. It's going to be something that has an end state that is
          clear and that it's quick. And so you're not going to run into the issue where you don't get that moment. Totally.
        </p>
        <h2 className="text-xl">Keeping motivated</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          We talk about this in Colossus too like tangibility is so important, right? Limit your project to under a month. Or even I say two weeks, like by the
          end of the two weeks, you're not gonna be motivated anymore. We talked about this with Avi last time. Keep your product small and keep 'em tangible.
          The problem is most people can't just work forever without a success point, as you're saying right now. Limiting yourself down is so important.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Even now when I'm like doing bigger stuff it's just you build a thing, you release it after a while and then it's done. You don't touch it. Maybe you
          come back to it, but you don't come for back to it for months except for bug fixes and stuff. And you need to kind of like combine for you and then
          maybe you come back to it and just like you don't like it. That's fine. That happens to everyone. Maybe you can like then go and fix it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          One of the biggest projects that I released Sitesauce.app I redesigned the front end completely from scratch four times. And I did three of those
          things before releasing, which I should not have, but the fourth one was just like, okay, it's done. It's been a year. I'm going to rebuild this thing
          in ReactJS.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It was beautiful. Why not? I want to play around with it. I want to design a new site. My designs still have changed, whatever I, when I did it and it
          affected no one. So that's the kinda thing that you can do, but I can do that because it's launched now. Like it's not holding up the launch. When I
          did it before that thing took eight months to ship, it just have taken four.
        </p>
        <h2 className="text-xl">How to choose your battles</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Let me go over some other things and just some advice that you would give to young builders. Can you name three experiences you felt were most
          important to getting where you are now?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The first thing that came to mind, just as a life lesson that came out of nowhere is, as I mentioned before, I spent one year building these amazing
          apps, like actually took any shitty documentation that people have on Github and turned into a beautiful project, better than like read the docs or
          whatever was out there for free, automatically cash, whatever.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think one person paid for it and I knew them. And then a year after I built a thing that turned your articles into audio with AI. And I built it in
          a week and it got like my first actual money where four months it was doing like maybe $50 a month, which is not a lot, but again, I did, I had no
          expenses.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Like the contrast of making, spending a year, making a, and then spending at week making a thing and the thing that works is the week one. That
          actually taught me a lot about just like where to actually focus... where to focus energy, like how to choose ideas.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Choose your battles is a good message. Literally Avi Schiffmann the exact same thing in the previous interview, he was like, yeah, like the
          analytics page, he did took three days, whatever it took one day or a couple hours and took no time.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The other project took forever. I had the same thing, like I built like... I feel like Avi's an amazing example of this. And I'm really good friends
          with Avi, because like he did the UkraineTakeShelter thing. He has probably saved more lives there than like any other people on the ground. Yeah.
          Like he, that took him a weekend to get out of the ground.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And so the leverage that you can get from actually picking your battles is insane. Like he could have gone there to Ukraine, like actually, I don't
          know, do first aid or whatever on the ground for years and not come close to the amount of people that have he has saved now. Yeah. So I feel like
          that's the really extreme example of why choosing your battles matters.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And also Avi describes himself as a shit coder. He says terrible coder. And it's you realize the fact that it's not actually about necessarily your
          coding skills. It's mostly about think about your battles, choose your battles and then build something and commit and I think you can create a lot of
          impact.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I just had the same experience too. I built this app for a month. I was doing like this, like I built a whole newsletter service and took me a while
          and was a surprisingly, difficult project. It was using a bunch of languages. Took me a month or whatever. And then I did the Plagiarism.fyi project,
          where I was like gonna beat MOSS. That took me four hours of research and two hours to build the actual website. And I launched it and it got 300
          retweets or whatever. And I was like, what the hell?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Like you spend so much time, on one project but the one that blows up and you're like, "I spent no time on that".
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I feel like the reason way that worked is... there's this thing, I call it "Coding Adventures". I got the name from like a YouTube channel that I
          really like that does all of these coding adventures - you can search on YouTube to find it - which is just you go down a rabbit hole and you
          recommend that rabbit hole. And then you build something to show for it. Just like package it so that the time that it took you to go down that rabbit
          hole which is maybe a few hours or a day here someone can get that from an hour of reading or maybe even less.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I dunno, at least I feel like all of the, most of the cool people actually really like rabbit holes. And I have had making a chess engine in my
          project list for a big while and I probably still even do it sometime. But I got the experience of actually doing that, all of that, served to me
          without having to do any of the work, like sure.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          If you're actually looking to monetize, maybe you could do one of this every month and 20 later, that's probably not a good idea. You'll burn out. But
          as a thing of I want make something that people will like, that's a really good cane. Just do any amount of research on something that a lot of people
          don't look into and then like package it for them. That's great.
        </p>
        <h2 className="text-xl">How to feel proud of your work</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Another connected point to here is the fact that like the things that are gonna be successful and people like, and the things that you're proud of in
          terms of what work you did and projects that you love the most are not always gonna be the same thing.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's important to basically focus on you wanna care about making things for people that people enjoy and people like, but you also wanna derived your
          identity and what you're proud of out of the things that you actually felt were most important. Like for me, there's that 1 month project that I
          actually am very proud of the code I wrote there, but like at the end of the day that service shut down versus the one that spent four hours.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I like the fact that everbody liked it. And of course my goal is to make something that lot people like and enjoy and use. But actually the thing I'm
          most proud of is actually the things that nobody sees sometimes and make sure that you're not always, I think you wanna affect people in the world,
          but don't extract your value on how...
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I feel like the good balance is something that you enjoy building and then also something that other people would enjoy using or reading about. And I
          feel like that's really obvious to say, but it does make a lot of difference when you have those things. Cause if you are just like making something
          for others, you'll burn out, or you will not care about it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          If you're just making something for you do risk getting into a cycle where like you finish and then you're like, okay, when I'm done like that doesn't
          have that satisfaction that you get otherwise. And so that's like the sweet spot the other, I guess big point, the first one was I think choose your
          battles.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The second one I would say is just like document your journey. And that goes for tweeting about things that goes for making, maybe making things
          right. I find that my best ever content that I did on crypto at all is probably like the first month that I was learning and I was making a thread of
          "Hey, I just learned this. Here's how it works. Here's my perspective from someone who did not know that thing to someone that now does know that
          thing."
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          "I am currently in the middle of this. I have the most context that I will ever have in this situation." Cuz believe it or not tomorrow, you're going
          to lose some of that. Now when I try to do introduction to crypto things a year after it's I lose that perspective and I probably lose focus and I
          lose a lot of things. I feel like that's very important. And you also can build a personal brand, people can follow you, whatever, that doesn't
          matter. The thing that matters is you're you're going to be thankful of it yourself. Totally.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And also what's interesting is I had the exact same experience. I built my chess engine or whatever recently. And at the end of the day, it's not that
          good of a chess engine. It sucks. Nobody used it or played against it really. But I wrote an article on like how I built it and like my story of like
          how I learned everything I learned. And the chess engine got a hundred people using it and then that webpage got like a million and a half, like
          visitors that were like, whatever, how many months it was.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And you're like, wait, like you realize that even if your app sucks or the thing you built, your product is not good. The learnings you have from it,
          chances are, there are so many people in the world that will learn from it or could copy it or use it.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And also the thing is if two years from now you need to build something that was related to chess engines. You may remember some of it but that
          knowledge is completely lost. It's just you are not throwing knowledge away.
        </p>
        <h2 className="text-xl">Advice to my younger self</h2>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">So let's just change it up a bit. What advice would you give to your younger self?</p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Feel like, yeah, this is probably not applicable to anyone, to everyone. But I, as I said, I grew up in Spain, Europe doesn't have this entrepreneurs
          culture, you're supposed to go to college and then find a job. And I feel like I could have been a little bit more ambitious, not with like my life or
          whatever, like the place where I was doing or what I was saying.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Okay. Yeah. Let's like make a thing that like makes something one person better. I. I still feel like for most of the things that I did were pretty
          cool. Like the whole turning all the articles into audio. Yeah. I was the first one that did that. And then even now people are still like making an
          app like that every month.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So I'm proud of that one, but there were all things like the "Make your talks slightly prettier" but then I took a year to build that thing. I did
          learn a shit ton from that, but I feel like it has spent more time just like building something that where... It's like dreaming a little bigger.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I still don't want to like, go be a founder, make a startup, do this like incredibly big thing. That's at least not for me yet. Yeah. But you,
          sometimes you have to think it's probably... is it really the best thing that I can do in a year to make a thing that could have been a template that
          you can set up in an hour.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I think that's the thing too, which is I think everyone can usually benefit from higher risk taking behavior, it usually works better. You know
          all the guys who did Basch.io, like they were doing like synthetic content media, I think they were all teenagers or 15, 16, 17 at a time.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And they're in Gen Z Mafia saying "Oh, we're gonna build synthetic content media, or like you automatic, you write and then it creates like you write
          a doc and creates someone talking about it synthetically." I'm like that's like far out of, I think, any of our realms of what we could build, but the
          whole point is like jumping into something that's hard or difficult or cool it's a great way to push yourself. I We can just lose track of pushing
          ourselves as much we did at the start. Yeah. And our learning rate goes down and the thing you've gotta make sure is it constantly check if you're not
          learning anything more and then make everything harder.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And I feel like the thing is just it goes back to learning by debugging. Just if you throw yourself to a harder problem and you wanna debug yourself
          out of it, you're going to learn a shit more than if it was like an easier problem. Feel like it always goes back to that and choose your battles.
          Those are like the two things that it's always the same.
        </p>
        <h2 className="text-xl">Documenting your journey</h2>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And then, so question, is there anything specific, most valuable skill you learned when you were younger? What's a skill you think maybe other
          people don't have or people who are not builders don't have that you, you learned and you felt was valuable.
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I feel like probably one of the most valuable skills that I've learned is just like communicating in the sense of "dev rels" do a lot of that, what
          you do is like you are good at explaining to other people what you are doing. And you're good at to explain to other people how things work.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's a really rare skill from what I've seen and that went against my intuition a little bit. Like part of my job at Worldcoin now is just like
          going to places and explain to people how to use it. And it turns out that not a lot of people are amazing at that. But if you have that the whole
          learning in public thing becomes like at least an 10x more valuable.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And that is I do believe that is a skill that you can develop, especially like, um, I'm not native English. I really struggled with my pronunciation
          at the start. There's a lot of stuff, but I feel like I still managed to like, do a pretty good job at explaining concepts and explaining code and all
          those things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You have to be a good storyteller in a way, if you think of I dunno Steve Jobs, or like literally anyone else, there I mean, Steve Jobs wasn't even a
          coder, but like even for the coders.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          If you think, if you look at like the people that you actually admire and you probably have your examples, like how, like Jordan Singer, Adam Wadam,
          all these people. One of the things that they have in common is that they're not only great coders, but they're also like really great marketers or
          storytellers or they're great at all of these communication.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think that's true with, as you said, literally everyone, like Elon Musk, for example, who also, isn't the greatest at speaking and he's awkward
          during events.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That being said, though, I'd remark him as like one of the best storytellers out there right now. The amount of people he's converted that really
          believe in his mission, right? It's not by chance that everyone just loves what he's doing. He's really sold it. So like storytelling as like one of
          the most foremost features you need to build something is I think is so true.
        </p>
        <h2 className="text-xl">What I'm working on now</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So what are you working on right now? So tell me more where you are right now. What's your vision for the future?
        </p>
        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Basically the answer to that is a few months ago, for the first time ever in my life, I usually work really short term. I didn't even know where I'm
          going to be in like a month, like actually living physically in or what I'll been doing. But I actually sit down and say okay, in 10 years from now
          what do I want to have built. For the first time ever, I have never done that. I feel it's a good thing that I had never done that cuz before I did
          like I'm I feel like I'm at the first time in my career where I can actually have that perspective.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yes. So maybe that's not necessarily advice, but I did that for the first time and I came up with four bullet points and so now I'm figuring out these
          are like things that will take multiple years to build, which is also like I have never spent more than a year building anything. I'm figuring out how
          to put these bigger than ever things into motion.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And at the same time, yeah, I've been really working into improving my design skills. I feel like I was a good designer. People said that I had my own
          style, I feel like I just like stole styles and I mix them up.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          There are still like some designs that I'm just like amazed with, especially the ones that use like really... Animations like I feel like animation
          that we were mostly overlooked. Yes. And then all of this, that polished where you just go back to the bits and you can feel like, I feel like the
          dynamic island the came out recently is example, a great example of this, where it feels liquid and that's really hard.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And you can tell like someone spend a month. Yes. Making sure that the animations that were like incredibly clean. And so I that's like the part that
          I feel like I'm missing, cuz I really admire the people that can do that. And I do not know hot to do that end right now, so I am apart from the other
          stuff also trying to learn how to do more of that and how to do more animations emotion and all of those things.
        </p>
        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Totally. No, that's totally new frontier. That sounds awesome. I would love to get into that more. I'm trying to do more video stuff, but like
          animations. Totally. They make everything better, just adding that extra 10%.
        </p>

        <h2 className="text-xl">How to reach out to me</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So how can people reach out to you? If they have questions or any, they want help or some advice on a project, can they reach out to you on Twitter or
          anywhere?
        </p>

        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. So I am fortunately, or unfortunately, extremely online with capital letters. So I'm going to be on Twitter, a lot. I will say though, I get an
          insane amount of the DMs especially now that I'm in crypto and sometimes I do not have the time to answer all those. So I, I can, I, unfortunately,
          I'm at a point where I cannot promise that at least if someone spends the time, you can see that and I will do my best.
        </p>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But I cannot promise anything. I also have a website where you can find with, for everything else that's that's link on my Twitter. Let's go with my
          Twitter for everything. Yeah. It's @m1guelpf .
        </p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">You have like 33k followers, right? So I'm sure you get a lot of questions.</p>

        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Yeah!</p>

        <WillSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So any last points, like any last word or thing you want to get in earlier, or point to all the young builders out there?
        </p>

        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Uh, I, I, I would say. Learn by debugging, choose your battles, and document your journey. That's like the three things that you should take away from
          this. Yeah. Those are like the things that took me 10 years to learn. It's been 10 years now, but yeah, it took me 10 years to actually learn not only
          what those, the things, but understand what they mean.
        </p>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. And I like, that's like the biggest boost that I can give you to do anything at all, but you should remember those three things. And you're
          like, when when you see yourself in your, in the, in one of those situations, those would probably would come to your mind.
        </p>

        <WillSpeaking />

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Thank you so much for coming man. That was a great conversation.</p>

        <MiguelSpeaking />
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Yeah. Thanks for having me.</p>
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
                20 Upvotes
              </div>
            </a>

            <a href="https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=345OLOy1tBk&text=Just%20finished%20watching%20the%20@colossusfyi%20interview%20with%20@m1guelpf%21">
              <div className={"flex h-[28px] rounded-md bg-[#191933] pt-[3px] pl-3  pr-2 pb-1 align-middle font-button text-sm font-light "}>
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
              <LargeBlockContent image={MiguelPicture} title={"Miguel Piedrafita"}>
                <p className="text-[#747485]">in</p>
                <p
                  className={classNames({
                    "text-[#e1b13e]": signatures[2]?.name === "Rhodos",
                  })}
                >
                  {signatures[1]?.subject}
                </p>
                <p className="text-[#747485]">/</p>
                <p>{signatures[1]?.age}</p>
                <p className="text-[#747485]">from</p>
                <p>{signatures[1]?.location}</p>
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
            <Link href={"https://twitter.com/m1guelpf"}>
              <a>
                <LargeBlockContent image={TwitterIcon} title="Follow Miguel Piedrafita on Twitter">
                  <p className="text-[#747485]">via</p>
                  <p>twitter.com/m1guelpf</p>
                </LargeBlockContent>
              </a>
            </Link>
            <Link href={"https://www.youtube.com/watch?v=345OLOy1tBk"}>
              <a>
                <LargeBlockContent image={YoutubeIcon} title="Watch video of this interview">
                  <p className="text-[#747485]">from</p>
                  <p>"The Human Colossus" Youtube channel</p>
                </LargeBlockContent>
              </a>
            </Link>
            <Link href={"https://humancolossus.substack.com/"}>
              <a>
                <LargeBlockContent image={BookIcon} title="Learn how to replicate this project">
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
              <div className={" rounded-md bg-[#191933] px-3 pt-1 pb-1 font-button text-sm font-light"}>Comment</div>
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
