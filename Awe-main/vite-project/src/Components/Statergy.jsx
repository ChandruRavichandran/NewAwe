import React, { useRef, useState } from "react";

function Statergy() {
const [third , setthird] = useState(["Strategy"])

   const genius = useRef()

  const [state, setstate] = useState({title: "Strategy",
    date: `We believe that a well-crafted strategy is the cornerstone of
            business success. Our expert consultants collaborate closely with
            you to develop strategies that align with your vision, harness
            your strengths, and navigate challenges. We delve into market
            analysis, competitive positioning, and innovative thinking to
            create actionable plans that drive growth and sustainability.
            Whether it's corporate strategy, functional optimization, or
            market entry, we tailor our approach to meet your unique needs.
            Partner with Aweganyz to transform your strategic vision into
            reality, unlocking new opportunities and achieving lasting impact.
            Together, we'll chart a course for a prosperous future.`,
    three: "Core Business Strategies",
    four: `At Aweganyz, our Core Business Strategies are designed to align
            your vision, optimize functionality, and streamline operations. We
            delve into corporate strategy to establish a robust foundation,
            ensuring every function within your organization drives towards
            shared goals. Our operational strategies fine-tune processes for
            maximum efficiency and effectiveness. From strategic formulation
            to implementation, we craft actionable plans that deliver
            measurable results. Partner with us to create a cohesive roadmap
            that transforms potential into performance, empowering your
            business to thrive in a competitive landscape.`,
    five: "Features",
    // fone : "Features",
    ftwo: "- Corporate Strategy",
    fthree: "- Functional Strategy",
    ffour: "- Operational Strategy",
    ffive: "- Strategic Formulation",
    fsix: "- Strategic Implementation",
    six: "Growth and Market Strategies",
    seven: `Aweganyz excels in Growth and Market Strategies, propelling your
            business towards unprecedented expansion. We identify and leverage
            growth opportunities through comprehensive market analysis and
            innovative strategies. Whether it's through mergers, acquisitions,
            or strategic diversification, our tailored solutions ensure you
            capture new markets and enhance your competitive edge. Our
            combination strategies integrate diverse growth tactics,
            optimizing your market presence. Trust Aweganyz to fuel your
            growth journey, turning ambitious goals into sustainable success.`,
    eone: "- Growth Strategy",
    etwo: "- Competitive Strategy",
    ethree: "- Acquisition Strategy",
    efour: "- Diversification Strategy",
    efive: "- Combination Strategy",

    nine: "Niche and Defensive Strategies",
    ten: `At Aweganyz, we understand that sometimes the best offense is a
            strong defense. Our Niche and Defensive Strategies are tailored to
            secure and strengthen your market position. We employ focus
            strategies to dominate specific market segments, ensuring you
            become the go-to provider for targeted customer bases.
            Retrenchment and turnaround strategies are expertly crafted to
            stabilize and rejuvenate struggling operations, transforming
            challenges into opportunities. With pause strategies, we help you
            regroup and strategize during market uncertainties. Let Aweganyz
            fortify your business, turning vulnerabilities into victories.`,
    tone: "- Focus Strategy",
    ttwo: "- Retrenchment Strategy",
    tthree: "- Turnaround Strategiesy",
    tfour: "- Pause Strategy",

    eleven: "Analytical and Objective-Setting Strategies",
    twell: `Aweganyz specializes in Analytical and Objective-Setting
            Strategies that provide a clear, data-driven path to success. We
            conduct thorough strategic objectives and analysis to align your
            business goals with actionable insights. Our derivative strategies
            are crafted to respond dynamically to market shifts, ensuring you
            stay ahead of trends and competitors. By setting precise,
            measurable objectives, we drive focused progress and continuous
            improvement. Partner with Aweganyz to transform data into
            strategic advantage, empowering informed decision-making and
            sustainable growth.`,
    twone: "- Strategic Objectives and Analysis",
    twtwo: "- Derivative Strategy",

    thirteen: "Transformational and Popular Strategies",
    fouteen: `Embrace the future with Aweganyz's Transformational and Popular
            Strategies. We guide your organization through transformative
            change, leveraging cutting-edge methodologies to innovate and
            adapt. Our popular strategies incorporate best practices and
            industry trends, ensuring your business remains at the forefront
            of its field. Whether through digital transformation, cultural
            change, or leadership development, we provide the tools and
            expertise to redefine what's possible. Join Aweganyz on a journey
            of transformation, where visionary strategies meet real-world
            results.`,
    fifteen: "- Transformational Strategy",
    sixteen: "- Popular Articles",

    third: "Cost and Pricing Strategies",
    thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
    thirdtwo: "-  Cost Leadership Strategy",
    thirdthree: "-  Price Skimming Strategy",});
  // console.log(state);
  const datas = [
    {
      title: "Strategy",
      date: `We believe that a well-crafted strategy is the cornerstone of
              business success. Our expert consultants collaborate closely with
              you to develop strategies that align with your vision, harness
              your strengths, and navigate challenges. We delve into market
              analysis, competitive positioning, and innovative thinking to
              create actionable plans that drive growth and sustainability.
              Whether it's corporate strategy, functional optimization, or
              market entry, we tailor our approach to meet your unique needs.
              Partner with Aweganyz to transform your strategic vision into
              reality, unlocking new opportunities and achieving lasting impact.
              Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
              your vision, optimize functionality, and streamline operations. We
              delve into corporate strategy to establish a robust foundation,
              ensuring every function within your organization drives towards
              shared goals. Our operational strategies fine-tune processes for
              maximum efficiency and effectiveness. From strategic formulation
              to implementation, we craft actionable plans that deliver
              measurable results. Partner with us to create a cohesive roadmap
              that transforms potential into performance, empowering your
              business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
              business towards unprecedented expansion. We identify and leverage
              growth opportunities through comprehensive market analysis and
              innovative strategies. Whether it's through mergers, acquisitions,
              or strategic diversification, our tailored solutions ensure you
              capture new markets and enhance your competitive edge. Our
              combination strategies integrate diverse growth tactics,
              optimizing your market presence. Trust Aweganyz to fuel your
              growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
              strong defense. Our Niche and Defensive Strategies are tailored to
              secure and strengthen your market position. We employ focus
              strategies to dominate specific market segments, ensuring you
              become the go-to provider for targeted customer bases.
              Retrenchment and turnaround strategies are expertly crafted to
              stabilize and rejuvenate struggling operations, transforming
              challenges into opportunities. With pause strategies, we help you
              regroup and strategize during market uncertainties. Let Aweganyz
              fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
              Strategies that provide a clear, data-driven path to success. We
              conduct thorough strategic objectives and analysis to align your
              business goals with actionable insights. Our derivative strategies
              are crafted to respond dynamically to market shifts, ensuring you
              stay ahead of trends and competitors. By setting precise,
              measurable objectives, we drive focused progress and continuous
              improvement. Partner with Aweganyz to transform data into
              strategic advantage, empowering informed decision-making and
              sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
              Strategies. We guide your organization through transformative
              change, leveraging cutting-edge methodologies to innovate and
              adapt. Our popular strategies incorporate best practices and
              industry trends, ensuring your business remains at the forefront
              of its field. Whether through digital transformation, cultural
              change, or leadership development, we provide the tools and
              expertise to redefine what's possible. Join Aweganyz on a journey
              of transformation, where visionary strategies meet real-world
              results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leaership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
    {
      title: "Product Design",
      date: `We believe that a well-crafted strategy is the cornerstone of
      business success. Our expert consultants collaborate closely with
      you to develop strategies that align with your vision, harness
      your strengths, and navigate challenges. We delve into market
      analysis, competitive positioning, and innovative thinking to
      create actionable plans that drive growth and sustainability.
      Whether it's corporate strategy, functional optimization, or
      market entry, we tailor our approach to meet your unique needs.
      Partner with Aweganyz to transform your strategic vision into
      reality, unlocking new opportunities and achieving lasting impact.
      Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
      your vision, optimize functionality, and streamline operations. We
      delve into corporate strategy to establish a robust foundation,
      ensuring every function within your organization drives towards
      shared goals. Our operational strategies fine-tune processes for
      maximum efficiency and effectiveness. From strategic formulation
      to implementation, we craft actionable plans that deliver
      measurable results. Partner with us to create a cohesive roadmap
      that transforms potential into performance, empowering your
      business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
      business towards unprecedented expansion. We identify and leverage
      growth opportunities through comprehensive market analysis and
      innovative strategies. Whether it's through mergers, acquisitions,
      or strategic diversification, our tailored solutions ensure you
      capture new markets and enhance your competitive edge. Our
      combination strategies integrate diverse growth tactics,
      optimizing your market presence. Trust Aweganyz to fuel your
      growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
      strong defense. Our Niche and Defensive Strategies are tailored to
      secure and strengthen your market position. We employ focus
      strategies to dominate specific market segments, ensuring you
      become the go-to provider for targeted customer bases.
      Retrenchment and turnaround strategies are expertly crafted to
      stabilize and rejuvenate struggling operations, transforming
      challenges into opportunities. With pause strategies, we help you
      regroup and strategize during market uncertainties. Let Aweganyz
      fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
      Strategies that provide a clear, data-driven path to success. We
      conduct thorough strategic objectives and analysis to align your
      business goals with actionable insights. Our derivative strategies
      are crafted to respond dynamically to market shifts, ensuring you
      stay ahead of trends and competitors. By setting precise,
      measurable objectives, we drive focused progress and continuous
      improvement. Partner with Aweganyz to transform data into
      strategic advantage, empowering informed decision-making and
      sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
      Strategies. We guide your organization through transformative
      change, leveraging cutting-edge methodologies to innovate and
      adapt. Our popular strategies incorporate best practices and
      industry trends, ensuring your business remains at the forefront
      of its field. Whether through digital transformation, cultural
      change, or leadership development, we provide the tools and
      expertise to redefine what's possible. Join Aweganyz on a journey
      of transformation, where visionary strategies meet real-world
      results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
    {
      title: "Transformation",
      date: `We believe that a well-crafted strategy is the cornerstone of
      business success. Our expert consultants collaborate closely with
      you to develop strategies that align with your vision, harness
      your strengths, and navigate challenges. We delve into market
      analysis, competitive positioning, and innovative thinking to
      create actionable plans that drive growth and sustainability.
      Whether it's corporate strategy, functional optimization, or
      market entry, we tailor our approach to meet your unique needs.
      Partner with Aweganyz to transform your strategic vision into
      reality, unlocking new opportunities and achieving lasting impact.
      Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
      your vision, optimize functionality, and streamline operations. We
      delve into corporate strategy to establish a robust foundation,
      ensuring every function within your organization drives towards
      shared goals. Our operational strategies fine-tune processes for
      maximum efficiency and effectiveness. From strategic formulation
      to implementation, we craft actionable plans that deliver
      measurable results. Partner with us to create a cohesive roadmap
      that transforms potential into performance, empowering your
      business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
      business towards unprecedented expansion. We identify and leverage
      growth opportunities through comprehensive market analysis and
      innovative strategies. Whether it's through mergers, acquisitions,
      or strategic diversification, our tailored solutions ensure you
      capture new markets and enhance your competitive edge. Our
      combination strategies integrate diverse growth tactics,
      optimizing your market presence. Trust Aweganyz to fuel your
      growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
      strong defense. Our Niche and Defensive Strategies are tailored to
      secure and strengthen your market position. We employ focus
      strategies to dominate specific market segments, ensuring you
      become the go-to provider for targeted customer bases.
      Retrenchment and turnaround strategies are expertly crafted to
      stabilize and rejuvenate struggling operations, transforming
      challenges into opportunities. With pause strategies, we help you
      regroup and strategize during market uncertainties. Let Aweganyz
      fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
      Strategies that provide a clear, data-driven path to success. We
      conduct thorough strategic objectives and analysis to align your
      business goals with actionable insights. Our derivative strategies
      are crafted to respond dynamically to market shifts, ensuring you
      stay ahead of trends and competitors. By setting precise,
      measurable objectives, we drive focused progress and continuous
      improvement. Partner with Aweganyz to transform data into
      strategic advantage, empowering informed decision-making and
      sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
      Strategies. We guide your organization through transformative
      change, leveraging cutting-edge methodologies to innovate and
      adapt. Our popular strategies incorporate best practices and
      industry trends, ensuring your business remains at the forefront
      of its field. Whether through digital transformation, cultural
      change, or leadership development, we provide the tools and
      expertise to redefine what's possible. Join Aweganyz on a journey
      of transformation, where visionary strategies meet real-world
      results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
    {
      title: "Digital, Technology & Data",
      date: `We believe that a well-crafted strategy is the cornerstone of
      business success. Our expert consultants collaborate closely with
      you to develop strategies that align with your vision, harness
      your strengths, and navigate challenges. We delve into market
      analysis, competitive positioning, and innovative thinking to
      create actionable plans that drive growth and sustainability.
      Whether it's corporate strategy, functional optimization, or
      market entry, we tailor our approach to meet your unique needs.
      Partner with Aweganyz to transform your strategic vision into
      reality, unlocking new opportunities and achieving lasting impact.
      Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
      your vision, optimize functionality, and streamline operations. We
      delve into corporate strategy to establish a robust foundation,
      ensuring every function within your organization drives towards
      shared goals. Our operational strategies fine-tune processes for
      maximum efficiency and effectiveness. From strategic formulation
      to implementation, we craft actionable plans that deliver
      measurable results. Partner with us to create a cohesive roadmap
      that transforms potential into performance, empowering your
      business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
      business towards unprecedented expansion. We identify and leverage
      growth opportunities through comprehensive market analysis and
      innovative strategies. Whether it's through mergers, acquisitions,
      or strategic diversification, our tailored solutions ensure you
      capture new markets and enhance your competitive edge. Our
      combination strategies integrate diverse growth tactics,
      optimizing your market presence. Trust Aweganyz to fuel your
      growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
      strong defense. Our Niche and Defensive Strategies are tailored to
      secure and strengthen your market position. We employ focus
      strategies to dominate specific market segments, ensuring you
      become the go-to provider for targeted customer bases.
      Retrenchment and turnaround strategies are expertly crafted to
      stabilize and rejuvenate struggling operations, transforming
      challenges into opportunities. With pause strategies, we help you
      regroup and strategize during market uncertainties. Let Aweganyz
      fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
      Strategies that provide a clear, data-driven path to success. We
      conduct thorough strategic objectives and analysis to align your
      business goals with actionable insights. Our derivative strategies
      are crafted to respond dynamically to market shifts, ensuring you
      stay ahead of trends and competitors. By setting precise,
      measurable objectives, we drive focused progress and continuous
      improvement. Partner with Aweganyz to transform data into
      strategic advantage, empowering informed decision-making and
      sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
      Strategies. We guide your organization through transformative
      change, leveraging cutting-edge methodologies to innovate and
      adapt. Our popular strategies incorporate best practices and
      industry trends, ensuring your business remains at the forefront
      of its field. Whether through digital transformation, cultural
      change, or leadership development, we provide the tools and
      expertise to redefine what's possible. Join Aweganyz on a journey
      of transformation, where visionary strategies meet real-world
      results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
    {
      title: "People and Organisation",
      date: `We believe that a well-crafted strategy is the cornerstone of
      business success. Our expert consultants collaborate closely with
      you to develop strategies that align with your vision, harness
      your strengths, and navigate challenges. We delve into market
      analysis, competitive positioning, and innovative thinking to
      create actionable plans that drive growth and sustainability.
      Whether it's corporate strategy, functional optimization, or
      market entry, we tailor our approach to meet your unique needs.
      Partner with Aweganyz to transform your strategic vision into
      reality, unlocking new opportunities and achieving lasting impact.
      Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
      your vision, optimize functionality, and streamline operations. We
      delve into corporate strategy to establish a robust foundation,
      ensuring every function within your organization drives towards
      shared goals. Our operational strategies fine-tune processes for
      maximum efficiency and effectiveness. From strategic formulation
      to implementation, we craft actionable plans that deliver
      measurable results. Partner with us to create a cohesive roadmap
      that transforms potential into performance, empowering your
      business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
      business towards unprecedented expansion. We identify and leverage
      growth opportunities through comprehensive market analysis and
      innovative strategies. Whether it's through mergers, acquisitions,
      or strategic diversification, our tailored solutions ensure you
      capture new markets and enhance your competitive edge. Our
      combination strategies integrate diverse growth tactics,
      optimizing your market presence. Trust Aweganyz to fuel your
      growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
      strong defense. Our Niche and Defensive Strategies are tailored to
      secure and strengthen your market position. We employ focus
      strategies to dominate specific market segments, ensuring you
      become the go-to provider for targeted customer bases.
      Retrenchment and turnaround strategies are expertly crafted to
      stabilize and rejuvenate struggling operations, transforming
      challenges into opportunities. With pause strategies, we help you
      regroup and strategize during market uncertainties. Let Aweganyz
      fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
      Strategies that provide a clear, data-driven path to success. We
      conduct thorough strategic objectives and analysis to align your
      business goals with actionable insights. Our derivative strategies
      are crafted to respond dynamically to market shifts, ensuring you
      stay ahead of trends and competitors. By setting precise,
      measurable objectives, we drive focused progress and continuous
      improvement. Partner with Aweganyz to transform data into
      strategic advantage, empowering informed decision-making and
      sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
      Strategies. We guide your organization through transformative
      change, leveraging cutting-edge methodologies to innovate and
      adapt. Our popular strategies incorporate best practices and
      industry trends, ensuring your business remains at the forefront
      of its field. Whether through digital transformation, cultural
      change, or leadership development, we provide the tools and
      expertise to redefine what's possible. Join Aweganyz on a journey
      of transformation, where visionary strategies meet real-world
      results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
    {
      title: "Operations",
      date: `We believe that a well-crafted strategy is the cornerstone of
      business success. Our expert consultants collaborate closely with
      you to develop strategies that align with your vision, harness
      your strengths, and navigate challenges. We delve into market
      analysis, competitive positioning, and innovative thinking to
      create actionable plans that drive growth and sustainability.
      Whether it's corporate strategy, functional optimization, or
      market entry, we tailor our approach to meet your unique needs.
      Partner with Aweganyz to transform your strategic vision into
      reality, unlocking new opportunities and achieving lasting impact.
      Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
      your vision, optimize functionality, and streamline operations. We
      delve into corporate strategy to establish a robust foundation,
      ensuring every function within your organization drives towards
      shared goals. Our operational strategies fine-tune processes for
      maximum efficiency and effectiveness. From strategic formulation
      to implementation, we craft actionable plans that deliver
      measurable results. Partner with us to create a cohesive roadmap
      that transforms potential into performance, empowering your
      business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
      business towards unprecedented expansion. We identify and leverage
      growth opportunities through comprehensive market analysis and
      innovative strategies. Whether it's through mergers, acquisitions,
      or strategic diversification, our tailored solutions ensure you
      capture new markets and enhance your competitive edge. Our
      combination strategies integrate diverse growth tactics,
      optimizing your market presence. Trust Aweganyz to fuel your
      growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
      strong defense. Our Niche and Defensive Strategies are tailored to
      secure and strengthen your market position. We employ focus
      strategies to dominate specific market segments, ensuring you
      become the go-to provider for targeted customer bases.
      Retrenchment and turnaround strategies are expertly crafted to
      stabilize and rejuvenate struggling operations, transforming
      challenges into opportunities. With pause strategies, we help you
      regroup and strategize during market uncertainties. Let Aweganyz
      fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
      Strategies that provide a clear, data-driven path to success. We
      conduct thorough strategic objectives and analysis to align your
      business goals with actionable insights. Our derivative strategies
      are crafted to respond dynamically to market shifts, ensuring you
      stay ahead of trends and competitors. By setting precise,
      measurable objectives, we drive focused progress and continuous
      improvement. Partner with Aweganyz to transform data into
      strategic advantage, empowering informed decision-making and
      sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
      Strategies. We guide your organization through transformative
      change, leveraging cutting-edge methodologies to innovate and
      adapt. Our popular strategies incorporate best practices and
      industry trends, ensuring your business remains at the forefront
      of its field. Whether through digital transformation, cultural
      change, or leadership development, we provide the tools and
      expertise to redefine what's possible. Join Aweganyz on a journey
      of transformation, where visionary strategies meet real-world
      results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
    {
      title: "Growth, Marketing & Sales",
      date: `We believe that a well-crafted strategy is the cornerstone of
      business success. Our expert consultants collaborate closely with
      you to develop strategies that align with your vision, harness
      your strengths, and navigate challenges. We delve into market
      analysis, competitive positioning, and innovative thinking to
      create actionable plans that drive growth and sustainability.
      Whether it's corporate strategy, functional optimization, or
      market entry, we tailor our approach to meet your unique needs.
      Partner with Aweganyz to transform your strategic vision into
      reality, unlocking new opportunities and achieving lasting impact.
      Together, we'll chart a course for a prosperous future.`,
      three: "Core Business Strategies",
      four: `At Aweganyz, our Core Business Strategies are designed to align
      your vision, optimize functionality, and streamline operations. We
      delve into corporate strategy to establish a robust foundation,
      ensuring every function within your organization drives towards
      shared goals. Our operational strategies fine-tune processes for
      maximum efficiency and effectiveness. From strategic formulation
      to implementation, we craft actionable plans that deliver
      measurable results. Partner with us to create a cohesive roadmap
      that transforms potential into performance, empowering your
      business to thrive in a competitive landscape.`,
      five: "Features",
      // fone : "Features",
      ftwo: "- Corporate Strategy",
      fthree: "- Functional Strategy",
      ffour: "- Operational Strategy",
      ffive: "- Strategic Formulation",
      fsix: "- Strategic Implementation",
      six: "Growth and Market Strategies",
      seven: `Aweganyz excels in Growth and Market Strategies, propelling your
      business towards unprecedented expansion. We identify and leverage
      growth opportunities through comprehensive market analysis and
      innovative strategies. Whether it's through mergers, acquisitions,
      or strategic diversification, our tailored solutions ensure you
      capture new markets and enhance your competitive edge. Our
      combination strategies integrate diverse growth tactics,
      optimizing your market presence. Trust Aweganyz to fuel your
      growth journey, turning ambitious goals into sustainable success.`,
      eone: "- Growth Strategy",
      etwo: "- Competitive Strategy",
      ethree: "- Acquisition Strategy",
      efour: "- Diversification Strategy",
      efive: "- Combination Strategy",

      nine: "Niche and Defensive Strategies",
      ten: `At Aweganyz, we understand that sometimes the best offense is a
      strong defense. Our Niche and Defensive Strategies are tailored to
      secure and strengthen your market position. We employ focus
      strategies to dominate specific market segments, ensuring you
      become the go-to provider for targeted customer bases.
      Retrenchment and turnaround strategies are expertly crafted to
      stabilize and rejuvenate struggling operations, transforming
      challenges into opportunities. With pause strategies, we help you
      regroup and strategize during market uncertainties. Let Aweganyz
      fortify your business, turning vulnerabilities into victories.`,
      tone: "- Focus Strategy",
      ttwo: "- Retrenchment Strategy",
      tthree: "- Turnaround Strategiesy",
      tfour: "- Pause Strategy",

      eleven: "Analytical and Objective-Setting Strategies",
      twell: `Aweganyz specializes in Analytical and Objective-Setting
      Strategies that provide a clear, data-driven path to success. We
      conduct thorough strategic objectives and analysis to align your
      business goals with actionable insights. Our derivative strategies
      are crafted to respond dynamically to market shifts, ensuring you
      stay ahead of trends and competitors. By setting precise,
      measurable objectives, we drive focused progress and continuous
      improvement. Partner with Aweganyz to transform data into
      strategic advantage, empowering informed decision-making and
      sustainable growth.`,
      twone: "- Strategic Objectives and Analysis",
      twtwo: "- Derivative Strategy",

      thirteen: "Transformational and Popular Strategies",
      fouteen: `Embrace the future with Aweganyz's Transformational and Popular
      Strategies. We guide your organization through transformative
      change, leveraging cutting-edge methodologies to innovate and
      adapt. Our popular strategies incorporate best practices and
      industry trends, ensuring your business remains at the forefront
      of its field. Whether through digital transformation, cultural
      change, or leadership development, we provide the tools and
      expertise to redefine what's possible. Join Aweganyz on a journey
      of transformation, where visionary strategies meet real-world
      results.`,
      fifteen: "- Transformational Strategy",
      sixteen: "- Popular Articles",

      third: "Cost and Pricing Strategies",
      thirdone: `Our Cost and Pricing Strategies at Aweganyz are engineered to maximize profitability while maintaining market competitiveness. We implement cost leadership strategies that streamline operations and reduce expenses without compromising quality. Our price skimming techniques enable you to capitalize on new product launches, maximizing early profits before competitors enter the market. Through meticulous analysis and strategic planning, we help you strike the perfect balance between cost efficiency and price optimization, ensuring long-term financial health and market dominance.`,
      thirdtwo: "-  Cost Leadership Strategy",
      thirdthree: "-  Price Skimming Strategy",
    },
  ];

  const clikeddatas = (datas) => {
    setstate(datas);
  genius.current.classList.remove("ytfjg")

  };

const moilecontent = ()=>{
  genius.current.classList.toggle("ytfjg")
}

  return (
    <>
      <div className="statergy">
        <div className="stateryinner">

             <div className="mobilecintengyvhb">
              <div className="hgfytv"  onClick={()=>moilecontent()}>
              <input  value={state.title} readOnly />
              <img src="/images/down1.svg" />
              </div>

              <div className="miblkegvf"  ref={genius}>
              {datas.map((iteam) => {
                  let spanClass = third.includes(iteam.title) ? 'spanlist1' : 'fro1';

              return (
                <>
                  <div key={iteam.title} onClick={() => clikeddatas(iteam)}>
                    {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
           <input type='text' className={spanClass} value={iteam.title} onClick={(e)=>setthird(e.target.value)} readOnly />

                  </div>
                </>
              );
            })}
              </div>
             </div>

          <div className="innersta">
            {datas.map((iteam) => {
                  let spanClass = third.includes(iteam.title) ? 'spanlist' : 'fro';

              return (
                <>
                  <div key={iteam.title} onClick={() => clikeddatas(iteam)}>
                    {/* <h1 className={spanClass}  onClick={(e)=>setthird(e.target.value)}>{}</h1> */}
           <input type='text' className={spanClass} value={iteam.title} onClick={(e)=>setthird(e.target.value)} readOnly />

                    <hr />
                  </div>
                </>
              );
            })}
          </div>
          <div className="innerstatr">
            {/* {
              state.date
            } */}
            <h1 className="tyufgb">{state.title}</h1>
            <p>{state.date}</p>

            <h1 className="ytutgf">{state.three}</h1>
            <div className="likop1"></div>

            <p>{state.four}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.ftwo}</p>
              <p>{state.fthree}</p>
              <p>{state.ffour}</p>
              <p>{state.ffive}</p>
              <p>{state.fisix}</p>
            </div>

            <h1 className="ytutgf">{state.six}</h1>
            <div className="likop1"></div>

            <p>{state.seven}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.eone}</p>
              <p>{state.etwo}</p>
              <p>{state.ethree}</p>
              <p>{state.efour}</p>
              <p>{state.efive}</p>
            </div>

            <h1 className="ytutgf">{state.third}</h1>
            <div className="likop1"></div>

            <p>{state.thirdone}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.thirdtwo}</p>
              <p>{state.thirdthree}</p>
            </div>

            <h1 className="ytutgf">{state.nine}</h1>
            <div className="likop1"></div>

            <p>{state.ten}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.tone}</p>
              <p>{state.ttwo}</p>
              <p>{state.tthree}</p>
              <p>{state.tfour}</p>
            </div>

            <h1 className="ytutgf">{state.eleven}</h1>
            <div className="likop1"></div>

            <p>{state.twell}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.twone}</p>
              <p>{state.twtwo}</p>
            </div>

            <h1 className="ytutgf">{state.thirteen}</h1>
            <div className="likop1"></div>

            <p>{state.fouteen}</p>
            <p className="five">{state.five}</p>
            <div>
              <p>{state.fifteen}</p>
              <p>{state.sixteen}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statergy;