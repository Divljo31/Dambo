import "./Styles/Cenovnik.scss"
import PricingCard from './components/PricingCard'


const Cenovnik = () => {
  return (
    <section className="cenovnik">
      <div className="bg-wave"></div>
      <div className="cenovnik-container">
        <div className="cenovnik-header">
          <h1 className="cenovnik-title">Cenovnik</h1>
        </div>

        <div className="pricingCard-container">
          <PricingCard
            title="Daily"
            description="Duo auge vocent luptatum eu, viderer mnesar."
            price="35"
            bgColor="#FFB6C1" />

          <PricingCard
            title="Monthly"
            description="Augue nue vocent luptatum eu, viderer mnesar."
            price="70"
            bgColor="#AFEEEE" />

          <PricingCard
            title="Yearly"
            description="Duo auge vocent luptatum eu, viderer mnesar."
            price="99"
            bgColor="#D9DD80" />
        </div>

      </div>
    </section>
  );
}

export default Cenovnik