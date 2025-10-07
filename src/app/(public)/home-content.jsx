import ArtifactsSection from './_components/home/ArtifactsSection';
import BenefitsSection from './_components/home/BenefitsSection';
import CtaSection from './_components/home/CtaSection';
import HomeHero from './_components/home/HomeHero';
import PositioningSection from './_components/home/PositioningSection';
import RoadmapSection from './_components/home/RoadmapSection';
import StructureSection from './_components/home/StructureSection';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Proposta de Estruturação',
  description:
    'Visão geral do PMO Educacross com governança, metodologia, benefícios e artefatos essenciais para implantação.',
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="section-wrapper">
        <div className="section-content">
          <PositioningSection />
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section-content">
          <CtaSection />
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section-content">
          <StructureSection />
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section-content">
          <RoadmapSection />
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section-content">
          <BenefitsSection />
        </div>
      </div>
      <div className="section-wrapper">
        <div className="section-content">
          <ArtifactsSection />
        </div>
      </div>
    </>
  );
}
