<template>
  <div class="resume">
    <!-- head -->
    <Html lang="en-US">
      <Head>
        <Title>S.Mohammad Hosseininejad</Title>
        <Meta name="description" content="My resume" />
      </Head>
    </Html>

    <!-- body -->
    <div class="resume-left-column">
      <!-- image: only on desktop -->
      <div class="resume-left__image">
        <img
          class="hidden-on-mobile"
          src="~/assets/images/profile-square@500px.jpg"
          alt="profile picture"
        />
      </div>
      <!-- contact -->
      <div class="resume-left__box">
        <h2 class="resume-left__box-title">contact</h2>
        <!-- contact box: 1 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
              />
            </svg>
          </div>
          <h3>linkedin</h3>
          <a
            href="https://www.linkedin.com/in/seyed-mohammad-hosseininejad-1704a6233/"
            target="_blank"
          >
            linkedin profile
          </a>
        </div>
        <!-- contact box: 2 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </div>
          <h3>github</h3>
          <a href="https://github.com/smohammadhn" target="_blank">
            github.com/smohammadhn
          </a>
        </div>
        <!-- contact box: 3 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
          </div>
          <h3>website</h3>
          <a href="https://smohammadhn.com/" target="_blank">
            smohammadhn.com
          </a>
        </div>
        <!-- contact box: 4 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12V13.45C22,14.45 21.65,15.3 21,16C20.3,16.67 19.5,17 18.5,17C17.3,17 16.31,16.5 15.56,15.5C14.56,16.5 13.38,17 12,17C10.63,17 9.45,16.5 8.46,15.54C7.5,14.55 7,13.38 7,12C7,10.63 7.5,9.45 8.46,8.46C9.45,7.5 10.63,7 12,7C13.38,7 14.55,7.5 15.54,8.46C16.5,9.45 17,10.63 17,12V13.45C17,13.86 17.16,14.22 17.46,14.53C17.76,14.84 18.11,15 18.5,15C18.92,15 19.27,14.84 19.57,14.53C19.87,14.22 20,13.86 20,13.45V12C20,9.81 19.23,7.93 17.65,6.35C16.07,4.77 14.19,4 12,4C9.81,4 7.93,4.77 6.35,6.35C4.77,7.93 4,9.81 4,12C4,14.19 4.77,16.07 6.35,17.65C7.93,19.23 9.81,20 12,20H17V22H12C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z"
              />
            </svg>
          </div>
          <h3>email</h3>
          <a href="mailto:smohammadhnd@gmail.com">smohammadhnd@gmail.com</a>
        </div>
        <!-- contact box: 5 -->
        <div class="contact-box">
          <div>
            <svg viewBox="0 0 24 24">
              <path
                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
              />
            </svg>
          </div>
          <h3>phone</h3>
          <a href="tel:+989021211074">(+98)9021211074</a>
        </div>
      </div>

      <!-- expertise -->
      <div class="resume-left__box">
        <h2 class="resume-left__box-title">expertise</h2>
        <div class="expertise-box">
          <h3>html5 / css3</h3>
          <div>2.5 yr.</div>
        </div>
        <div class="expertise-box">
          <h3>javascript / es6</h3>
          <div>2 yr.</div>
        </div>
        <div class="expertise-box">
          <h3>vue2 / nuxt2</h3>
          <div>1 yr.</div>
        </div>
        <div class="expertise-box">
          <h3>git / npm</h3>
          <div>2.5 yr.</div>
        </div>
        <div class="expertise-box">
          <h3>vue3 / nuxt3 / typescript</h3>
          <div>3 mo.</div>
        </div>
      </div>

      <!-- pre skills -->
      <div class="resume-left__box">
        <h2 class="resume-left__box-title">pre skills</h2>
        <ul class="pre-skills-box">
          <li>
            <div class="bullet"></div>
            <h3>proficient in English</h3>
          </li>
          <li>
            <div class="bullet"></div>
            <h3>Thorough understanding of UI/UX concepts</h3>
          </li>
          <li>
            <div class="bullet"></div>
            <h3>Knowledge of SEO techniques</h3>
          </li>
          <li>
            <div class="bullet"></div>
            <h3>basics of Photoshop</h3>
          </li>
          <li>
            <div class="bullet"></div>
            <h3>touch typer</h3>
          </li>
          <li>
            <div class="bullet"></div>
            <h3>people-person</h3>
          </li>
        </ul>
      </div>
    </div>
    <div class="resume-right-column">
      <!-- image: only on mobile -->
      <div class="resume-left__image hidden-on-desktop">
        <img
          src="~/assets/images/profile-square@500px.jpg"
          alt="profile picture"
        />
      </div>

      <!-- main title -->
      <h1>
        S.Mohammad
        <br />
        Hosseininejad
      </h1>
      <!-- subtitle -->
      <p class="resume-right__subheader">Front-end web developer</p>

      <!-- history -->
      <ResumeInformationCard title="my history">
        <template #icon>
          <svg fill="white" viewBox="0 0 24 24">
            <path
              d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
            />
          </svg>
        </template>
        <template #content>
          <div class="resume-right__profile">
            Born in 1999, I started diving into the realm of programming right
            when I entered college;
            <br />
            At first, Everything began by learning C/C++ in the first semester
            to get a taste of what programming is capable of. Then, I learned
            object oriented concept by doing some university projects with Java.
            Afterwards, I spent a year learning Python and solving over 110
            programming problems on "quera.ir" to enforce my mind to find
            algorithms more efficiently. At last, by early 2020, I had enough
            knowledge to enter front-end web development field and my
            professional career started since then.
          </div>
        </template>
      </ResumeInformationCard>

      <!-- education -->
      <ResumeInformationCard title="education">
        <template #icon>
          <svg fill="white" viewBox="0 0 24 24">
            <path
              d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
            />
          </svg>
        </template>
        <template #content>
          <div class="resume-right__info-card">
            <h3 class="resume-right__info-card__position">
              BS.c in Computer Engineering
            </h3>
            <div class="flex-space-between">
              <div class="resume-right__info-card__location">
                Shahrood University of technology
              </div>
              <div class="resume-right__info-card__date">
                Sep. 2018 - present
              </div>
            </div>
            <div class="resume-right__info-card__description">
              Ranked 5th among all industrial universities in the country
            </div>
          </div>
        </template>
      </ResumeInformationCard>

      <!-- work experience -->
      <ResumeInformationCard title="work experience">
        <template #icon>
          <svg fill="white" viewBox="0 0 24 24">
            <path
              d="M10 16V15H3L3 19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15H14V16H10M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V12C2 13.11 2.89 14 4 14H10V12H14V14H20C21.1 14 22 13.1 22 12V9C22 7.9 21.1 7 20 7M14 7H10V5H14V7Z"
            />
          </svg>
        </template>
        <template #content>
          <!-- Bazarkhodro -->
          <div class="resume-right__info-card">
            <h3 class="resume-right__info-card__position">
              Front-end Developer
            </h3>
            <div class="flex-space-between">
              <div class="resume-right__info-card__location">
                Tose-e Tejarat Chabok Garayan
              </div>
              <div class="resume-right__info-card__date">
                Sep. 2021 - present
              </div>
            </div>
            <div class="resume-right__info-card__description">
              Working on five repositories including two websites and three
              admin panels.
              <br />
              <a
                href="https://bazarkhodro.ir/"
                style="font-weight: bold"
                target="_blank"
              >
                Bazarkhodro.ir
              </a>
              : A feature-rich website enabling users to buy/sell cars in the
              country.
              <br />
              <br />
              <a
                href="https://rentifa.com/"
                style="font-weight: bold"
                target="_blank"
              >
                Rentifa.com
              </a>
              : A useful website for users to rent cars in specific cities of
              the country. Also, provided admin panels for agents to be able to
              put their vehicles on the website for renting.
            </div>
          </div>

          <!-- Ryca -->
          <div class="resume-right__info-card">
            <h3 class="resume-right__info-card__position">
              Front-end Developer
            </h3>
            <div class="flex-space-between">
              <div class="resume-right__info-card__location">
                Avay-e Hooshmand-e Ryca
              </div>
              <div class="resume-right__info-card__date">
                Jun. 2021 - Sep. 2021
              </div>
            </div>
            <div class="resume-right__info-card__description">
              My internship job which I worked on two admin panels.
              <br />
              <a
                href="https://msmarket.ir/"
                style="font-weight: bold"
                target="_blank"
              >
                Msmarket.ir
              </a>
              : which was the one that played a bigger role in, was for managing
              stockholders' information of a particular company. The atmosphere
              was fun and I worked with awesome people there!
            </div>
          </div>

          <!-- self employed -->
          <div class="resume-right__info-card">
            <h3 class="resume-right__info-card__position">
              Front-end Developer
            </h3>
            <div class="flex-space-between">
              <div class="resume-right__info-card__location">
                Self-employed (Freelancing)
              </div>
              <div class="resume-right__info-card__date">
                Feb 2020 - Jun. 2021
              </div>
            </div>
            <div class="resume-right__info-card__description">
              Before making use of the power of frameworks, I started with some
              free-lance projects using vanilla HTML/CSS/Javascript to fully
              understand the basics. the following projects are two examples of
              my work when I first began my journey:
              <br />
              <a
                href="https://nutricasteel.com/"
                style="font-weight: bold"
                target="_blank"
              >
                Nutricasteel.com
              </a>
              : A website belonging to a small start-up called "Nutricasteel" to
              better introduce their products to their customers from various
              countries.
              <br />
              <br />
              <a
                href="https://hivasls2.ir/"
                style="font-weight: bold"
                target="_blank"
              >
                Hivasls.ir
              </a>
              : A single-page website being a door for students of
              "Shokuh-e-hiva" language institute to enter their online learning
              platform panel.
            </div>
          </div>
        </template>
      </ResumeInformationCard>
    </div>
  </div>
