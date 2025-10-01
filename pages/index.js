import Layout from '../src/components/layout/Layout';
import ArtifactsSection from '../src/components/home/ArtifactsSection';
import BenefitsSection from '../src/components/home/BenefitsSection';
import CtaSection from '../src/components/home/CtaSection';
import HomeHero from '../src/components/home/HomeHero';
import PositioningSection from '../src/components/home/PositioningSection';
import RoadmapSection from '../src/components/home/RoadmapSection';
import StructureSection from '../src/components/home/StructureSection';

export default function Home() {
  return (
    <Layout
      title="PMO Educacross - Proposta de Estruturação"
      description="Visão geral do PMO Educacross com governança, metodologia e roadmap de implantação."
      hero={<HomeHero />}
    >
      <PositioningSection />
      <CtaSection />
      <StructureSection />
      <RoadmapSection />
      <BenefitsSection />
      <ArtifactsSection />
    </Layout>
  );
}
