import { Composition, Still } from "remotion";
import { Ad, FULL } from "./Ad";
import { Wall } from "./Wall";
import { Screen, SCREEN_LEN } from "./Screen";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="Ad" component={Ad} durationInFrames={FULL} fps={30} width={1920} height={1080} />
    <Composition id="S-Wall" component={Wall} durationInFrames={300} fps={30} width={1920} height={1080} />
    <Composition id="Screen" component={Screen} durationInFrames={SCREEN_LEN} fps={30} width={1600} height={1000} />
    <Still id="noop" component={() => null} width={10} height={10} />
  </>
);
