/**
 * EXTERNAL
 */
import { Flex, HStack, VStack, Heading } from "@chakra-ui/react";
import Thin from "./helpers";

import { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const AboutText = () => {
  return (
    <Thin pl="24" lineHeight="4rem" fontSize="1.25rem">
      Hack The Ridge is Iroquois Ridge High School’s annual hackathon and pitch
      competition where students collaborate to come up with solutions to
      real-world problems. It is taking place virtually on December 11th, 2021
      from 9am to 9pm. Workshops and guest speakers will be building
      participants to expand skill sets to be applied during the event and
      onward. During the hackathon, you will form teams of up to four people,
      and have a choice between the following:  come up with a creative
      technological solution to any real-world problem of your choice, or pitch
      a practical business idea that will thrive in today{"'"}s busy ecosystem.
      (text is lacking edit for actual site) 
    </Thin>
  );
};

const About = (args) => {
  useEffect(() => {
    gsap.from('.aboutHeading', {
      scrollTrigger: {
        trigger: '.aboutHeading',
        start: 'bottom bottom'
      },
      x: -50,
      opacity: 0,
      duration: 1
    })

    gsap.from('.aboutText', {
      scrollTrigger: {
        trigger: '.aboutText',
        start: 'center bottom'
      },
      x: 50,
      opacity: 0,
      duration: 1
    })
  })

  return (
    <VStack mt="100" w="full" alignItems="flex-start" id={args.id}>
      <div className='aboutHeading'>
        <Heading fontSize="3rem" mb="16">
          Irhs{"'"} Annual Hackathon
        </Heading>
      </div>
      <div className='aboutText'>
        <AboutText />
      </div>
    </VStack>
  );
};

export default About;
