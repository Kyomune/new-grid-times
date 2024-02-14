import React from "react";
import styled from "styled-components/macro";

import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";

import SectionTitle from "../SectionTitle";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import Advertisement from "../Advertisement";
import { QUERIES } from "../../constants";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStoryWrapper>
              <SecondaryStory key={story.id} {...story} />
            </SecondaryStoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionList>
          {OPINION_STORIES.map((story, index) => (
            <SecondaryStoryWrapper>
              <OpinionStory key={story.id} {...story} />
            </SecondaryStoryWrapper>
          ))}
        </OpinionList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(min(518px, 70%), 1fr) min(252px, 30%);
    /* grid-template-columns: 2fr 1fr; */
    gap: 15px;
    grid-template-areas:
      "main-story      secondary-stories"
      "advertisement   advertisement"
      "opinion-stories opinion-stories";
    gap: 0px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns:
      minmax(min(477px, 60%), 1fr)
      minmax(min(386px, 30%), 1fr)
      minmax(min(273px, 10%), 1fr);

    grid-template-columns: 5fr 4fr 3fr;
    
    /* gap: 15px; */
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement     advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp} {
    padding-right: 16px;
    margin-right: 16px;
    border-right: 1px solid var(--color-gray-300);
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
`;

const SecondaryStoryWrapper = styled.div`
  @media (not (${QUERIES.tabletOnly})) {
    &:not(:last-of-type) {
      padding-bottom: 16px;
      margin-bottom: 16px;
      border-bottom: 1px solid var(--color-gray-300);
    }
  }

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 15px;
  }
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.laptopAndUp} {
    margin-top: -8px;
  }
`;

const OpinionList = styled.div`
  @media ${QUERIES.tabletOnly} {
    display: grid;
    grid-template-columns: repeat(auto-fit, 172px);
    justify-content: space-evenly;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp} {
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid var(--color-gray-300);
  }
`;

export default MainStoryGrid;
