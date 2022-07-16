import { Intro } from "./Intro";
import { useWindowHeight} from "@react-hook/window-size";
//import useScrollPosition from '@react-hook/window-scroll'

export const App = () => {
  const height = useWindowHeight()
  //const scroll = useScrollPosition()
  
  return (
    <div>
      <section>
        <Intro height={height}/>
      </section>
    </div>
  );
};