</template>

<script setup>
import ResumeInformationCard from '~/components/cards/ResumeInformationCard'
</script>

<script>
export default {
  layout: 'resume',
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/variables';
$breakpoint-layout-shift: 1050px;

h1 {
  font-size: min(10vw, 6rem);
  margin-bottom: 2rem;
  margin-top: min(3vw, 4rem);
  text-transform: uppercase;
  letter-spacing: 3px;
}

h2 {
  font-size: 2.1rem;
}

h3 {
  font-size: 1.4rem;
}

@media screen and (max-width: $breakpoint-layout-shift) {
  .hidden-on-mobile {
    display: none !important;
  }
}

@media screen and (min-width: $breakpoint-layout-shift) {
  .hidden-on-desktop {
    display: none !important;
  }
}

.resume {
  margin-inline: auto;
  border-radius: 20px;
  overflow: hidden;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  color: $color-green-dark;

  @media screen and (max-width: $breakpoint-layout-shift) {
    grid-template-columns: 1fr;
  }

  &-left {
    &-column {
      background: $color-background;
      padding-inline: min(7vw, 3rem);
    }

    &__image {
      display: grid;
      place-items: center;
      padding-block: min(10vw, 5.5rem);
      background: $color-background;
      border-radius: 10px;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;

        @media screen and (max-width: $breakpoint-layout-shift) {
          width: max(35vw, 200px);
          height: max(35vw, 200px);
        }
      }
    }

    &__box {
      margin-bottom: 9rem;
      color: $color-green-dark;

      &-title {
        text-transform: uppercase;
        padding-bottom: 0.5rem;
        margin-bottom: 2rem;
        border-bottom: 3px solid $color-green-dark;
      }

      .contact-box {
        margin-block: 1rem;
        display: grid;
        align-items: center;
        grid-template-areas: 'img title' 'img subtitle';
        grid-template-columns: 40px 1fr;

        div {
          grid-area: img;
          background: $color-green-dark;
          border-radius: 50%;
          padding: 0.4rem;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;

          svg {
            fill: white;
          }
        }

        h3 {
          grid-area: title;
          text-transform: uppercase;
          padding-bottom: 0.25rem;
        }

        p,
        a {
          text-decoration: none;
          grid-area: subtitle;
          font-size: $font-body;
        }
      }

      .expertise-box {
        margin-block: 1.25rem;
        display: flex;
        justify-content: space-between;
        place-items: center;

        h3 {
          text-transform: uppercase;
        }

        div {
          height: 35px;
          width: 70px;
          background: $color-green-dark;
          color: white;
          font-weight: bold;
          border-radius: 5px;
          font-size: $font-body;
          display: grid;
          place-items: center;
        }
      }

      .pre-skills-box {
        li {
          margin-block: 1.25rem;
          display: flex;
          align-items: center;
          text-transform: capitalize;

          .bullet {
            width: 10px;
            height: 10px;
            background: $color-green-dark;
            margin-right: 0.75rem;
            border-radius: 50%;
          }
        }
      }
    }
  }

  &-right {
    &-column {
      padding-inline: min(5vw, 3rem);
      background: white;

      @media screen and (max-width: $breakpoint-layout-shift) {
        grid-row: 1;
      }
    }

    &__subheader {
      text-transform: capitalize;
      font-size: $font-body;
      margin-bottom: 6rem;
    }

    &__profile {
      font-size: $font-body;
      line-height: 26px;
      text-align: justify;
      text-justify: inter-word;
    }

    &__info-card {
      margin-bottom: 4rem;

      .flex-space-between {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        @media screen and (max-width: 550px) {
          flex-direction: column;
          text-align: center;
          margin-block: 1.5rem;
        }
      }

      &__location {
        font-size: $font-body;
      }

      &__date {
        font-size: $font-body;
        text-align: right;

        @media screen and (max-width: $breakpoint-layout-shift) {
          text-align: center;
        }
      }

      &__description {
        font-size: $font-body;
        line-height: 25px;
        text-align: justify;
        text-justify: inter-word;
      }
    }
  }
}
</style>
