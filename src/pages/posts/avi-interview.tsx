/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Link from "next/link";
import {
  Main,
  Container,
  ScrollableWrapper,
  BlockContent,
  BlockWrapper,
  LargeBlockContent,
  Header,
} from "../../components/basics";
import { signatures } from "../../configs/signatures";
import classNames from "classnames";
import Image from "next/image";
import UpvoteSymbol from "../../../public/icons/UpvoteSymbol.svg";
import Share from "../../../public/icons/Share.svg";
import BookIcon from "../../../public/icons/BookIcon.png";
import PostBackground from "../../../public/posts/AviPostBackground.png";
import SiteIcon from "../../../public/posts/UTS.png";
import SiteIcon2 from "../../../public/posts/nCovIcon.png";
import YoutubeIcon from "../../../public/icons/YoutubeIcon.png";
import TwitterIcon from "../../../public/icons/TwitterIcon.png";
import AviPicture from "../../../public/profile-pictures/Avi.jpg";
import WillPicture from "../../../public/profile-pictures/PFP.png";

const AviSpeaking = () => {
  return (
    <div className="-mb-3 flex gap-2">
      <div className="mt-[2px]">
        <Image
          src={AviPicture}
          className="rounded-md"
          width={20}
          height={20}
          alt=""
        />
      </div>
      <p className="m-0">Avi Schiffman</p>
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
            height={313}
          />
          <div className="absolute bottom-3 left-3  p-0">
            <Image
              src={AviPicture}
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
          <p>Avi Schiffmann</p>
          <p className="text-[#747485]">/</p>
          <p>Sep 6, 2022</p>
        </div>
      </div>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />
      <Container title="/ Visit Websites">
        <ScrollableWrapper>
          <div className="flex flex-col gap-3">
            <Link href="http://ukrainetakeshelter.com/">
              <a>
                <BlockWrapper>
                  <BlockContent image={SiteIcon} title="Ukraine Take Shelter">
                    <p className="text-[#747485]">via</p>
                    <p>ukrainetakeshelter.com</p>
                    <p className="text-[#747485]">/</p>
                    <p className="text-[#747485]">
                      An independent platform conn...
                    </p>
                  </BlockContent>
                </BlockWrapper>
              </a>
            </Link>
            <Link href="https://ncov2019.live/">
              <a>
                <BlockWrapper>
                  <BlockContent image={SiteIcon2} title="nCoV2019.live">
                    <p className="text-[#747485]">via</p>
                    <p>nCoV2019.live</p>
                    <p className="text-[#747485]">/</p>
                    <p className="text-[#747485]">
                      Live coronavirus dashboard tracker...
                    </p>
                  </BlockContent>
                </BlockWrapper>
              </a>
            </Link>
          </div>
        </ScrollableWrapper>
      </Container>
      <Container title="/ Watch Video">
        <ScrollableWrapper>
          <Link href="https://www.youtube.com/watch?v=R03a3SOW2Jc">
            <a>
              <BlockWrapper>
                <BlockContent
                  image={YoutubeIcon}
                  title="Interview with Avi Schiffmann"
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
        This is an interview between Avi Schiffman and Will DePue. You can watch
        the video version of this conversation on the Human Colossus Youtube
        channel. Edited for clarity and conciseness.
      </p>
      <hr className={"mt-0 border-0.1 border-solid border-[#2D304F]"} />

      <div className="flex flex-col gap-3 px-1">
        <h2 className="text-xl">Who is Avi?</h2>
        {AviSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I would introduce myself as a 19 year old internet activist, which
          means absolutely nothing, it's a made up term. I see it as I make
          these websites based on things happening around the world that,
          because the internet is so widespread and so accessible, you can make
          tools that can help so many people just from laptop in your bedroom.
          I've got the coronavirus tracking website, which I made with just a
          laptop, sitting on my bed, watching YouTube videos, figuring out how
          to cobble it together. Now it has, hundreds and hundreds of millions
          of users. That's the power of the internet and internet activism.
        </p>
        {WillSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Can you just tell me about what that process is like, how did you come
          up with that idea?
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          There's always something happening around the world. Even like right
          now, there's the monkeypox disease, I was thinking I could make a
          tracker for that, or a few months ago there was the baby formula
          shortage. I could totally spin up a website that like helps, find
          where it's available or let people share that they have it and sell
          it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You just gotta pay attention and those are global issues, like locally
          there's also gazillion things. I have no idea what the local issues of
          some village in India is but I'm sure you could use technology in some
          way to help better that situation. I really feel like it's never been
          an easier time in a 13 billion year history of the universe to just
          learn how to do super complicated things.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The amount of content that's on YouTube in all languages, and that's
          just YouTube, for learning how to code or anything is incredible. You
          can be in the most middle of nowhere place with a Chromebook and
          figure out how to do the most complicated coding.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You didn't even need coding. You can even learn surgery. I just hope
          like my doctor isn't learning it, you know, through YouTube, but, you
          can just learn so much and get these jobs paying you hundreds of
          thousands of dollars, overseas. These days, much work is virtual, like
          we're virtual here. I don't need to actually fly over there to
          California for us to talk like it's pretty incredible.
        </p>
        <h2 className="text-xl">My backstory</h2>
        {WillSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm just gonna walk it back a bit, just so people can learn more about
          you. Where are you from? What's your background.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Sure. I currently live in Washington state around Seattle, but I
          wouldn't say I've grown up anywhere specifically. I've lived in five
          countries I was born in LA, but then when I was two months old, I
          moved to London and then Scotland, France, and, England I've lived in
          Israel too a little bit. In the United States, seven different states.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So for school then, was that middle school, high school experience
          just swapping around schools around the world.
        </p>

        {AviSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Mostly elementary school. I'd say I was in a different elementary
          school, like every year, pretty much. Now I guess I'm a college
          student, I'm also a student at Harvard, I suppose, but, you know, I
          kind of hate, like, it's not like a lot of people would say Avi
          Schiffmann, Harvard student I don't really see it as a major part of
          my personality.
        </p>
        <h2 className="text-xl">My experience of school</h2>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think we're gonna connect to a lot of kids around the world who have
          a hard time at either middle school or high school where they're
          sitting around and like, my classes are boring or they're not exciting
          me or I'm excited about something I'm going home and teaching myself.
          Did you have those experiences? What was your high school, middle
          school experience?
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I had a very interesting time, most specifically, probably in high
          school, I was a terrible student. I had a 1.6 GPA. I actually did drop
          out of high school, halfway through junior year, because my projects
          were just pretty successful and I was like, why am I just chilling
          here? I should just get my GED, everything was going online that time
          anyways was the pandemic. I was the kinda student that I was failing
          my physics class or I had a C minus in there, but at the same time,
          I'm winning my school's science fair for a physics based project.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So, yeah. You know, it's not that I was not interested in the
          subjects, I was very interested in in all the subjects, but the way
          that the school system worked didn't apply to me the most. I mean,
          maybe if I was pump full of Adderall. Sure. I would've done all my
          homework and all that kind of nonsense. But I think the times in
          school where I thrived the most was when I had to do project
          presentations I'd always go all out for that. I'd always make the most
          amazing videos or projects. That was the kind of school that I was
          very good at, but of course that was not what was traditionally
          acceptable?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But, in middle school, I remember, we'd have silent reading time and
          everyone would be reading and I had a Kindle and I would be reading
          the absolute beginners guide to Python programming. And I had this
          little thing on my phone where you could write Python programs and
          compile them. So I'd write text adventure games in the middle of
          class. Yeah. As reading work, I guess. My teacher was fine with it, I
          was certainly not a traditionally successful student. But whatever who
          cares.
        </p>
        <h2 className="text-xl">How I got started building</h2>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Tell me more about that actually it's an interesting point: what was
          one of first times you got started and realized you could build
          something?
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think like the first successful one was this website I made that was
          a real precursor to the COVID tracking site. Actually, the COVID site
          was just the reskin of this one, but I noticed that in Washington
          state where I live all the public high schools, other sports goes
          through something called king co.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So like all the football, lacrosse, etc. all goes to this one website,
          but their website sucks. It looks like it was made in the early 2000s.
          I mean, they don't even have a mobile version of it. It's one of those
          like terrible flash sites, but all the data is there and they update
          it every few hours.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So I was like, Hmm, I wanted to learn web scraping at the time because
          I felt that the best way to learn these new skills was to make entire
          projects around the key concepts. So I wrote a web scraper to take all
          the data from the sports site and designed the UI to look like ESPN
          merging together and made this sports website for my high school.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It was pretty cool looking compared to the terrible website that
          nobody used. And they liked it so much that my high school put it up
          on all the TVs there and, I was working with the school for the spring
          season of sports to make a more advanced version of this and a mobile
          app that would have live streaming...
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Later on in high school is when things maybe started picking up from,
          ah, this is like a fun little game I'm like putting on game jolt to
          oh, like thousands of people are using like a real thing I've made.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Totally, it's like shocking how much you can create an impact in the
          world. That's for sure.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think one thing that's cool about like the internet and tech is you
          don't really have to do that much. Coding a website, sure, maybe it
          takes you a few hours or days, but the amount of stuff that can happen
          from that is so much it's pretty incredible. That's what I really like
          about internet activism, because I'm not like having to be there on
          the ground in Europe. Every day, I can just develop a website that
          runs while I sleep that does a much broader range of impact than I
          could do as an individual there.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think it is so incredible to be able to launch a website and then
          anyone in the world can access it...
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's also just really easy to share them too. On social media, you can
          easily share a link to someone that, embeds beautifully, or you can be
          on the news and speak a domain name that's easy to remember and
          someone could pull up their phone and type that URL in.
        </p>
        <h2 className="text-xl">
          Building the world’s largest COVID analytics site
        </h2>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So let's zoom out a tiny bit. Can you just tell me the story on how
          did you get to where you are now?
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Pretty much, instead of, scraping Washington State's sports website, I
          can just point the same thing to Chinese government health department
          websites, take their data and just change the background, color of the
          website, change the table headers a little bit and bam, you have a
          coronavirus tracking dashboard.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I posted it on Reddit and people were like using it and everything. It
          was great, but I'd say it all really kickstarted when I posted it on
          Nextdoor, which is a hyperlocal Facebook type of platform. And, this
          was like, another month or so later, when the first cases started
          happening in America, which was actually in Washington State a few
          miles away from where I live.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So people really started to freaking out, all the grocery stores were
          being looted so I was like, well hey, you know, I got this website,
          why don't I share it to them? Back in the early days of the pandemic,
          like there was nothing you could find. The information was so
          scattered and the CDC website was terrible. News articles are mostly
          outdated by the time you read them anyways. So, you know, I just put
          my website out there and then, people really liked it in my local
          community.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And one person gave a tip to a local tech blogger in Seattle who was
          writing for a paper called GeekWire. And I remember just sitting in
          Starbucks, oh, this is pretty cool and whatever respond to the email
          questions really didn't think much. But that article became really
          popular and within 24 hours, I was being pulled outta class to do
          interviews with The Today Show and the Seattle Times and much bigger
          publications and then 24 hours after that, it was in all the
          international media.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think the coronavirus site has pretty much been in every single
          media outlet in the entire world multiple times over. The amount of
          attention that site got I've kind of forgotten about it over the years
          cause it's been a while, but like, man, that website was everywhere
          and that was pretty stressful. Yeah. A lot of pressure. But, I think
          I, I learned a lot. This is the one thing you can't really learn this
          kind of stuff online.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You have to learn a lot of this stuff by really doing it being up at
          3:00 AM with the pressure of literal governments and scientists and
          all these people using your site as like a main repository for
          information, is pretty stressful. But, I learned how to manage that
          and now, yeah, I feel a lot more confident when working on bigger
          projects, in some ways like the Ukrainian site.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think this is a great point too, it illustrates the fact that a lot
          of what it takes to be an entrepreneur and help people is just look
          for opportunity and pounce on it. I already have this knowledge, I see
          something new, I can go use it. You don't realize how fast you can
          build something that's really helpful and explodes.
        </p>
        <h2 className="text-xl">Giving advice to my younger self</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So more generally, let's just kinda look back. Can you give advice to
          your younger self? What was the most valuable skills that you would
          learn or things that you...
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I'd say I wish my younger self completed more of my projects. I
          view everything I did as a stepping stone, I think that's a good
          mindset for everyone to have. I have worked on hundreds and hundreds
          of unfinished projects over my entire life and the amount of ones I've
          actually finished and publicly launched is a tiny fraction. But I
          don't view any of them as wasted time, I view it all as stepping
          stones where I learned new things and came up with more ideas. While
          it is great and all I do wish my stepping stones were maybe a bit more
          powerful each. By that I mean, I actually finished a lot of the
          projects, committed to them a bit more instead of instantly jumping to
          the next idea.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I totally get that. I had that same experience when I was younger. I
          never finished any projects, I think nowadays I finish all my
          projects. I think there's some level of just find an idea and make
          sure you deliver on it and have some determination about finishing it.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think it's hard because like you can be really motivated at the
          start. You can be like wow this is like the greatest idea ever, but
          then I'm sure, you know just as well as I do, a week later, if you're
          still working on that project, I'd be surprised. You just get so
          distracted with other things, there's just so much stuff out there. It
          gets hard, but, learning how to power through that and sticking with a
          project will help you long term. Also just gives you more about strong
          portfolio of just cool shit.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          One thing I would recommend that got me through this is focus on
          getting a project to delivery so you can put it in a portfolio, share
          with other people. Since if it's not finished, you can't share it. And
          if it's not finished, you can't really put it in your portfolio. So
          finish it, and then if you wanna quit as soon as you're done, just
          quit it, bookmark it, archive it, but at least you finished it. And
          then you can leave forever. I think get to the end and then you can
          leave is a better perspective.
        </p>
        <h2 className="text-xl">Best way to get started building</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So one more odd question, if you had to restart back to before you
          ever got started while you were still learning, like what would you do
          with the knowledge of where the best path would be now?
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think a big part is making sure you're involved. I mean, this is
          kind of hard, especially if you're a bit younger, but I feel like you
          and I, for example, we learn about all the major new technologies,
          pretty fast. We're learning about things like Stable Diffusion when
          most people have no idea let alone like image generation or what AI
          is. So I think that being in these kind of communities and at the
          forefront of, seeing new technological leaps really will help.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I was a bit more isolated, just doing my own thing, you know, middle
          schooler working on my little video games. Great and all, but if I
          tried a bit harder to keep up with the new technologies coming out,
          since if you're able to develop something with these new things coming
          out you'll have a lot more of an interested audience and an easier way
          to share your products.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          For example, with the COVID site, it was a very relevant topic that
          everybody was talking about. So sharing it was very easy. Totally. If
          I made a project based on AI image generation stuff now people are
          gonna love that because that's what everyone's talking about.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Whereas if I made the website right now on like Lego, sure that's
          great and all and do that if you're passionate about it, way less of a
          audience is gonna be like, wow, new Lego website, amazing. So I think
          that's a great way to frame your projects is to make something based
          on the hype. A big recommendation I would give to my younger self or
          really anyone is make sure you're involved as much as you can be in
          technological leaps.
        </p>
        <h2 className="text-xl">My most formative building experiences</h2>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Another question is can you name experiences, whether it's courses or
          projects, or a conference you went to or hackathon you won you felt
          were most important?
        </p>

        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I mean, the hackathon I did win in Washington, that was pretty cool.
          Just because I felt like we powered through that thing. I remember
          this was held in the Amazon headquarters building and there were a few
          hundred of us there. Everybody went home like that night, it was a 24
          hour hackathon. And I remember everyone's working on stuff and time's
          up-ish for people to be walking around and really giving you help,
          they're going to bed we'll see you in the morning to judge your
          projects. And so most of the groups or everyone, literally, got up and
          left and went home, but our group stayed there overnight.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And we went into a room we weren't really allowed to go into, but had
          a big whiteboard and we just grinded, we were delirious, but they had
          free Red Bull there and nobody else was there. So we just drank red
          bulls and I think we went absolutely insane. I remember in the
          morning, 10:00 AM, and people start coming back in bringing donuts and
          were like, "Oh, you guys are still here?" And, then we presented our
          projects half asleep, but we won because we had, by far, the most
          advanced project.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'd say that was a pretty cool moment, the other guys are not working
          as hard as us. I think it shows you if you actually stick with your
          projects and give it some real effort and you can see some real
          benefit from it.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Those moments are pretty magical. Just the experience of having a
          project you really care about, working with a team, just grinding and
          you're gonna stay up all night.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Like hackathons, especially in college, it's just a great time where
          you could just be with your friends and be up at 4:00 AM and you're
          just like deliriously coding, the most ridiculous projects. It's very
          fun. I wish I had more friends that I could just call up at 3:00 AM
          and be, yo, this would be a sick idea. Why don't we work on this?
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          When I had the idea for the Ukrainian site, I remember I was actually
          like in my bed, had my pajamas on, all tucked up inside my covers,
          tweeting nonsense and I was like someone should make a website that
          helps, connect Ukrainian refugees to potential hosts and neighboring
          countries. And I was pretty busy working on my own startup at the
          time. And I was like somebody else should do it. You know, it'd be a
          great project, but that tweet started getting a lot of attention and
          people were like, wow, what a great idea. And I was like, yeah, it is
          a great idea. I should probably do it then.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So I remember like I literally jumped outta bed, like ran to my
          laptop. It was like midnight or something. And I was at this office
          and I just started working on the project and I like did not move from
          that table for the next three days. I was just eating dinner at the
          like table, just working on it nonstop and, those kind of moments are
          very motivating and very fun.
        </p>
        <h2 className="text-xl">
          How to get in the loop and capture opportunity
        </h2>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You were talking about being a forefront and learning what new
          technologies coming out. Where'd you get that now? Do you use Twitter
          or is there a certain news source you look into to stay on the
          forefront or be in those communities.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I mean, that's part of it too. You gotta know what platforms people
          are really on. I'd probably say Twitter, maybe Discord a little bit.
          Reddit can be pretty useful. I'd say Twitter is probably the best
          though, because people are just a lot more raw on there and you can
          follow individual people.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I mean, that's how I know you, for example. Yep. Um, there's a lot of
          in-person events too, I think are pretty good. If you go to
          hackathons, you'll see what technologies people are using, what people
          are excited about and you'll just be in those conversations. I know at
          least in Seattle, there's a lot of hackathon, meetup type things all
          the time.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. Go meet in person, if you're in high school, meet your parents
          to drive you. You might be a bunch of older kids, but that's the whole
          point.
        </p>
        {AviSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I took the bus. Good old Metro bus bobbing around the whole city,
          just, good times going to those hackathons.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          But, one other thing I would recommend somewhat is I follow a lot of
          accounts that give me like a Bloomberg Terminal for news that's just
          free on platforms like Twitter. There's a lot accounts I like, like
          the Spectator Index or Insider Paper, and a lot of private accounts I
          follow, that I get news, as soon as possible.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I really like learning a lot about geopolitics and a lot about the
          world and feeling that I understand what's happening these days. I
          like being the first to know about those things, because it helps if
          you wanna work on something big, like, let's say the coronavirus
          website, I knew about coronavirus in early January of 2020. It didn't
          even have a name then. It was, my website has a terrible domain of
          nCov2019.Live, but that's just because people called it, it just means
          novel coronavirus, 2019, the term COVID did not exist. Yeah. I
          remember watching the live stream when they were like, oh, we're gonna
          call it COVID. And it was like, oh, I should probably buy the domain
          for that. It sold out within seconds.
        </p>
        <h2 className="text-xl">Having a builder mindset</h2>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I think the thing you're not mentioning here is that you're watching
          what's going on in the world and constantly thinking: Can I do
          anything here? Is there any opportunity? Is anything I build?
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, exactly. I think a large part about this too is having the
          confidence to realize that there is opportunity in everything. And I
          say you really need confidence for that because a lot of people they
          see all these issues going around the world and they are like, man, I
          can't do anything about that, but I don't think people realize how
          much you actually can impact the world with such low effort,
          especially with the internet and technology.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The Ukranian site that I made became huge but I just had the
          confidence to look at an issue that I honestly don't know that much
          about. You don't need to be an expert in so many of these fields to
          realize there's opportunity in them. I think more people should just
          instead of doom scrolling all the time, view it as like opportune
          scrolling or something like that. These are all these issues people
          are complaining about, what great opportunity for me to go and develop
          something that could solve some of these issues or give more
          information to people.
        </p>
        {WillSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          There's also, I think the fact that let's say you build it and it
          doesn't work right. You didn't waste that much time.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's a stepping stone.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, then if it does work, then amazing, you actually brought
          something into the world, right. Just try and mess around. I think a
          lot of the startup founders we know, the one general trait we all
          share is a lack of humility, and not to say that's the good thing, but
          generally have a very high agency. I could do anything. I can build
          anything. I can learn anything I want.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">Right.</p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It doesn't matter if there's a lot of institutional people in the
          field I'm just gonna break in and that kinda break in mindset.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Another mindset I would maybe have, I think people are almost too
          focused on trying to develop a "startup" as like a proper term for
          what they're working on. But none of the projects I've worked on, I
          considered a startup, nor are they actual startups at all. They are
          simply just websites, or platforms. There's no legal entity behind
          them or anything like that. You don't need to develop an organization
          of any sort you can literally just make a website and toss it out
          there. You don't need funding or anything like that.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          No, I can't agree with that more. I think the biggest thing even just
          don't think about money in the short term, if you don't need it. If
          you're building and you're young chances are, it's not gonna be a
          financially beneficial project...
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You're a high schooler you don't need a mega yacht. You can make a few
          hundred dollars project and that would be good enough success like
          you.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Hahah yeah. Just build, and maybe your project might turn into a
          company in the future, but you just gotta build and try out fast. I
          totally agree with that.
        </p>
        <h2 className="text-xl">The story and future of UkraineTakeShelter</h2>

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          So what are you working on right now? What's your plan for the future?
          Anything you're excited about?
        </p>

        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I have this one project that I've been a little lacking on
          motivation on a bit. Basically in a nutshell, imagine if
          UkraineTakeShelter was not specific to just Ukrainians and not
          specific to just housing, but really for anything and for any disaster
          and existed prior to these issues unfolding.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Imagine if UkraineTakeShelter was already up and running with hundreds
          of thousands of people on it before the war broke out. Well, I
          wouldn't have had to grow it as the war happens and get all the media
          to talk about it weeks and days after the war.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Can you give some context on how UkraineTakeShelter works for those
          who don't know?
        </p>

        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. UkraineTakeShelter is a website where anyone can sign up and
          say, Hey, I can host refugees in this house As a refugee, you can go
          on UkraineTakeShelter, it's translated into over a dozen languages and
          you can type in where you are, where you're headed and see thousands
          and thousands of listings, and get in contact with those hosts. Get
          housed and it really works like really, really, really well there's
          many stories I've seen covered by the news.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Where they'll interview some host families, "Yeah you know, I, I
          contacted like all three of these refugee agencies around me. None of
          them even got back to me. I usually UkraineTakeShelter I've got
          refugees on my doorstep the next morning." Pretty incredible.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          There was this one story of this family that was in Kharkiv earlier on
          in the war, which is the second largest city in Ukraine. Right. And
          the city was currently being besieged by Russian troops and this
          family was hiding in their cellar. They're hiding in this damp dark
          place, but they're able to use UkraineTakeShelter to find a host that
          was in France that was able to help them come to France and stay in
          their extra holiday home on the French countryside. And it's
          beautiful, it's on the beach, this amazing place and three days after
          this family arrives, their house in Ukraine was destroyed by Russian
          bombs. So it was a pretty cool moment to see wow, this website is able
          to do a lot more than just house them it's also able really in a way
          save their lives.
        </p>
        <h2 className="text-xl">My new initiative</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Back to the, what I'm working on now, a way more broad version of
          that. Everyone always wants to help whenever they see a disaster
          unfolding around the world, but really all you can do as an individual
          is donate money to some like, you know, stupid nonprofit that's just
          gonna take half of your money for administrative fees anyways. And you
          don't even know what happens with your money, or you can sign some
          useless American petition that doesn't actually do anything.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's pretty much all I can think most people can do and that kind of
          sucks, but with UkraineTakeShelter, it proves the model that people
          want to help in all kinds of ways that isn't just monetarily. A lot of
          people have houses, but there's also immigration lawyers and they
          wanna contribute their skills pro bono. Or maybe they're a mental
          health support type of person. They wanna provide trauma relief to
          refugees.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Having a major network where everyone's able to say this is how I can
          help. You multiply that around the entire world. This would be really
          successful too, because like with UkraineTakeShelter, most of the
          traffic comes from mobile devices. You just be a refugee on the run,
          pull up your phone, be like, I can go to this website. I have an
          internet connection and it's like a public bulletin you can carry with
          you in your pocket, wherever you.
        </p>

        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, I love this idea. I've been doing a bunch of volunteering and
          trying to look for volunteering options is horrible. The process of
          getting to volunteer is very difficult and very unclear and people
          wanna help they just don't know how. And if we increased the
          efficiency of volunteering by 1% that has like absurd outsized return.
        </p>

        <h2 className="text-xl"> Building is easier than you think</h2>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Right. And this would be significantly more than 1%. Exactly. This
          wouldn't even be that hard to code in the first place as well.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          UkraineTakeShelter is just a database. You add things to delete things
          from and have an authentication in front of it. It's not complicated.
          There's no math required.
        </p>

        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Think that's great message for everyone out there too, which is it's
          not that complicated to create massive impact, like UkraineTakeShelter
          is immensely helpful and all it is a matching program with identity
          layer and you guys use Stripe.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's just a simple API, you can plug in there. I mean you can figure
          how to make a website like UkraineTakeShelter just by watching videos
          for a week or two, like the database does not need to be perfect. We
          used the initial version of the website, which I think is still
          running this way. I think, we used Firebase, Vercel and NextJS, Yeah.
          And just toss that together, Firebase is like the easiest thing.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Sure. It's not the most efficient database, but honestly who cares?
          Get it going. It really doesn't matter. To make a website like
          UkraineTakeShelter took us like under three days and most of the time
          was spent choosing what color blue looked good for the background the
          most.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Well, also the design was quite good. I think we should also emphasize
          how important design is.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          That's a big thing. I'm very passionate about good user interface,
          design, and good user experience flow. Yeah. that's definitely
          something you need to keep in mind when developing things. I have to
          say people suck at design almost all the time when I see people's
          websites and it's so disappointed to me, even government things.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah, that's true. So the greatest message you're saying here is it's
          not that complicated, but what was actually required was the fact that
          you had high agency, you were aware of what was going on. You were
          subscribing the news and you saw an opportunity and you just took it.
          It's a good lesson that as soon as you start learning and watching
          what's going on ideas are going come to you as you're laying in bed.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Right, right.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          It's about thinking about how can I actually help? The ways you help
          are not that complicated. It's not this crazy complicated world. The
          message we have is that none of us are exceptional. I think many
          people are exceptional in many ways that are legimate, but not
          exceptional in the ways of skills or ideas. I think none of us are
          specifically great coders.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'm a terrible coder. Terrible.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Exactly. But it doesn't matter, right? It's about that agency and that
          search for inspiration.
        </p>
        <h2 className="text-xl">How to reach out to me</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Let's say young people wanna reach out to you and ask you any
          questions. Do you have any way for them to reach out?
        </p>

        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I'd probably say Twitter is the best. If you just like @ me on Twitter
          or DM me I honestly check that like all the time.
        </p>
        <h2 className="text-xl">
          Be naive. Don’t think that hard. Just do it.
        </h2>
        {WillSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And any last piece of advice or last note?
        </p>
        {AviSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Yeah. At the end of the day, it's really about being a little bit
          naive and not realizing what's impossible and just going for it. The
          more you think about it, the more problems you'll think you'll run
          into, or I really can't do this, but honestly you really just gotta
          don't think, just do.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          And it's like a Nike ad here, at the end of the day, just do it work
          on the craziest projects you have in mind. I mean I'd start making
          like a website that has like your favorite food before you go on
          trying to make like a refugee matching service, but like, you know,
          start somewhere simple.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Everything you see in the world was made by people just like you, that
          had an idea and were passionate about it. I think once you realize
          that the world is really made up just humans doing stuff, and you also
          are human doing stuff. And there are so many resources and
          opportunities available and this is quite literally the best time in
          the universe to develop stuff. That should give you the confidence to
          just throw stuff at the wall and see what sticks, especially when
          you're young if you do literally anything remotely useful, the local
          news will write about it.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          You don't need to take all these... you know I took, AP computer
          science. I got a 2 on that test. I failed that class. You know, who
          cares at the same time? I'm giving talks about like computer to like
          my class. It really doesn't matter. You don't need to worry about
          these stupid classes, just work on your own projects and do your own
          stuff and you'll be far more successful just doing what you really
          wanna do at the end of the day.
        </p>
        <h2 className="text-xl">How to stick out.</h2>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I feel like you could write a college if you like really like catching
          fireflies you can write a very passionate college essay about that
          instead of some stupid club and I'm sure colleges would love to accept
          you more for something like that. To be clear, that's not the reason I
          built these projects at all, like I dropped out of high school, but
          doing things like this is like a sure shot way to get yourself into
          Stanford or Harvard or whatever stupid school you wanna get into.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Just work on a decent project like this. Now you have a unique
          extracurricular, the news will probably write about it. Bam. It's
          probably more than most people in your school are doing. And it really
          does take, takes like a fraction of the effort it takes to do AP
          Computer Science or Calculus or any of these ridiculous classes, that
          people take just to hope that it looks good on their little
          application when in reality, like what the colleges are looking for
          are more so people doing projects like this.
        </p>
        {WillSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          The important part is just focus on your actual creativity, your
          passion, your difference. Build something that nobody's built yet.
          It's all about breaking mimesis build something new, build something
          exciting. Of course, I think you make a good point about the best way
          to get into these colleges is don't intentionally try really hard to
          get into these college the best way is kind of going around. But
          whether you are trying to game this into college or just do this
          because you're interested, I would say the central theme is don't try
          to copy other people or just optimize for the metric everybody else is
          optimizing on in a direct way. Go figure out your own way.
        </p>
        {AviSpeaking()}
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          I mean, copy other people, honestly, a little bit, at least like, you
          know, great artists steal in some way.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Oh no, no, no completely borrow from other people. I'd say in general
          though, like I think the guidance of the group of what everyone else
          is doing is usually wrong.
        </p>
        {AviSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Sure. Yeah. Yeah. I think, the way I see it is. You don't need to be
          the first person to work on something for it to be successful. I'm
          sure there were other coronavirus trackers out there before I made my
          own. That just weren't really that popular. If you have an idea and
          you search it up and it looks like someone's already done that, who
          cares? Just do it better than them.
        </p>
        {WillSpeaking()}

        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Exactly. No, I totally agree. I wanna make sure that people know that
          I'm not discouraging from competition. I'm actually encouraging it.
          Generally, I think we're gonna talk to a lot of people who don't know
          a single entrepreneur at their high school. You're in the middle of
          nowhere. A lot of the people in your life gonna be focused on things
          that are usually around mimesis or copying other people.
        </p>
        <p className=" w-full font-thin leading-6	text-[#D2D2D8]	">
          Just realize the important thing is go do something interesting. And
          if what we're talking about, isn't what you're interested in great, do
          something different than us. Go find something interesting you like
          and go build it. For sure. Awesome. Well, thanks for talking to me
          Avi, it was a great conversation, happy to have you.
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
              <LargeBlockContent image={AviPicture} title={"Avi Schiffmann"}>
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
            <Link href={"https://twitter.com/avischiffmann"}>
              <a>
                <LargeBlockContent
                  image={TwitterIcon}
                  title="Follow Avi Schiffmann on Twitter"
                >
                  <p className="text-[#747485]">via</p>
                  <p>twitter.com/avischiffmann</p>
                </LargeBlockContent>
              </a>
            </Link>
            <Link href={"https://www.youtube.com/watch?v=R03a3SOW2Jc"}>
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
