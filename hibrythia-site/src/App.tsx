import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PWADevTools from '@/components/PWADevTools';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import LegendsAndMyths from '@/pages/LegendsAndMyths/index';
import TheMidwinterFestival from '@/pages/LegendsAndMyths/TheMidwinterFestival';
import TheLoreOfHexphosIsland from '@/pages/LegendsAndMyths/TheLoreOfHexphosIsland';
import OurWorldbuilding from '@/pages/OurWorldbuilding';
import WorldbuildingContents from '@/pages/WorldbuildingContents';
import CalendarAndTime from '@/pages/WorldbuildingContents/CalendarAndTime';
import TheNhumelaCluster from '@/pages/WorldbuildingContents/TheNhumelaCluster';
import PlanetSchavel from '@/pages/WorldbuildingContents/TheNhumelaCluster/PlanetSchavel';
import SchavelianCalendar from '@/pages/WorldbuildingContents/TheNhumelaCluster/PlanetSchavel/TheSchavelianCalendar';
import OurPlanetHetra from '@/pages/WorldbuildingContents/OurPlanetHetra';
import TheNhuemynDB from '@/pages/WorldbuildingContents/TheNhuemynDB';
import CreaturesOfTheWorld from '@/pages/WorldbuildingContents/CreaturesOfTheWorld';
import BeastHierarchyKingdom from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/BeastHierarchyKingdom';
import TheDregalosaurus from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/TheDregalosaurus';
import DemonCreatures from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/DemonCreatures';
import KillerRabbits from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/KillerRabbits';
import HetraDirectWolves from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/HetraDirectWolves';
import Flimpies from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/Flimpies';
import DeerDragons from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/DeerDragons';
import PastModernDinosaurs from '@/pages/WorldbuildingContents/CreaturesOfTheWorld/PastModernDinosaurs';
import LocalesAndSights from '@/pages/LocalesAndSights';
import HetraSEAPSpaceProgram from '@/pages/LocalesAndSights/HetraSEAPSpaceProgram';
import TheSkypeakObelisk from '@/pages/LocalesAndSights/TheSkypeakObelisk';
import TheErbgerogerFlower from '@/pages/LocalesAndSights/TheErbgerogerFlower';
import TheEulerianCatalogs from '@/pages/LocalesAndSights/TheEulerianCatalogs';
import TheTreeOfElenia from '@/pages/LocalesAndSights/TheTreeOfElenia';
import TheOakgnarGrandTree from '@/pages/LocalesAndSights/TheOakgnarGrandTree';
import TheLostCityOfLhavaria from '@/pages/LocalesAndSights/TheLostCityOfLhavaria';
import TheAlarcticIcePalace from '@/pages/LocalesAndSights/TheAlarcticIcePalace';
import TheHynnianChurch from '@/pages/LocalesAndSights/TheHynnianChurch';
import TheIyonianChurches from '@/pages/LocalesAndSights/TheIyonianChurches';
import TheBhuseianIceChurch from '@/pages/LocalesAndSights/TheBhuseianIceChurch';
import TheRunthianChurch from '@/pages/LocalesAndSights/TheRunthianChurch';
import TheYhursianDemonChurch from '@/pages/LocalesAndSights/TheYhursianDemonChurch';
import TheDraxianSkyChurch from '@/pages/LocalesAndSights/TheDraxianSkyChurch';
import TheSethranianChurch from '@/pages/LocalesAndSights/TheSethranianChurch';
import AlarcticAlpines from '@/pages/LocalesAndSights/AlarcticAlpines';
import TheContinentOfVarleqe from '@/pages/LocalesAndSights/TheContinentOfVarleqe';
import TheContinentOfEulerich from '@/pages/LocalesAndSights/TheContinentOfEulerich';
import TheSkyContinentOfHetrania from '@/pages/LocalesAndSights/TheSkyContinentOfHetrania';
import TheContinentOfLynneria from '@/pages/LocalesAndSights/TheContinentOfLynneria';
import TheContinentOfNorrane from '@/pages/LocalesAndSights/TheContinentOfNorrane';
import TheContinentOfRynel from '@/pages/LocalesAndSights/TheContinentOfRynel';
import TheVarleqianWaterfall from '@/pages/LocalesAndSights/TheVarleqianWaterfall';
import MetaWorldbuilding from '@/pages/MetaWorldbuilding';
import TheSigilOfHibrythia from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia';
import TheDivineRealm from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia/TheDivineRealm';
import TheSylphrelm from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia/TheSylphrelm';
import TheStygianRealm from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia/TheStygianRealm';
import TheExtreuluxRealm from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia/TheExtreuluxRealm';
import Ellhumhellm from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia/Ellhumhellm';
import IllusiaThePlaneOfDreams from '@/pages/MetaWorldbuilding/TheSigilOfHibrythia/IllusiaThePlaneOfDreams';
import TheMultiverseOfMultitudes from '@/pages/MetaWorldbuilding/TheMultiverseOfMultitudes';
import TheCosmicTrainFromBeyond from '@/pages/MetaWorldbuilding/TheCosmicTrainFromBeyond';
import TheOuterbounds from '@/pages/MetaWorldbuilding/TheOuterbounds';
import CharacterProfiles from '@/pages/CharacterProfiles';
import PhilstraRhys from '@/pages/CharacterProfiles/PhilstraRhys';
import RaeyaFlutters from '@/pages/CharacterProfiles/RaeyaFlutters';
import KydelRhunes from '@/pages/CharacterProfiles/KydelRhunes';
import ZohlCelestreule from '@/pages/CharacterProfiles/ZohlCelestreule';
import EienelTheCosmicIfrit from '@/pages/CharacterProfiles/EienelTheCosmicIfrit';
import QueenRachnaea from '@/pages/CharacterProfiles/QueenRachnaea';
import EphelTheMoonbel from '@/pages/CharacterProfiles/EphelTheMoonbel';
import Bookshelf from '@/pages/Bookshelf';
import Vol0HTHGOE from '@/pages/Bookshelf/Vol0HTHGOE';
import Vol0EP0 from '@/pages/Bookshelf/Vol0HTHGOE/EP0';
import Vol0EP1 from '@/pages/Bookshelf/Vol0HTHGOE/EP1';
import Vol0EP2 from '@/pages/Bookshelf/Vol0HTHGOE/EP2';
import Vol0EP3 from '@/pages/Bookshelf/Vol0HTHGOE/EP3';
import Vol0EP4 from '@/pages/Bookshelf/Vol0HTHGOE/EP4';
import Vol0EP5 from '@/pages/Bookshelf/Vol0HTHGOE/EP5';
import Vol0EP6 from '@/pages/Bookshelf/Vol0HTHGOE/EP6';
import HetraStandardSystems from '@/pages/WorldbuildingContents/HetraStandardSystems';
import EconomyOfPlanetHetra from '@/pages/WorldbuildingContents/EconomyOfPlanetHetra';
import GeoscienceOfHetra from '@/pages/WorldbuildingContents/GeoscienceOfHetra';
import MagicDatabase from '@/pages/WorldbuildingContents/MagicDatabase';
import HibrythianReligions from '@/pages/WorldbuildingContents/HibrythianReligions';
import TerminologyLexicon from '@/pages/WorldbuildingContents/TerminologyLexicon';
import ThePowerscalingSystem from '@/pages/WorldbuildingContents/ThePowerscalingSystem';
import WeatherClimateSeasons from '@/pages/WorldbuildingContents/WeatherClimateSeasons';
import TechnologyTransitSystems from '@/pages/WorldbuildingContents/TechnologyTransitSystems';
import AncientGreungeria from '@/pages/WorldbuildingContents/AncientGreungeria';
import LearningGuide from '@/pages/WorldbuildingContents/AncientGreungeria/LearningGuide';
import ChantOfBeasts from '@/pages/WorldbuildingContents/AncientGreungeria/ChantOfBeasts';
import TemporalTimeStreamDilation from '@/pages/WorldbuildingContents/TemporalTimeStreamDilation';
import TheNaturalLawOfSpaceTime from '@/pages/WorldbuildingContents/TheNaturalLawOfSpaceTime';
import The17DimensionsOfReality from '@/pages/WorldbuildingContents/The17DimensionsOfReality';
import TimeSystem from '@/pages/TimeSystem';
import NotFound from '@/pages/NotFound';

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const el = wrapRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(6px)';
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.22s ease, transform 0.22s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <div ref={wrapRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <>
      <PWADevTools />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><Home /></PageTransition>} />
          <Route path="lore" element={<PageTransition><LegendsAndMyths /></PageTransition>} />
          <Route path="lore/midwinter-festival" element={<PageTransition><TheMidwinterFestival /></PageTransition>} />
          <Route path="lore/hexphos-island" element={<PageTransition><TheLoreOfHexphosIsland /></PageTransition>} />
          <Route path="world" element={<PageTransition><OurWorldbuilding /></PageTransition>} />
          <Route path="world/databases" element={<PageTransition><WorldbuildingContents /></PageTransition>} />
          <Route path="world/databases/CalendarAndTime" element={<PageTransition><CalendarAndTime /></PageTransition>} />
          <Route path="world/databases/TheNhumelaCluster" element={<PageTransition><TheNhumelaCluster /></PageTransition>} />
          <Route path="world/databases/TheNhumelaCluster/PlanetSchavel" element={<PageTransition><PlanetSchavel /></PageTransition>} />
          <Route path="world/databases/TheNhumelaCluster/PlanetSchavel/SchavelianCalendar" element={<PageTransition><SchavelianCalendar /></PageTransition>} />
          <Route path="world/databases/OurPlanetHetra" element={<PageTransition><OurPlanetHetra /></PageTransition>} />
          <Route path="world/databases/HetraStandardSystems" element={<PageTransition><HetraStandardSystems /></PageTransition>} />
          <Route path="world/databases/EconomyOfPlanetHetra" element={<PageTransition><EconomyOfPlanetHetra /></PageTransition>} />
          <Route path="world/databases/GeoscienceOfHetra" element={<PageTransition><GeoscienceOfHetra /></PageTransition>} />
          <Route path="world/databases/MagicDatabase" element={<PageTransition><MagicDatabase /></PageTransition>} />
          <Route path="world/databases/HibrythianReligions" element={<PageTransition><HibrythianReligions /></PageTransition>} />
          <Route path="world/databases/TerminologyLexicon" element={<PageTransition><TerminologyLexicon /></PageTransition>} />
          <Route path="world/databases/ThePowerscalingSystem" element={<PageTransition><ThePowerscalingSystem /></PageTransition>} />
          <Route path="world/databases/WeatherClimateSeasons" element={<PageTransition><WeatherClimateSeasons /></PageTransition>} />
          <Route path="world/databases/TechnologyTransitSystems" element={<PageTransition><TechnologyTransitSystems /></PageTransition>} />
          <Route path="world/databases/AncientGreungeria" element={<PageTransition><AncientGreungeria /></PageTransition>} />
          <Route path="world/databases/AncientGreungeria/LearningGuide" element={<PageTransition><LearningGuide /></PageTransition>} />
          <Route path="world/databases/AncientGreungeria/ChantOfBeasts" element={<PageTransition><ChantOfBeasts /></PageTransition>} />
          <Route path="world/databases/TemporalTimeStreamDilation" element={<PageTransition><TemporalTimeStreamDilation /></PageTransition>} />
          <Route path="world/databases/TheNaturalLawOfSpaceTime" element={<PageTransition><TheNaturalLawOfSpaceTime /></PageTransition>} />
          <Route path="world/databases/The17DimensionsOfReality" element={<PageTransition><The17DimensionsOfReality /></PageTransition>} />
          <Route path="world/databases/TheNhuemynDB" element={<PageTransition><TheNhuemynDB /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld" element={<PageTransition><CreaturesOfTheWorld /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/BeastHierarchyKingdom" element={<PageTransition><BeastHierarchyKingdom /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/TheDregalosaurus" element={<PageTransition><TheDregalosaurus /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/DemonCreatures" element={<PageTransition><DemonCreatures /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/KillerRabbits" element={<PageTransition><KillerRabbits /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/HetraDirectWolves" element={<PageTransition><HetraDirectWolves /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/Flimpies" element={<PageTransition><Flimpies /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/DeerDragons" element={<PageTransition><DeerDragons /></PageTransition>} />
          <Route path="world/databases/CreaturesOfTheWorld/PastModernDinosaurs" element={<PageTransition><PastModernDinosaurs /></PageTransition>} />
          <Route path="world/locales" element={<PageTransition><LocalesAndSights /></PageTransition>} />
          <Route path="world/locales/alarctic-alpines" element={<PageTransition><AlarcticAlpines /></PageTransition>} />
          <Route path="world/locales/eulerich" element={<PageTransition><TheContinentOfEulerich /></PageTransition>} />
          <Route path="world/locales/hetrania" element={<PageTransition><TheSkyContinentOfHetrania /></PageTransition>} />
          <Route path="world/locales/lynneria" element={<PageTransition><TheContinentOfLynneria /></PageTransition>} />
          <Route path="world/locales/norrane" element={<PageTransition><TheContinentOfNorrane /></PageTransition>} />
          <Route path="world/locales/rynel" element={<PageTransition><TheContinentOfRynel /></PageTransition>} />
          <Route path="world/locales/varleqe" element={<PageTransition><TheContinentOfVarleqe /></PageTransition>} />
          <Route path="world/locales/HetraSEAPSpaceProgram" element={<PageTransition><HetraSEAPSpaceProgram /></PageTransition>} />
          <Route path="world/locales/skypeak-obelisk" element={<PageTransition><TheSkypeakObelisk /></PageTransition>} />
          <Route path="world/locales/erbgeroger-flower" element={<PageTransition><TheErbgerogerFlower /></PageTransition>} />
          <Route path="world/locales/eulerian-catalogs" element={<PageTransition><TheEulerianCatalogs /></PageTransition>} />
          <Route path="world/locales/tree-of-elenia" element={<PageTransition><TheTreeOfElenia /></PageTransition>} />
          <Route path="world/locales/oakgnar-grand-tree" element={<PageTransition><TheOakgnarGrandTree /></PageTransition>} />
          <Route path="world/locales/varleqian-waterfall" element={<PageTransition><TheVarleqianWaterfall /></PageTransition>} />
          <Route path="world/locales/lost-city-lhavaria" element={<PageTransition><TheLostCityOfLhavaria /></PageTransition>} />
          <Route path="world/locales/alarctic-ice-palace" element={<PageTransition><TheAlarcticIcePalace /></PageTransition>} />
          <Route path="world/locales/hynnian-church" element={<PageTransition><TheHynnianChurch /></PageTransition>} />
          <Route path="world/locales/iyonian-churches" element={<PageTransition><TheIyonianChurches /></PageTransition>} />
          <Route path="world/locales/bhuseian-ice-church" element={<PageTransition><TheBhuseianIceChurch /></PageTransition>} />
          <Route path="world/locales/runthian-church" element={<PageTransition><TheRunthianChurch /></PageTransition>} />
          <Route path="world/locales/yhursian-demon-church" element={<PageTransition><TheYhursianDemonChurch /></PageTransition>} />
          <Route path="world/locales/draxian-sky-church" element={<PageTransition><TheDraxianSkyChurch /></PageTransition>} />
          <Route path="world/locales/sethranian-church" element={<PageTransition><TheSethranianChurch /></PageTransition>} />
          <Route path="world/meta" element={<PageTransition><MetaWorldbuilding /></PageTransition>} />
          <Route path="world/meta/TheMultiverseOfMultitudes" element={<PageTransition><TheMultiverseOfMultitudes /></PageTransition>} />
          <Route path="world/meta/TheCosmicTrainFromBeyond" element={<PageTransition><TheCosmicTrainFromBeyond /></PageTransition>} />
          <Route path="world/meta/TheOuterbounds" element={<PageTransition><TheOuterbounds /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia" element={<PageTransition><TheSigilOfHibrythia /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia/divine-realm" element={<PageTransition><TheDivineRealm /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia/sylphrelm" element={<PageTransition><TheSylphrelm /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia/stygian-realm" element={<PageTransition><TheStygianRealm /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia/extreulux-realm" element={<PageTransition><TheExtreuluxRealm /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia/ellhumhellm" element={<PageTransition><Ellhumhellm /></PageTransition>} />
          <Route path="world/meta/TheSigilOfHibrythia/illusia" element={<PageTransition><IllusiaThePlaneOfDreams /></PageTransition>} />
          <Route path="characters" element={<PageTransition><CharacterProfiles /></PageTransition>} />
          <Route path="characters/PhilstraRhys" element={<PageTransition><PhilstraRhys /></PageTransition>} />
          <Route path="characters/RaeyaFlutters" element={<PageTransition><RaeyaFlutters /></PageTransition>} />
          <Route path="characters/KydelRhunes" element={<PageTransition><KydelRhunes /></PageTransition>} />
          <Route path="characters/ZohlCelestreule" element={<PageTransition><ZohlCelestreule /></PageTransition>} />
          <Route path="characters/EienelTheCosmicIfrit" element={<PageTransition><EienelTheCosmicIfrit /></PageTransition>} />
          <Route path="characters/QueenRachnaea" element={<PageTransition><QueenRachnaea /></PageTransition>} />
          <Route path="characters/EphelTheMoonbel" element={<PageTransition><EphelTheMoonbel /></PageTransition>} />
          <Route path="bookshelf" element={<PageTransition><Bookshelf /></PageTransition>} />
          <Route path="bookshelf/vol0" element={<PageTransition><Vol0HTHGOE /></PageTransition>} />
          <Route path="bookshelf/vol0/ep0" element={<PageTransition><Vol0EP0 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep1" element={<PageTransition><Vol0EP1 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep2" element={<PageTransition><Vol0EP2 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep3" element={<PageTransition><Vol0EP3 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep4" element={<PageTransition><Vol0EP4 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep5" element={<PageTransition><Vol0EP5 /></PageTransition>} />
          <Route path="bookshelf/vol0/ep6" element={<PageTransition><Vol0EP6 /></PageTransition>} />
          <Route path="32-16TimeSystem" element={<PageTransition><TimeSystem /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Route>
      </Routes>
    </>
  );
}





