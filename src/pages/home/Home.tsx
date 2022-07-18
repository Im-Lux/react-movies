import { FC } from "react";
import "./home.scss";
import { Button } from "react-bootstrap";
import { streamingServices } from "../../data/streaming-service";
import StreamingService from "../../components/home/StreamingService";
import FeaturesContainer from "../../components/home/FeaturesContainer";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__container__info">
            <h1>All your streaming services in one app.</h1>
            <p>
              Get personal recommendations for movies and TV shows available on
              Netflix, Disney Plus, Amazon Prime Video and many more.
            </p>

            <div className="hero__container__info__actions d-flex gap-3">
              <Link to="/discovery">
                <Button className="btn-primary" variant="warning">
                  Discover movies & TV shows
                </Button>
              </Link>
              <Button variant="dark">Features</Button>
            </div>

            <span>Streaming services on JustWatch</span>

            <div className="hero__container__info__services d-flex gap-3">
              {streamingServices.map((service, index) => (
                <StreamingService
                  key={index}
                  name={service.name}
                  imagePath={service.imagePath}
                  url={service.url}
                />
              ))}
            </div>
          </div>

          <div className="hero__container__image">
            <img
              src={require("../../assets/images/home/tv.webp")}
              alt="hero TV"
            />
          </div>
        </div>
      </section>

      <section className="features">
        <FeaturesContainer
          quote="All in one place"
          title="Your streaming guide"
          description="Get personal recommendations and see what’s new across your
              favorite streaming services."
          imagePath="home/recommendations.webp"
        />

        <FeaturesContainer
          quote="One search"
          title="One search to rule them all"
          description="Never go back and forth between your services again to find out if a movie or TV show is available."
          imagePath="home/search.webp"
          order={1}
        />

        <FeaturesContainer
          quote="One watchlist"
          title="Combine all your watchlists"
          description="Keep track of all the TV shows and movies you want to watch in one list across all your devices."
          imagePath="home/watchlist.webp"
        />
      </section>

      <section className="recommendations">
        <div className="recommendations__container">
          <div className="recommendations__container__logo">
            <svg
              height="50"
              viewBox="0 0 28 28"
              width="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                <stop offset="0" stop-color="#fbd446" />
                <stop offset="1" stop-color="#e2b512" />
              </linearGradient>
              <path
                d="m0 19.7015845c.00056683-.0736745.00721521-.1234928.00721521-.1234928s.0486242-4.0927864.0072152-5.1262119c-.0417227-1.0328056.88150975-.5424399.88150975-.5424399l5.17926192 2.6467967s1.01263824.4804467-.01756746 1.0033588c-.7604198.3865272-4.1553303 2.1421726-5.17643857 2.6278888-.78350199.3732745-.8790368-.1862574-.88119605-.4659541v-.0199457zm21.2500314-8.8949003s-.0705836-.84310659.6525054-.4764172c.72403.3669993 4.3319457 2.1964167 4.3319457 2.1964167s1.9964156.9810413-.0047055 1.9905995c-1.4151211.7138509-3.5743494 1.8046201-4.3184565 2.1784387-.7444208.3738186-.6669358-.4317822-.6669358-.4317822zm-6.2110368 9.5159455c-1.0207944.4860261-.8742944-.6090825-.8742944-.6090825s.0489379-4.0927863.0075289-5.1265217c-.0420364-1.0334255.8815097-.5421299.8815097-.5421299l5.1786341 2.6464866s1.0132656.4801368-.0175675 1.0036688c-.7594786.3859072-4.1547026 2.1418626-5.1758108 2.6275787zm-7.07027199 3.5171807c-1.02110824.4860262-.87429452-.6100124-.87429452-.6100124s.04862421-4.0927866.00721521-5.1259022c-.0417227-1.0337355.88119602-.5424399.88119602-.5424399l5.17957548 2.6467968s1.0126382.4801368-.0178812 1.0036688c-.760106.3855973-4.15501645 2.1415528-5.17581099 2.6278889zm.00784224-7.1642369c-1.02079455.4857162-.87398082-.6093925-.87398082-.6093925s.0486242-4.0927866.0069015-5.1262121c-.041409-1.03342554.88150973-.5424399.88150973-.5424399l5.17957554 2.6467968s1.0129519.4801368-.0178812 1.0033588c-.7597923.3859073-4.15501649 2.1418627-5.17612475 2.6278889zm7.06399885-3.7003698c-1.0207944.4860261-.8739807-.6090825-.8739807-.6090825s.0486242-4.09309643.0069015-5.12652191c-.0417227-1.03311551.8815097-.54243989.8815097-.54243989l5.1792615 2.64710667s1.0129518.47982682-.0178812 1.00304883c-.760106.3859072-4.15533 2.1418627-5.1758108 2.6278888zm-14.15215252.1404143c-1.02079448.4860261-.87398077-.6097025-.87398077-.6097025s.0486242-4.09278638.0069015-5.12621184c-.0417227-1.03311551.88150968-.54243989.88150968-.54243989l5.1792615 2.64710663s1.01295187.47982682-.01788116 1.0033588c-.75979233.3862172-4.15501627 2.1415527-5.17581075 2.6278888zm7.08093875-3.67247306c-1.02048082.48602615-.87429451-.60908252-.87429451-.60908252s.0489379-4.09278653.0069015-5.12652199c-.0410953-1.03311554.88182342-.54212994.88182342-.54212994l5.17926176 2.64679675s1.0129519.47982683-.0175675 1.00304886c-.7601061.38621721-4.15533014 2.14217265-5.17612467 2.62788884zm-7.9568052 11.80783076c-.00156507-.5272516.53236005-.3112055.53236005-.3112055s5.27745143 2.6874023 5.87380376 2.9961281c.59697973.3090358.00125482.6512379.00125482.6512379s-2.13162234 1.0582228-4.20081746 2.1161356c-2.06888143 1.0585327-2.1981277-.9878606-2.1981277-.9878606zm.02259004-15.49363246.00470571-4.4647452s.12767774-2.04608325 2.19750021-.98972032c2.06982247 1.05605296 4.20269955 2.11179596 4.20269955 2.11179596s.5957249.34220208-.00062741.6515478c-.59666601.30934572-5.87098023 3.00139738-5.87098023 3.00139738s-.5336114.21635602-.53329783-.31027562z"
                fill="url(#a)"
                fill-rule="evenodd"
                transform="translate(.367831)"
              />
            </svg>
          </div>

          <h1>
            Get recommendations from all your favorite streaming services in one
            place
          </h1>

          <Link to="/discovery">
            <Button className="btn-primary p-3 fw-bold" variant="warning">
              Discover movies & TV shows
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
